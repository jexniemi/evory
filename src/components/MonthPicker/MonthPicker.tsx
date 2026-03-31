"use client";
import { useState } from "react";

function isLeapYear() {
  const year = new Date().getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export default function MonthPicker() {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const results = [
    31, // January
    isLeapYear() ? 29 : 28, // February (29 in leap year)
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];

  return (
    <div className="relative inline-block text-left">
      <label className="text-lg">Select month: </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-300 rounded-md px-4 py-1"
      >
        {options[selected]}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={JSON.stringify(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setSelected(index);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-10 text-4xl">
        <b>
          {options[selected]} has {results[selected]} days
        </b>
      </div>
    </div>
  );
}
