"use client";
import Countdown from "@/components/Countdown";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CountdownEmbedPage() {
  const searchParams = useSearchParams();
  const targetDate = searchParams.get("targetDate");
  const name = searchParams.get("name");

  if (!targetDate || !name) {
    return null;
  }

  return (
    <Suspense>
      <Countdown
        hideEmbedLink
        targetDate={new Date(targetDate)}
        targetDateName={name}
      />
    </Suspense>
  );
}
