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
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu",
  ];

  const results = [
    31, // Tammikuu
    isLeapYear() ? 29 : 28, // Helmikuu (29 karkausvuonna)
    31, // Maaliskuu
    30, // Huhtikuu
    31, // Toukokuu
    30, // Kesäkuu
    31, // Heinäkuu
    31, // Elokuu
    30, // Syyskuu
    31, // Lokakuu
    30, // Marraskuu
    31, // Joulukuu
  ];

  return (
    <div className="relative inline-block text-left">
      <label className="text-lg">Valitse kuukausi: </label>
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
          {options[selected]}ssa on {results[selected]} päivää
        </b>
      </div>
    </div>
  );
}
