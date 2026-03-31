"use client";
import { useState } from "react";

interface Ingredient {
  id: number;
  name: string;
  amount: string;
  unit: string;
}

let nextId = 4;

export default function Annoslaskuri() {
  const [originalServings, setOriginalServings] = useState(4);
  const [desiredServings, setDesiredServings] = useState(2);
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "Jauheliha", amount: "400", unit: "g" },
    { id: 2, name: "Tomaattimurska", amount: "400", unit: "g" },
    { id: 3, name: "Makarooni", amount: "300", unit: "g" },
  ]);

  const ratio = originalServings > 0 ? desiredServings / originalServings : 1;

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: nextId++, name: "", amount: "", unit: "g" },
    ]);
  };

  const updateIngredient = (
    id: number,
    field: keyof Ingredient,
    value: string,
  ) => {
    setIngredients((prev) =>
      prev.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing)),
    );
  };

  const removeIngredient = (id: number) => {
    setIngredients((prev) => prev.filter((ing) => ing.id !== id));
  };

  const scaleAmount = (amount: string): string => {
    const num = parseFloat(amount.replace(",", "."));
    if (isNaN(num)) return amount;
    const scaled = num * ratio;
    if (scaled === Math.floor(scaled)) return scaled.toString();
    // Try to show as nice fraction or round
    return scaled % 1 === 0
      ? scaled.toString()
      : scaled.toFixed(2).replace(/\.?0+$/, "");
  };

  const inputClass = "input input-bordered input-sm bg-white";

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto">
      {/* Servings */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Alkuperäinen annoskoko
          </label>
          <input
            type="number"
            min={1}
            max={100}
            value={originalServings}
            onChange={(e) =>
              setOriginalServings(Math.max(1, Number(e.target.value)))
            }
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Haluttu annoskoko
          </label>
          <input
            type="number"
            min={1}
            max={200}
            value={desiredServings}
            onChange={(e) =>
              setDesiredServings(Math.max(1, Number(e.target.value)))
            }
            className="input input-bordered w-full"
          />
        </div>
      </div>

      {ratio !== 1 && (
        <div className="text-center text-sm bg-blue-50 border border-blue-200 rounded-xl p-2 text-blue-700 font-semibold">
          Skaalauskerroin: ×{ratio.toFixed(4).replace(/\.?0+$/, "")}
        </div>
      )}

      {/* Ingredients */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Ainesosat
          </label>
          <button onClick={addIngredient} className="btn btn-xs btn-ghost">
            + Lisää
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_60px_80px_28px] gap-1 text-xs text-gray-400 px-1">
            <span>Ainesosa</span>
            <span className="text-center">Alkup.</span>
            <span className="text-center">Yksikkö</span>
            <span className="text-center font-semibold text-green-600">
              Skaalattu
            </span>
            <span></span>
          </div>

          {ingredients.map((ing) => (
            <div
              key={ing.id}
              className="grid grid-cols-[1fr_80px_60px_80px_28px] gap-1 items-center"
            >
              <input
                type="text"
                value={ing.name}
                onChange={(e) =>
                  updateIngredient(ing.id, "name", e.target.value)
                }
                placeholder="Nimi"
                className={inputClass + " w-full"}
              />
              <input
                type="text"
                value={ing.amount}
                onChange={(e) =>
                  updateIngredient(ing.id, "amount", e.target.value)
                }
                placeholder="0"
                className={inputClass + " text-center"}
              />
              <input
                type="text"
                value={ing.unit}
                onChange={(e) =>
                  updateIngredient(ing.id, "unit", e.target.value)
                }
                placeholder="g"
                className={inputClass + " text-center"}
              />
              <div
                className={`rounded-lg px-2 py-1 text-center text-sm font-bold ${ratio !== 1 ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-50 text-gray-600"}`}
              >
                {scaleAmount(ing.amount)} {ing.unit}
              </div>
              <button
                onClick={() => removeIngredient(ing.id)}
                className="btn btn-ghost btn-xs text-gray-400 hover:text-red-400"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={addIngredient} className="btn btn-outline btn-sm w-full">
        + Lisää ainesosa
      </button>
    </div>
  );
}
