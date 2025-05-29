import { useWeather } from "../../hooks/useWeather";
import Input from "shared_ui_remote/Input";
import Button from "shared_ui_remote/Button";
import Card from "shared_ui_remote/Card";
import WeatherSkeletonCard from "shared_ui_remote/WeatherSkeletonCard";
import SomethingWentWrongCard from "shared_ui_remote/SomethingWentWrongCard";
import FallbackSearchCard from "shared_ui_remote/FallbackSearchCard";
import SearchHeader from "shared_ui_remote/SearchHeader";

const API_KEY = "5a0735aa8f044aae8d7213406252805";

const HomePage = () => {
  const {
    query,
    setQuery,
    weather,
    denied,
    loading,
    error,
    fetchWeather,
    setWeather,
  } = useWeather(API_KEY);

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeather(query.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      {/* ☀️ Header */}
      <SearchHeader text="let you pal help you prepare for the day!" />
      {/* 🔍 Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === "") {
              setQuery("");
              setWeather(null);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search a location..."
          disabled={loading}
        />
        <Button onClick={handleSearch} disabled={loading}>
          Search
        </Button>
      </div>
      {/* 🕒 Loading Skeleton */}
      {loading && <WeatherSkeletonCard />}
      {/* ❌ Error State */}
      {error && !loading && <SomethingWentWrongCard />}
      {/* 🌤️ Success State */}
      {weather && !loading && !error ? (
        <Card>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            {/* 🌤 Main Section */}
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather.current.condition.text}
                className="w-16 h-16"
              />
              <div>
                <h2 className="text-2xl font-semibold">
                  {weather.location.name}
                </h2>
                <p className="text-gray-700">
                  {weather.current.condition.text}
                </p>
                <p className="text-gray-600">{weather.current.temp_c}°C</p>
              </div>
            </div>

            {/* 🧪 Extra Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-600">
              <div>
                <span className="font-medium text-gray-800">Feels like:</span>{" "}
                {weather.current.feelslike_c}°C
              </div>
              <div>
                <span className="font-medium text-gray-800">Wind:</span>{" "}
                {weather.current.wind_kph} km/h
              </div>
              <div>
                <span className="font-medium text-gray-800">Humidity:</span>{" "}
                {weather.current.humidity}%
              </div>
              <div>
                <span className="font-medium text-gray-800">UV Index:</span>{" "}
                {weather.current.uv}
              </div>
              <div>
                <span className="font-medium text-gray-800">Visibility:</span>{" "}
                {weather.current.vis_km} km
              </div>
              <div>
                <span className="font-medium text-gray-800">Pressure:</span>{" "}
                {weather.current.pressure_mb} mb
              </div>
            </div>
          </div>
        </Card>
      ) : null}
      {/* 🔍 Fallback Placeholder (only if denied and not loading or error) */}
      {!weather && query === "" && <FallbackSearchCard />}
    </div>
  );
};

export default HomePage;
