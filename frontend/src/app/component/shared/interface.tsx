export interface ButtonProps {
  icon?: React.ReactNode;
  hoverColor?: string;
  bgColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface WeatherPropsUnit {
  lat: number;
  lon: number;
  unit: string;
}
export interface WeatherProps {
  lat: number;
  lon: number;
}

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}

export const DEFAULT_COORDS = {
  lat: 9.05785,
  lon: 7.49508,
};

export const weatherCodes: Record<
  number,
  { icon: string; description: string }
> = {
  0: { icon: "☀️", description: "clear sky" },
  1: { icon: "🌤️", description: "mainly clear" },
  2: { icon: "⛅", description: "partly cloudy" },
  3: { icon: "☁️", description: "overcast" },
  45: { icon: "🌫️", description: "foggy" },
  48: { icon: "🌫️", description: "depositing rime fog" },
  51: { icon: "🌦️", description: "light drizzle" },
  53: { icon: "🌦️", description: "moderate drizzle" },
  55: { icon: "🌧️", description: "dense drizzle" },
  61: { icon: "🌧️", description: "slight rain" },
  63: { icon: "🌧️", description: "moderate rain" },
  65: { icon: "🌧️", description: "heavy rain" },
  71: { icon: "🌨️", description: "slight snow" },
  73: { icon: "🌨️", description: "moderate snow" },
  75: { icon: "❄️", description: "heavy snow" },
  77: { icon: "🌨️", description: "snow grains" },
  80: { icon: "🌦️", description: "slight rain showers" },
  81: { icon: "🌧️", description: "moderate rain showers" },
  82: { icon: "⛈️", description: "violent rain showers" },
  85: { icon: "🌨️", description: "slight snow showers" },
  86: { icon: "❄️", description: "heavy snow showers" },
  95: { icon: "⛈️", description: "thunderstorm" },
  96: { icon: "⛈️", description: "thunderstorm with slight hail" },
  99: { icon: "⛈️", description: "thunderstorm with heavy hail" },
};

export interface DetailsProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

export interface HourlyForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  hourly_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
}

export interface City {
  city: string;
}
export interface HeaderProps {
  setCoords: (coords: { lat: number; lon: number }) => void;
  coords: { lat: number; lon: number };
  setLocationName: (location: { city: string; country: string }) => void;
  setUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface GeocodeResponse {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}
export interface DailyForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  daily_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
  };

  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}
export interface currentSkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  margin?: string | number;
}

export interface WeatherCardSkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  margin?: string | number;
}