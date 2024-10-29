"use client";
import { InputHTMLAttributes } from "react";
import Label from "../Label/Label";

interface Props {
  value: number;
  label: string;
  onChange: (name: string, value: number) => void;
  name?: string;
  step?: InputHTMLAttributes<HTMLInputElement>["step"];
}

export default function NumberInput({
  value,
  onChange,
  name,
  label,
  step,
}: Props) {
  return (
    <div className="w-full">
      <Label text={label} />
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered w-full"
        step={step}
        name={name}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.name,
            step ? parseFloat(e.target.value) : parseInt(e.target.value)
          )
        }
      />
    </div>
  );
}
