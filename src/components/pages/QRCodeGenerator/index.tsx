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
      alert("Tapahtui virhe latauksessa.");
    }
  };

  const error = value.length >= 2500;
  return (
    <div className="flex flex-col items-center w-full">
      <textarea
        className="textarea textarea-bordered w-96"
        placeholder="Write the content of the QR code here."
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
          Lataa
        </button>
      </div>
    </div>
  );
}
