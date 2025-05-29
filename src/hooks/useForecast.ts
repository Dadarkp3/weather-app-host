import { useForecastStore } from "shared_ui_remote/ForecastStore";

export const useForecast = (API_KEY: string) => {
  const forecast = useForecastStore((s) => s.forecast);
  const loading = useForecastStore((s) => s.loading);
  const error = useForecastStore((s) => s.error);
  const setForecast = useForecastStore((s) => s.setForecast);
  const setLoading = useForecastStore((s) => s.setLoading);
  const setError = useForecastStore((s) => s.setError);

  const fetchForecast = async (location: string, days = 5) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=5&aqi=no&alerts=no&key=${API_KEY}`
      );
      const data = await res.json();

      const mapped = data.forecast.forecastday.map((f: any) => ({
        date: f.date,
        date_epoch: f.date_epoch, // <- precisa estar aqui
        day: f.day,
        hour: f.hour,
      }));

      setForecast(mapped);
      setError(false);
    } catch (err) {
      console.error("Forecast fetch failed", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { forecast, loading, error, fetchForecast, setForecast };
};
