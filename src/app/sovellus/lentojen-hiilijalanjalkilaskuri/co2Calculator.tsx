"use client";
import { useState } from "react";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator";
import { Airport } from "@/types/types";
import ApiSearch from "@/components/ApiSearch/ApiSearch";

const inputs = [
  { label: "Matkustajia", initialValue: 1 },
  {
    label: "Meno vai meno-paluu?",
    values: [1, 2],
    labels: ["Meno", "Meno-paluu"],
  },
];

export default function FlightCO2Calculator() {
  const [airport1, setAirport1] = useState<Airport>({
    icao: "EFHK",
    name: "Helsinki Vantaa Airport",
    city: "Helsinki",
    state: "Uusimaa",
    country: "FI",
    _geoloc: {
      lat: "60.317199707",
      lon: "24.963300705",
    },
  });
  const [airport2, setAirport2] = useState<Airport>({
    icao: "KJFK",
    iata: "JFK",
    name: "John F Kennedy International Airport",
    city: "New York",
    state: "New-York",
    country: "US",
    elevation: "13",
    _geoloc: {
      lat: "40.63980103",
      lon: "-73.77890015",
    },
  });

  // Haversine formula to calculate distance between two coordinates
  function haversineDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371.0; // Radius of the Earth in kilometers
    const toRadians = (degree: number) => degree * (Math.PI / 180);

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    console.log(lat1, lon1, lat2, lon2, "DISTANCE: ", R * c);

    return R * c; // Distance in kilometers
  }

  // Function to calculate CO2 emissions
  function calculateCO2Emissions(
    airport1: Airport,
    airport2: Airport,
    passengers: number = 1,
    numberOfTrips: number = 1
  ): number {
    const distance = haversineDistance(
      parseFloat(airport1._geoloc.lat),
      parseFloat(airport1._geoloc.lon),
      parseFloat(airport2._geoloc.lat),
      parseFloat(airport2._geoloc.lon)
    );

    const fuelConsumptionPerKmPerPassenger = 2.5 / 100; // Average fuel consumption in liters per passenger-kilometer
    const co2PerLiterOfFuel = 2.5; // Kilograms of CO2 per liter of fuel

    const totalFuelConsumption =
      distance * fuelConsumptionPerKmPerPassenger * passengers;

    const totalCO2Emissions = totalFuelConsumption * co2PerLiterOfFuel;

    return totalCO2Emissions * numberOfTrips; // Total CO2 emissions in kilograms
  }

  const calculate = (values: number[]) => {
    let result = 0;
    try {
      result = calculateCO2Emissions(airport1, airport2, values[0], values[1]);
    } catch (error) {
      console.error(error);
    }
    return [{ result, label: "Matkan hiilidioksidipäästöt (CO2):" }];
  };

  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-72">
        <ApiSearch
          label="Lähtöpiste (lentokenttä)"
          apiRoute="/api/airports"
          // displayProperty={"name"}
          initialDisplayValue={airport1.name}
          setSearchResult={setAirport1}
          placeholder="Etsi lentokenttää"
        />
        <div className="mt-3" />
        <ApiSearch
          label="Määränpää (lentokenttä)"
          apiRoute="/api/airports"
          // displayProperty={"name"}
          initialDisplayValue={airport2.name}
          setSearchResult={setAirport2}
          placeholder="Etsi lentokenttää"
        />
        <SimpleCalculator
          calculate={calculate}
          inputs={inputs}
          extradata={JSON.stringify([airport1._geoloc, airport2._geoloc])}
          suffix=" kg"
        />
      </div>
    </div>
  );
}
