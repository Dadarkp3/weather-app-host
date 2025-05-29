import { useWeather } from "../../hooks/useWeather";
import Input from "shared_ui_remote/Input";
import Button from "shared_ui_remote/Button";
import Card from "shared_ui_remote/Card";
import SunSearching from "../../assets/sun-searching.webp";

const API_KEY = "5a0735aa8f044aae8d7213406252805";

const HomePage = () => {
  const { query, setQuery, weather, denied, fetchWeather } =
    useWeather(API_KEY);

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeather(query.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      {/* ☀️ Header image + message */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <img src={SunSearching} alt="Weather Pal" className="w-24 h-24" />
        <p className="text-xl text-gray-700 font-medium text-center sm:text-left">
          <span className="text-[#FF9D00] font-semibold">Your weather pal</span>
          , here to help you out!
        </p>
      </div>

      {/* 🔍 Search input + button */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder="Enter a location..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* ☁️ Weather Card or Placeholder */}
      {weather ? (
        <Card>
          <div className="flex items-center gap-4">
            <img
              src={`https:${weather.current.condition.icon}`}
              alt={weather.current.condition.text}
              className="w-16 h-16"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                {weather.location.name}
              </h2>
              <p className="text-gray-700">{weather.current.condition.text}</p>
              <p className="text-gray-600">{weather.current.temp_c}°C</p>
            </div>
          </div>
        </Card>
      ) : denied ? (
        <Card>
          <div className="text-center">
            <img
              src="/placeholder-weather.png"
              alt="Placeholder"
              className="mx-auto mb-4 w-32"
            />
            <p className="text-gray-700 font-medium">Search for a place</p>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default HomePage;
