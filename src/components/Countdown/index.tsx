"use client";
import DateSelector from "@/components/DatePicker";
import { copyTextToClipboard } from "@/utils/general";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  targetDateName: string;
  allowUserSelection?: boolean;
  hideEmbedLink?: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  targetDateName,
  allowUserSelection,
  hideEmbedLink,
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

  const embedUrl = encodeURI(
    `https://ewory.com/embed/countdown?targetDate=${target.toDateString()}&name=${targetDateName}`
  );

  const webUrl = encodeURI(
    `https://ewory.com/countdown?targetDate=${target.toDateString()}&name=${targetDateName}`
  );

  return (
    <div>
      <a href={`${webUrl}`}>
        <div>
          <h2 className="text-xl">
            <b>
              {targetDateName} {target.toLocaleDateString()}{" "}
            </b>
            countdown:
          </h2>

          <div className="flex flex-row gap-2 text-center mt-5">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content flex-grow">
              <span className="font-mono text-xl">{days}</span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content flex-grow">
              <span className="font-mono text-xl">
                <span>{hours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content flex-grow">
              <span className="font-mono text-xl">
                <span>{minutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content flex-grow">
              <span className="font-mono text-xl">
                <span>{seconds}</span>
              </span>
              sec
            </div>
          </div>
        </div>
      </a>
      {allowUserSelection && (
        <div className="mt-10">
          <DateSelector
            onDateChange={(date: Date) => setTarget(date)}
            initialDate={target}
            label="Onko kesälomasi jonain muuna päivänä? Valitse tästä päivä."
          />
        </div>
      )}
      {!hideEmbedLink && (
        <div className="my-10">
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <div className="mb-5 text-xl font-medium">
            Add this countdown on your website:
          </div>
          <div className="border-base-300 bg-base-200 border rounded p-5">
            <p
              className="break-all"
              id="embed-text"
            >{`<iframe src="${embedUrl} height="100%" width="100%""></iframe>`}</p>
          </div>
          <button
            className="btn btn-primary mt-6"
            onClick={() => copyTextToClipboard("embed-text")}
          >
            Copy code
          </button>
        </div>
      )}
    </div>
  );
};

export default Countdown;
