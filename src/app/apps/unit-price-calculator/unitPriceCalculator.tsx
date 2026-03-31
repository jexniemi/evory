"use client";
import { useState } from "react";
import CountUpResult from "@/components/CountUpResult/CountUpResult";

export default function UnitPriceCalculator() {
  const [priceA, setPriceA] = useState(5.99);
  const [quantityA, setQuantityA] = useState(16);
  const [priceB, setPriceB] = useState(8.49);
  const [quantityB, setQuantityB] = useState(32);

  const unitPriceA = quantityA > 0 ? priceA / quantityA : 0;
  const unitPriceB = quantityB > 0 ? priceB / quantityB : 0;

  const betterDeal =
    unitPriceA === unitPriceB
      ? "Same price"
      : unitPriceA < unitPriceB
        ? "Product A"
        : "Product B";

  const savingsPerUnit = Math.abs(unitPriceA - unitPriceB);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Product A */}
        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-base-200">
          <h2 className="text-lg font-bold text-center">Product A</h2>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-600">
              Price ($)
            </span>
            <input
              type="number"
              value={priceA}
              onChange={(e) => setPriceA(Number(e.target.value))}
              step={0.01}
              min={0}
              className="input input-bordered w-full"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-600">
              Quantity (oz)
            </span>
            <input
              type="number"
              value={quantityA}
              onChange={(e) => setQuantityA(Number(e.target.value))}
              step={0.1}
              min={0}
              className="input input-bordered w-full"
            />
          </label>
          <CountUpResult
            end={unitPriceA}
            prefix="$"
            suffix="/oz"
            decimals={4}
            duration={0.5}
            label="Unit Price A"
          />
        </div>

        {/* Product B */}
        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-base-200">
          <h2 className="text-lg font-bold text-center">Product B</h2>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-600">
              Price ($)
            </span>
            <input
              type="number"
              value={priceB}
              onChange={(e) => setPriceB(Number(e.target.value))}
              step={0.01}
              min={0}
              className="input input-bordered w-full"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-600">
              Quantity (oz)
            </span>
            <input
              type="number"
              value={quantityB}
              onChange={(e) => setQuantityB(Number(e.target.value))}
              step={0.1}
              min={0}
              className="input input-bordered w-full"
            />
          </label>
          <CountUpResult
            end={unitPriceB}
            prefix="$"
            suffix="/oz"
            decimals={4}
            duration={0.5}
            label="Unit Price B"
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-3 mt-6 w-full max-w-2xl">
        <div className="text-center">
          <CountUpResult
            end={savingsPerUnit}
            prefix="$"
            suffix="/oz"
            decimals={4}
            duration={0.5}
            label="Savings per unit"
          />
        </div>
        <div className="text-2xl font-bold text-center mt-4 px-5 py-3 bg-pastelgreen rounded-2xl dark:text-black">
          🏆 Better Deal: {betterDeal}
        </div>
      </div>
    </div>
  );
}
