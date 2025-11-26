import React from "react";
import styled from "styled-components";
import {ThemeColors } from "@/styles/colors";
import { WeatherPropsUnit, weatherCodes } from "./shared/interface";
import { useFetchDailyWeather } from "../hooks";
import { ReadableTime} from "./ReableDate";
import { toFahrenheit } from "../utils/convert";
import { useTheme } from "../context/ThemeContext";
import { WeatherCardSkeleton } from "./LoadingSkeleton";

const DailyWeather = ({lat, lon, unit}: WeatherPropsUnit)=>{
    const { colors } = useTheme();
    const {data,isLoading, error} = useFetchDailyWeather({lat, lon});
    if(isLoading){
        <WeatherCardSkeleton height={250} />;
    }
    if (error) return <div>Error fetching weather</div>;
    const daily = data?.daily;
    const currentUnits = data?.daily_units

    return (
      <DailyContainer
        className=" w-[95%] m-auto p-6 mt-6 rounded-lg"
        $colors={colors}
      >
        <div>
          <h1 className="text-lg mb-4 font-semibold">Daily Forecast</h1>
        </div>
        <Container $colors={colors}>
          {daily?.time.map((time: string, index: number) => {
            const max_tempC = daily.temperature_2m_max[index];
            const min_tempC = daily.temperature_2m_min[index];
            const displayTempMax =
              unit === "F" ? toFahrenheit(max_tempC) : max_tempC;
            const displayTempMin =
              unit === "F" ? toFahrenheit(min_tempC) : min_tempC;
            const displayUnit =
              unit === "F" ? "°F" : currentUnits?.temperature_2m;
            return (
              <Content key={time} $colors={colors}>
                <p>
                  {" "}
                  <ReadableTime dataString={time} mode="day" />{" "}
                </p>
                <span>{weatherCodes?.[daily?.weather_code[index]].icon}</span>
                <h6 className="text-lg">
                  {displayTempMax}
                  {displayUnit}
                </h6>
                <h6 className="text-lg">
                  {displayTempMin}
                  {displayUnit}
                </h6>
                <p>{weatherCodes?.[daily?.weather_code[index]].description}</p>
              </Content>
            );
          })}
        </Container>
      </DailyContainer>
    );

}

export default DailyWeather;
const DailyContainer = styled.div<{ $colors: ThemeColors }>`
  background: ${(p) => p.$colors.cardForeground};
`;
const Container=styled.div<{ $colors: ThemeColors }>`
        display:grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-content: space-evenly;
        overflow-y: hidden;
        gap:1rem;
        scroll-behavior: smooth;
        @media (max-width: 900px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media (max-width: 650px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
                
`
const Content = styled.div<{ $colors: ThemeColors }>`
  background-color: ${(p) => p.$colors.card};
  padding: 15px;
  min-width: 150px;
  flex: 0 0 auto;
  text-align: center;
  font-weight: bold;
  border-radius: 16px;

  span {
    font-size: 35px;
  }
  p {
    color: ${(p) => p.$colors.mutedForeground};
    font-size: 12px;
  }
  h6 {
    font-size: 16px;
  }
`;