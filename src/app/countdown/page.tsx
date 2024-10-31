import { apps } from "@/applications";
import AppCards from "@/components/AppCards/AppCards";
import Countdown from "@/components/Countdown";

type Params = { slug: string };
type SearchParams = { [key: string]: string | string[] | undefined };

export function generateMetadata({
  params, // eslint-disable-line
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { name } = searchParams;

  return {
    title: `Live countdown to ${name}! | Ewory.com`,
    description: `Live countdown to ${name}!`,
  };
}

export default async function CountdownPage({
  // @ts-expect-error no need for slug
  _, // eslint-disable-line
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { targetDate, name } = searchParams;

  console.log(searchParams);

  if (
    !targetDate ||
    !name ||
    typeof targetDate !== "string" ||
    typeof name !== "string"
  ) {
    return (
      <div className="flex flex-row flex-wrap mb-20">
        <AppCards apps={apps["Countdowns"].apps} />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Countdown targetDate={new Date(targetDate)} targetDateName={name} />
    </div>
  );
}
