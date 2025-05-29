interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    hour: HourForecast[];
}
interface HourForecast {
    time: string;
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
}
interface ForecastStore {
    forecast: ForecastDay[];
    setForecast: (days: ForecastDay[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: boolean;
    setError: (error: boolean) => void;
}
export declare const useForecastStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ForecastStore>>;
export {};
