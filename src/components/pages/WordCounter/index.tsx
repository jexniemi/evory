"use client";
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <div className="text-left w-full flex flex-col">
      <div className="m-0 mb-8 self-center">
        <h3 className="m-1 border border-black rounded p-2 w-48">
          Merkkejä: {text.length}
        </h3>
        <h3 className="m-1 border border-black rounded p-2 w-48">
          Sanoja: {words}
        </h3>
      </div>
      <textarea
        className="textarea textarea-bordered"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Syötä tekstisi tähän..."
      />
    </div>
  );
}
