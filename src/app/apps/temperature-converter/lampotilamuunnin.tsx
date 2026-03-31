"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

const inputs = [
  {
    label: "Temperature unit",
    labels: ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)"],
    values: [0, 1, 2],
  },
  { label: "Temperature", initialValue: 20, step: 0.5 },
];

const calculate = (values: number[]) => {
  const mode = values[0];
  const temp = values[1];

  let celsius: number;
  let fahrenheit: number;
  let kelvin: number;

  if (mode === 0) {
    celsius = temp;
    fahrenheit = (temp * 9) / 5 + 32;
    kelvin = temp + 273.15;
  } else if (mode === 1) {
    fahrenheit = temp;
    celsius = ((temp - 32) * 5) / 9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  return [
    { result: celsius, label: "Celsius", suffix: " °C", decimals: 2 },
    { result: fahrenheit, label: "Fahrenheit", suffix: " °F", decimals: 2 },
    { result: kelvin, label: "Kelvin", suffix: " K", decimals: 2 },
  ];
};

export default function Lampotilamuunnin() {
  return <SimpleCalculator inputs={inputs} calculate={calculate} suffix=" " />;
}
