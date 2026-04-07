"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function InternetSpeedConverter() {
  const inputs = [{ label: "Speed (Mbps)", initialValue: 100 }];

  const calculate = (values: number[]) => {
    const mbps = values[0];
    return [
      { result: mbps * 1000, label: "Kbps:", suffix: " Kbps", decimals: 0 },
      {
        result: mbps / 8,
        label: "MB/s (megabytes per second):",
        suffix: " MB/s",
        decimals: 2,
      },
      { result: mbps / 1000, label: "Gbps:", suffix: " Gbps", decimals: 3 },
      {
        result: 1000 / (mbps / 8),
        label: "Time to download 1 GB:",
        suffix: " seconds",
        decimals: 1,
      },
    ];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
