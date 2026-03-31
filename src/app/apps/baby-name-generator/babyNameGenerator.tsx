"use client";
import { useState } from "react";

const BOY_NAMES = [
  "Liam", "Noah", "Oliver", "James", "Elijah", "William", "Henry", "Lucas",
  "Benjamin", "Theodore", "Jack", "Levi", "Alexander", "Mason", "Ethan",
  "Daniel", "Jacob", "Logan", "Jackson", "Sebastian", "Aiden", "Owen",
  "Samuel", "Ryan", "Nathan", "Carter", "Luke", "Jayden", "Dylan", "Grayson",
  "Caleb", "Isaac", "Andrew", "Joshua", "Christopher", "Lincoln", "Mateo",
  "Anthony", "Thomas", "Maverick", "Charles", "Josiah", "David", "Ezra",
  "John", "Hudson", "Christian", "Hunter", "Connor", "Colton", "Adrian",
  "Kai", "Brooks", "Nolan", "Easton", "Jordan", "Jeremiah", "Parker",
  "Leo", "Landon", "Miles", "Asher", "Roman", "Jaxon", "Austin",
];

const GIRL_NAMES = [
  "Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Mia", "Isabella",
  "Ava", "Evelyn", "Luna", "Harper", "Sofia", "Camila", "Eleanor",
  "Elizabeth", "Violet", "Scarlett", "Emily", "Hazel", "Lily", "Gianna",
  "Aurora", "Penelope", "Aria", "Nora", "Chloe", "Ellie", "Mila",
  "Avery", "Layla", "Abigail", "Ella", "Riley", "Zoey", "Grace",
  "Willow", "Victoria", "Iris", "Emilia", "Zoe", "Stella", "Natalie",
  "Ivy", "Hannah", "Lucy", "Addison", "Leah", "Paisley", "Savannah",
  "Audrey", "Brooklyn", "Claire", "Bella", "Skylar", "Nova", "Maya",
  "Genesis", "Madelyn", "Aaliyah", "Autumn", "Naomi", "Quinn", "Ruby",
  "Eva", "Valentina",
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function BabyNameGenerator() {
  const [gender, setGender] = useState<"boy" | "girl" | "either">("either");
  const [startingLetter, setStartingLetter] = useState<string>("any");
  const [names, setNames] = useState<string[]>([]);

  const generateNames = () => {
    let pool: string[] = [];
    if (gender === "boy") pool = [...BOY_NAMES];
    else if (gender === "girl") pool = [...GIRL_NAMES];
    else pool = [...BOY_NAMES, ...GIRL_NAMES];

    if (startingLetter !== "any") {
      pool = pool.filter(
        (n) => n[0].toUpperCase() === startingLetter.toUpperCase()
      );
    }

    const shuffled = shuffleArray(pool);
    setNames(shuffled.slice(0, 5));
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Gender</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={gender}
            onChange={(e) =>
              setGender(e.target.value as "boy" | "girl" | "either")
            }
          >
            <option value="either">Either</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Starting Letter</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={startingLetter}
            onChange={(e) => setStartingLetter(e.target.value)}
          >
            <option value="any">Any</option>
            {letters.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn btn-primary" onClick={generateNames}>
        🍼 Generate Names
      </button>

      {names.length > 0 && (
        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Suggested Names</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {names.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="card bg-base-100 shadow-sm"
              >
                <div className="card-body p-4 flex-row items-center gap-3">
                  <span className="text-2xl">
                    {BOY_NAMES.includes(name) ? "👦" : "👧"}
                  </span>
                  <span className="text-lg font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn btn-secondary btn-sm mt-4"
            onClick={generateNames}
          >
            🔄 Generate More
          </button>
        </div>
      )}
    </div>
  );
}
