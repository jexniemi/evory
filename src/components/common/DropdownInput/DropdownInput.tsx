"use client";
import { useState } from "react";

interface DropdownProps<T> {
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  values: T[];
  labels?: string[];
}

export default function DropdownInput<T>({
  selectedValue,
  setSelectedValue,
  values,
  labels,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValueIdx, setSelectedValueIdx] = useState(0);
  return (
    <div className={`dropdown w-full block ${isOpen ? "open" : ""}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {labels ? `${labels[selectedValueIdx]}` : `${selectedValue}`}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {values.map((value, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setSelectedValueIdx(idx);
                  setSelectedValue(value);
                  setIsOpen(false);
                }}
              >
                <a>{labels ? `${labels[idx]}` : `${value}`}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
