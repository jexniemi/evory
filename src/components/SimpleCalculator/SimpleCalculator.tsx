"use client";

import CountUpResult from "@/components/CountUpResult/CountUpResult";
import DropdownInput from "@/components/common/DropdownInput/DropdownInput";
import Label from "@/components/common/Label/Label";
import NumberInput from "@/components/common/NumberInput/NumberInput";
import { InputHTMLAttributes, useEffect, useState } from "react";

interface NumberInputType {
  label: string;
  initialValue: number;
  step?: InputHTMLAttributes<HTMLInputElement>["step"];
}
interface DropdownInputType {
  label: string;
  values: number[];
  labels?: string[];
}

interface Props {
  inputs: Array<NumberInputType | DropdownInputType>;
  calculate: (values: number[]) => Results;
  header?: string;
  extradata?: string; // If any outside dependencies are needed for the calculation, pass theme here
  suffix?: string;
  prefix?: string;
  resultButtonStyle?: string;
}

type Results = Array<{
  result: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}>;

const backgroundColors = [
  "bg-pastelorange",
  "bg-pastelgreen",
  "bg-pastelblue", // Dark blue to white
  "bg-main", // Dark blue to light blue
];

export default function SimpleCalculator({
  inputs,
  calculate,
  extradata,
  header,
  suffix,
  prefix,
  resultButtonStyle = "",
}: Props) {
  const init = inputs.map((input) =>
    "initialValue" in input ? input.initialValue : input.values[0]
  );
  const [values, setValues] = useState<number[]>(init);
  const [result, setResult] = useState<Results>(calculate(init));

  useEffect(() => {
    const doCalculate = async () => {
      const result = await calculate(values);
      setResult(result);
    };
    doCalculate();
  }, [extradata, values, calculate]);

  const handleInput = (name: string, value: number) => {
    const newValues = values.map((val, idx) => {
      if (Number(name) === idx) {
        return Number(value);
      }
      return val;
    });
    setValues(newValues);
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-col w-full items-center`}>
        {header ? (
          <div className="text-center mb-5 text-gray-600 font-bold">
            <h2>{header}</h2>
          </div>
        ) : null}
        {inputs.map((input, idx) => {
          return (
            <div key={input.label} className={`mt-3 w-full max-w-md`}>
              {"initialValue" in input ? (
                <NumberInput
                  name={String(idx)}
                  label={input.label}
                  value={values[idx]}
                  step={input.step}
                  onChange={handleInput}
                />
              ) : (
                <div className="flex flex-col">
                  <Label text={input.label} />
                  <DropdownInput
                    values={input.values}
                    selectedValue={values[idx]}
                    setSelectedValue={(value) =>
                      handleInput(String(idx), value)
                    }
                    labels={input.labels}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {result && result instanceof Array
        ? result.map((res, index) => (
            <div key={res.label} className="mt-7 w-full max-w-md">
              <CountUpResult
                end={res.result}
                start={0}
                decimals={res.decimals !== undefined ? res.decimals : 2}
                duration={1}
                suffix={res.suffix ? res.suffix : suffix}
                prefix={res.prefix ? res.prefix : prefix}
                decimal={"."}
                extraStyles={
                  resultButtonStyle
                    ? `${resultButtonStyle}`
                    : backgroundColors[index]
                }
                label={res.label}
              />
            </div>
          ))
        : null}
    </div>
  );
}
