"use client";
import React, { useState, useEffect } from "react";
import namedays from "@/data/namedays/suomalaiset.js";
import DateSelector from "@/components/DatePicker";
import Input from "@/components/common/Input/Input";

type Nameday = {
  date: string;
  day: number;
  month: number;
  name: string;
  subtype: string;
  type: string;
};

export default function NameSearchEngine() {
  const [nameSearchResult, setNameSearchResult] = useState("");
  const [dateSearchResult, setDateSearchResult] = useState<Nameday[]>([]);
  const [firstDateSearchDone, setFirstDateSearchDone] = useState(false);
  const today = new Date();

  const findByName = (name: string) => {
    const result = namedays.find(
      (nameday: Nameday) => name.toLowerCase() === nameday.name.toLowerCase()
    );
    if (result) {
      setNameSearchResult(
        'Henkilön "' + result.name + '" nimipäivä on ' + result.date
      );
    } else {
      setNameSearchResult(
        "Haulla ei löytynyt tuloksia, kokeile toista hakusanaa"
      );
    }
  };

  // eslint-disable-next-line
  useEffect(() => findByDate(today.getDate(), today.getMonth()), []);

  const findByDate = (dayX: number, monthX: number) => {
    const result = namedays.filter((nameday: Nameday) => {
      const { day, month } = nameday;
      return dayX === day && monthX === month;
    });
    setFirstDateSearchDone(true);
    if (result.length > 0) {
      setDateSearchResult(result);
    } else {
      setDateSearchResult([]);
    }
  };

  return (
    <div className="w-full text-gray text-black">
      <div className="flex flex-1 flex-col rounded">
        <h2 className="text-xl mb-2">Hae nimipäivää nimellä</h2>
        <Input
          label="Nimi"
          placeholder="Nimi"
          onChange={(e) => {
            findByName(e.target.value);
          }}
        />
        <p
          className="mt-5"
          style={{
            color:
              nameSearchResult ===
              "Haulla ei löytynyt tuloksia, kokeile toista hakusanaa"
                ? "red"
                : "black",
          }}
        >
          {nameSearchResult}
        </p>
      </div>
      <div className="flex w-full flex-col">
        <div className="divider h-20"></div>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-xl mb-2">Hae nimipäiviä päivämäärällä</h2>
        <DateSelector
          onDateChange={(date) => {
            findByDate(date.getDate(), date.getMonth());
          }}
        />
        {firstDateSearchDone && (
          <>
            {dateSearchResult.length !== 0 ? (
              <div className="pt-2">
                Valittuna päivämääränä on seuraavat nimipäivät:
              </div>
            ) : (
              <div style={{ color: "red", paddingTop: "25px" }}>
                Haulla ei löytynyt tuloksia, tarkista oikeinkirjoitus tai
                kokeile toista päivämäärää.
              </div>
            )}
          </>
        )}
        <div>
          {dateSearchResult.map((nameday: Nameday, idx) => {
            const prefix = idx < dateSearchResult.length && idx > 0 ? ", " : "";
            return (
              <span key={idx} className="font-bold text-lg">
                {prefix + nameday.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
