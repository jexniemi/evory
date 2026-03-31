"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onDateChange: (date: Date) => void;
  initialDate?: Date;
  label?: string;
}

export default function DateSelector({
  onDateChange,
  label,
  initialDate,
}: Props) {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="flex flex-col items-start my-5">
      <label className="mb-2 text-sm font-bold text-black" htmlFor="date">
        {label || "Date (MM/DD)"}
      </label>
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (date) {
            handleDateChange(date);
          }
        }}
        dateFormat="MM/dd"
        className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}
