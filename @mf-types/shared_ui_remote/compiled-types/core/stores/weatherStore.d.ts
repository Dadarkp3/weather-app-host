export interface WeatherData {
    location: {
        name: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
        feelslike_c: number;
        wind_kph: number;
        humidity: number;
        uv: number;
        vis_km: number;
        pressure_mb: number;
    };
    raw: any;
}
interface WeatherStore {
    data: WeatherData | null;
    denied: boolean;
    loading: boolean;
    error: boolean;
    setWeather: (data: WeatherData | null) => void;
    setDenied: (denied: boolean) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: boolean) => void;
}
export declare const useWeatherStore: import("zustand").UseBoundStore<import("zustand").StoreApi<WeatherStore>>;
export {};
