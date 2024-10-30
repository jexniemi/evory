"use client";
import DateSelector from "@/components/DatePicker";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  targetDateName: string;
  allowUserSelection?: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  targetDateName,
  allowUserSelection,
}) => {
  const [target, setTarget] = useState(targetDate);
  const [timeLeft, setTimeLeft] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(target.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [target]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div>
        <h2 className="text-xl">
          {targetDateName}{" "}
          {target.toLocaleDateString().replace("/", ".").replace("/", ".")}{" "}
          countdown:
        </h2>
        <div className="text-xl flex flex-row flex-wrap">
          <div className="flex flex-col items-center mr-2 bg-blue-100 p-4 my-5">
            <div>{days}</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="flex flex-col items-center mr-2 bg-blue-100 p-4 my-5">
            {hours}
            <div className="text-xs">Hours</div>
          </div>
          <div className="flex flex-col items-center mr-2 bg-blue-100 p-4 my-5">
            {minutes}
            <div className="text-xs">Minutes</div>
          </div>
          <div className="flex flex-col items-center mr-2 bg-blue-100 p-4 my-5">
            {seconds}
            <div className="text-xs">Seconds</div>
          </div>
        </div>
      </div>
      {allowUserSelection && (
        <div className="mt-10">
          <b></b>
          <DateSelector
            onDateChange={(date: Date) => setTarget(date)}
            initialDate={target}
            label="Onko kesälomasi jonain muuna päivänä? Valitse tästä päivä."
          />
        </div>
      )}
    </div>
  );
};

export default Countdown;
