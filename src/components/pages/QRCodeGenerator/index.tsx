"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [value, setValue] = useState("");

  const download = () => {
    try {
      const link = document.createElement("a");
      link.download = "qr-code.png";
      // @ts-expect-error asd
      link.href = document?.getElementById("qr")?.toDataURL();
      link.click();
    } catch {
      alert("An error occurred while downloading.");
    }
  };

  const error = value.length >= 2500;
  return (
    <div className="flex flex-col items-center w-full">
      <textarea
        className="textarea textarea-bordered w-96"
        placeholder="Enter QR code content here."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCodeCanvas value={value} id="qr" className="mt-10" />
      <div className="mt-10">
        <button
          className="btn btn-primary"
          disabled={error}
          onClick={() => download()}
        >
          Download
        </button>
      </div>
    </div>
  );
}
