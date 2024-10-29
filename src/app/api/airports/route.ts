import airports from "@/data/airports.json";
import { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    Response.error();
    return;
  }

  const results = airports
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((airport: any) => airport.name.toLowerCase().includes(query))
    .slice(0, 10);

  return Response.json(results);
}
