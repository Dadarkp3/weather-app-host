// host/src/hooks/useWeather.ts
import { useEffect, useState } from "react";
import { useWeatherStore } from "shared_ui_remote/WeatherStore";

export const useWeather = (API_KEY: string) => {
  const [query, setQuery] = useState("");

  const weather = useWeatherStore((s) => s.data);
  const denied = useWeatherStore((s) => s.denied);
  const setWeather = useWeatherStore((s) => s.setWeather);
  const setDenied = useWeatherStore((s) => s.setDenied);
  const loading = useWeatherStore((s) => s.loading);
  const error = useWeatherStore((s) => s.error);
  const setLoading = useWeatherStore((s) => s.setLoading);
  const setError = useWeatherStore((s) => s.setError);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await fetchWeather(`${latitude},${longitude}`);
      },
      () => {
        setDenied(true);
      }
    );
  }, []);

  const fetchWeather = async (location: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${location}&key=${API_KEY}`
      );
      const data = await res.json();
      setWeather({
        location: {
          name: data.location.name,
        },
        current: {
          temp_c: data.current.temp_c,
          condition: {
            text: data.current.condition.text,
            icon: data.current.condition.icon,
          },
          feelslike_c: data.current.feelslike_c,
          wind_kph: data.current.wind_kph,
          humidity: data.current.humidity,
          uv: data.current.uv,
          vis_km: data.current.vis_km,
          pressure_mb: data.current.pressure_mb,
        },
        raw: data,
      });
      setError(false);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setError(true);
      setDenied(false);
    }
  };

  return {
    query,
    setQuery,
    weather,
    denied,
    loading,
    error,
    fetchWeather,
    setWeather,
  };
};
