import MostPopularAppsSidecolumn from "./MostPopularAppsSidecolumn";

export default function MiddleColumn({
  children,
  location,
  overflow,
  backgroundColor,
}: {
  children: React.ReactNode;
  location?: "front" | "footer" | "appsuggestionbar";
  overflow?: boolean;
  backgroundColor?: string;
}) {
  const isFront = location === "front";
  const isFooter = location === "footer";
  const isAppSuggestionBar = location === "appsuggestionbar";
  return (
    <div
      className={`${
        isFooter
          ? "bg-black"
          : isAppSuggestionBar
          ? "bg-gray-100 dark:bg-transparent"
          : "bg-transparent"
      } ${backgroundColor} flex flex-row ${overflow ? "overflow-auto" : ""}`}
    >
      <div className="xl:w-40 2xl:w-72 hidden xl:flex" />
      <div className="flex flex-col flex-1 px-5 md:px-10">{children}</div>
      <div className="xl:w-40 2xl:w-72 hidden xl:flex ">
        {false && isFront && <MostPopularAppsSidecolumn />}
      </div>
    </div>
  );
}
