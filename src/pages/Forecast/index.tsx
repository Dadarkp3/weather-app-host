import { useState } from "react";
import { useForecast } from "../../hooks/useForecast";
import Input from "shared_ui_remote/Input";
import Button from "shared_ui_remote/Button";
import ForecastCard from "shared_ui_remote/ForecastCard";
import SomethingWentWrongCard from "shared_ui_remote/SomethingWentWrongCard";
import FallbackSearchCard from "shared_ui_remote/FallbackSearchCard";
import SearchHeader from "shared_ui_remote/SearchHeader";

const API_KEY = "5a0735aa8f044aae8d7213406252805";

const ForecastPage = () => {
  const { forecast, loading, error, fetchForecast, setForecast } =
    useForecast(API_KEY);
  const [query, setQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleSearch = () => {
    if (query.trim()) fetchForecast(query.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* ☀️ Header */}
      <SearchHeader text="let you pal help you prepare for the week!" />
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === "") {
              setForecast([]);
              setExpandedIndex(null);
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

      {loading && (
        <p className="text-center text-gray-500">Loading forecast...</p>
      )}
      {error && <SomethingWentWrongCard />}

      {query === "" && <FallbackSearchCard />}

      {forecast.map((day, index) => (
        <ForecastCard
          key={day.date}
          day={day}
          expanded={expandedIndex === index}
          onToggle={() =>
            setExpandedIndex(expandedIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default ForecastPage;
