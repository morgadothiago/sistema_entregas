import { useState } from "react";

interface Coordinate {
  latitude: number;
  longitude: number;
}

type LocationObject = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
};

export const pickup: Coordinate = {
  latitude: -23.55052,
  longitude: -46.633308,
};

export const dropoff: Coordinate = {
  latitude: -23.56321,
  longitude: -46.65425,
};

const [location, setLocation] = useState<Coordinate | null>(null);
