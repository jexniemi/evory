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
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}></span>
            </span>
            sec
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
