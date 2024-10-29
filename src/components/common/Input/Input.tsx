"use client";
import React, { useState } from "react";

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
}

export default function Input({ onChange, placeholder, name }: Props) {
  const [value, setValue] = useState("");

  return (
    <input
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e);
      }}
      value={value}
      name={name}
      type="text"
      id="first_name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required
    />
  );
}
