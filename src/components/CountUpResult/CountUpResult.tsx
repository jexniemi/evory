"use client";
import CountUp, { CountUpProps } from "react-countup";

export default function CountUpResult(
  props: CountUpProps & { extraStyles?: string; label?: string }
) {
  const { extraStyles, label, ...rest } = props;
  return (
    <div className="flex flex-col items-center w-full bg-red">
      {label && (
        <div className="text-center mb-1 text-gray-600 font-bold">
          <p>{label}</p>
        </div>
      )}
      <CountUp
        {...rest}
        className={`text-2xl bg-orange px-5 py-2.5 w-full dark:text-black rounded-2xl text-center items-center ${extraStyles}`}
      />
    </div>
  );
}
