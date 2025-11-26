import React from "react";
import { useFetchCurrentWeather } from "../hooks";
import { WeatherPropsUnit, weatherCodes } from "./shared/interface";
import styled from "styled-components";
import { theme, ThemeColors } from "@/styles/colors";
import {ReadableTime} from "./ReableDate";
import Details from "./Details";
import { LuDroplets } from "react-icons/lu";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";
import { CiCloud } from "react-icons/ci";
import { toFahrenheit } from "../utils/convert";
import { useTheme } from "../context/ThemeContext";
import {LoadingSkeleton} from "./LoadingSkeleton";
export default function CurrentWeather({lat, lon, locationName,unit}: WeatherPropsUnit& { locationName: { city: string, country: string } }){
    const {data, isLoading, error} = useFetchCurrentWeather({lat,lon})
    const { colors } = useTheme();
      if (isLoading) {
        return <LoadingSkeleton height={350} borderRadius={12}/>;
      }
    if (error) return <div>Error fetching weather</div>;
    const weather = data?.current ;
    const weatherInfo = weather ? weatherCodes[weather?.weather_code] : null;
    const currentUnits = data?.current_units
    const tempC = weather?.temperature_2m;
    const displayTemp = unit === "F" ? toFahrenheit(tempC ?? 0):tempC;
    const displayUnit = unit === "F" ? "°F" : currentUnits?.temperature_2m;
    return (
      <CurrentWeatherContainer $colors={colors}>
        <h1>
          {locationName.city}, {locationName.country}
        </h1>
        <span>
          <ReadableTime dataString={weather?.time} mode="current" />{" "}
        </span>
        <div className="mt-8">
          {weatherInfo ? (
            <div className=" flex items-center gap-4 ">
              <div>
                <p className="text-6xl md:text-8xl">{weatherInfo.icon}</p>
              </div>

              <div>
                <p className="text-4xl md:text-6xl font-bold">
                  {displayTemp}
                  {displayUnit}
                </p>
                <span className=" text-md md:text-lg">
                  {weatherInfo.description}
                </span>
              </div>
            </div>
          ) : (
            <p>No weather info available please reload</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-6">
          <Details
            icon={<CiTempHigh size={20} color={`${theme.light.primary}`} />}
            label={"Feels like"}
            value={`${weather?.temperature_2m ?? "N/A"} ${currentUnits?.temperature_2m}`}
          />

          <Details
            icon={<LuDroplets size={20} color={`${theme.light.primary}`} />}
            label={"Humidity"}
            value={`${weather?.relative_humidity_2m ?? "N/A"} ${currentUnits?.relative_humidity_2m}`}
          />

          <Details
            icon={<FaWind size={20} color={`${theme.light.primary}`} />}
            label={"Wind"}
            value={`${weather?.wind_speed_10m} ${currentUnits?.wind_speed_10m}`}
          />

          <Details
            icon={<CiCloud size={20} color={`${theme.light.primary}`} />}
            label={"Conditions"}
            value={`${weatherInfo?.description || "N/A"} `}
          />
        </div>
      </CurrentWeatherContainer>
    );
}

const CurrentWeatherContainer = styled.div<{ $colors: ThemeColors }>`
  width: 95%;
  margin: auto;
  background-color: ${(p) => p.$colors.cardForeground};
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 16px;
  h1 {
    font-weight: bold;
    font-size: 20px;
  }
  span {
    font-size: 14px;
  }
  @media (max-width: 508px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;