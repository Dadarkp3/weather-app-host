import { useState, useEffect } from "react";

export const useWeather = (API_KEY: string) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [denied, setDenied] = useState(false);

  const fetchWeather = async (location: string) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${location}&key=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setDenied(false);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(`${latitude},${longitude}`);
      },
      () => {
        setDenied(true);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    query,
    setQuery,
    weather,
    denied,
    fetchWeather,
  };
};
