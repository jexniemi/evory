"use client";
import { useState } from "react";

function getCategory(
  sys: number,
  dia: number,
): { label: string; color: string; description: string } {
  if (sys > 180 || dia > 120) {
    return {
      label: "Hypertensive Crisis",
      color: "bg-red-600 text-white",
      description:
        "Seek emergency medical attention immediately. Blood pressure this high requires urgent care.",
    };
  }
  if (sys >= 140 || dia >= 90) {
    return {
      label: "Stage 2 Hypertension",
      color: "bg-red-400 text-white",
      description:
        "High blood pressure. Your doctor will likely prescribe medication along with lifestyle changes.",
    };
  }
  if (sys >= 130 || dia >= 80) {
    return {
      label: "Stage 1 Hypertension",
      color: "bg-orange-400 text-white",
      description:
        "Mildly high blood pressure. Lifestyle changes and possibly medication may be recommended.",
    };
  }
  if (sys >= 120 && dia < 80) {
    return {
      label: "Elevated",
      color: "bg-yellow-400 text-gray-900",
      description:
        "Elevated blood pressure. Likely to develop into high blood pressure without lifestyle changes.",
    };
  }
  if (sys > 0 && dia > 0) {
    return {
      label: "Normal",
      color: "bg-green-500 text-white",
      description:
        "Your blood pressure is in the normal range. Maintain a healthy lifestyle to keep it there.",
    };
  }
  return { label: "", color: "", description: "" };
}

export default function BloodPressureChecker() {
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);

  const category = getCategory(systolic, diastolic);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Systolic (mmHg)
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={systolic}
            onChange={(e) => setSystolic(Number(e.target.value))}
            min={60}
            max={250}
          />
          <span className="text-xs text-gray-400">Upper number</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600">
            Diastolic (mmHg)
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={diastolic}
            onChange={(e) => setDiastolic(Number(e.target.value))}
            min={40}
            max={200}
          />
          <span className="text-xs text-gray-400">Lower number</span>
        </div>
      </div>

      {category.label && (
        <div className="flex flex-col gap-4">
          <div
            className={`text-center px-6 py-5 rounded-2xl ${category.color}`}
          >
            <p className="text-sm font-medium mb-1 opacity-80">
              Blood Pressure Category
            </p>
            <p className="text-2xl font-bold">{category.label}</p>
          </div>

          <div className="bg-base-200 px-5 py-4 rounded-2xl">
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>

          <div className="text-center bg-orange px-5 py-3 rounded-2xl">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Your Reading
            </p>
            <p className="text-2xl font-bold dark:text-black">
              {systolic}/{diastolic} mmHg
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-sm w-full">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Systolic</th>
                  <th>Diastolic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge bg-green-500 text-white badge-sm">
                      Normal
                    </span>
                  </td>
                  <td>&lt; 120</td>
                  <td>&lt; 80</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-yellow-400 text-gray-900 badge-sm">
                      Elevated
                    </span>
                  </td>
                  <td>120–129</td>
                  <td>&lt; 80</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-orange-400 text-white badge-sm">
                      Stage 1
                    </span>
                  </td>
                  <td>130–139</td>
                  <td>80–89</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-red-400 text-white badge-sm">
                      Stage 2
                    </span>
                  </td>
                  <td>≥ 140</td>
                  <td>≥ 90</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-red-600 text-white badge-sm">
                      Crisis
                    </span>
                  </td>
                  <td>&gt; 180</td>
                  <td>&gt; 120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
