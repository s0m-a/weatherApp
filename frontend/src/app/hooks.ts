import { WeatherProps, WeatherApiResponse, HourlyForecastResponse,GeocodeResponse, DailyForecastResponse } from "./component/shared/interface";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather, fetchHourlyWeather, fetchDailyWeather, fetchCoordinates, geoCoordinates} from "./api/weather";

export function useFetchCurrentWeather({lat, lon}:WeatherProps){
    return useQuery<WeatherApiResponse,Error>({
        queryKey: ['currentWeather', lat, lon],
        queryFn: ()=> fetchCurrentWeather(lat, lon),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!lat && !!lon,
    })

}

export function useFetchHourlyWeather({lat,lon}: WeatherProps){
    return useQuery<HourlyForecastResponse, Error>({
        queryKey: ["hourlyWeather", lat,lon],
        queryFn: ()=>fetchHourlyWeather(lat, lon),
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!lat && !!lon,
    })
}

export function useFetchDailyWeather({lat,lon}: WeatherProps){
    return useQuery<DailyForecastResponse, Error>({
        queryKey: ["dailyWeather", lat,lon],
        queryFn: ()=>fetchDailyWeather(lat, lon),
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!lat && !!lon,
    })
}

export function useFetchCoords(city: string){
    return useQuery<GeocodeResponse, Error>({
        queryKey: ["fetchCoords", city],
        queryFn: ()=>fetchCoordinates(city),
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!city,
    })
}

export function useGeoCoordinates({ lat, lon }: WeatherProps) {
  return useQuery({
    queryKey: ["geoCoordinates", lat, lon],
    queryFn: () => geoCoordinates(lat!, lon!),
    enabled: !!lat && !!lon, // only run when coords exist
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}