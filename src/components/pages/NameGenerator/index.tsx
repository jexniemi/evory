"use client";
import React from "react";

interface DataItem {
  name: string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface Props {
  data: DataItem[];
}

export default function NameGenerator({ data }: Props) {
  const [selected, setSelected] = React.useState({ name: "", date: "" });

  const onClick = () => {
    const select = data[Math.floor(Math.random() * data.length)];
    setSelected(select);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col justify-center h-[400px] w-full rounded-lg items-center text-white bg-contain bg-no-repeat bg-center custom-container"
        style={{ backgroundImage: "url('/other/chalkboard.jpg')" }}
      >
        <h2 className="underline text-5xl mb-5">{selected.name}</h2>
        <h3>
          {selected.name !== ""
            ? "Nimipäivä: " + selected.date
            : "Paina nappia saadaksesi uusi nimi"}
        </h3>
      </div>
      <button className="btn btn-primary mt-5" onClick={onClick}>
        Uusi nimi
      </button>
    </div>
  );
}
