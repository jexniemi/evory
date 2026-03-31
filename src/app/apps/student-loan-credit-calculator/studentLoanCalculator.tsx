"use client";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";

export default function StudentLoanCalculator() {
  const inputs = [
    { label: "Nostettu opintolaina (€)", initialValue: 10800 },
    {
      label: "Tutkinnon laajuus (op)",
      values: [180, 210, 240, 270, 300, 330, 360],
    },
  ];

  const getMaxLoanAmount = (opintopisteet: number) => {
    if (opintopisteet < 180) {
      return 0;
    } else if (opintopisteet < 210) {
      return 10800;
    } else if (opintopisteet < 240) {
      return 12800;
    } else if (opintopisteet < 270) {
      return 14400;
    } else if (opintopisteet < 300) {
      return 16400;
    } else if (opintopisteet < 330) {
      return 18000;
    } else if (opintopisteet < 360) {
      return 20000;
    }

    return 21600;
  };

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      const maxLoanAmount = getMaxLoanAmount(values[1]);
      const loanForCalculation = Math.min(values[0], maxLoanAmount);
      const loanRefundAmount = (loanForCalculation - 2500) * 0.4;
      result = loanRefundAmount > 0 ? loanRefundAmount : 0;
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Opintolainahyvityksen enimmäismäärä:" }];
  };

  return <SimpleCalculator inputs={inputs} calculate={calculate} />;
}
