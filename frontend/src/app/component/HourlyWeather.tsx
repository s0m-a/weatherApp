import React from "react";
import styled from "styled-components";
import { ThemeColors } from "@/styles/colors";
import { WeatherPropsUnit, weatherCodes } from "./shared/interface";
import { useFetchHourlyWeather } from "../hooks";
import { ReadableTime} from "./ReableDate";
import { toFahrenheit } from "../utils/convert";
import { useTheme } from "../context/ThemeContext";
import { WeatherCardSkeleton } from "./LoadingSkeleton";
const HourlyWeather = ({lat, lon, unit}: WeatherPropsUnit)=>{
    const {data,isLoading, error} = useFetchHourlyWeather({lat, lon});
    const { colors } = useTheme();
    if(isLoading){
        <WeatherCardSkeleton height={150} />;
    }
    if (error) return <div>Error fetching weather</div>;
    const hourly = data?.hourly
        const currentUnits = data?.hourly_units
    return (
      <HourlyContainer
        className=" w-[95%] m-auto p-6 mt-6 rounded-lg"
        $colors={colors}
      >
        <div>
          <h1 className="text-lg mb-4 font-semibold">Hourly Forecast</h1>
        </div>
        <Container $colors={colors}>
          {hourly?.time.map((time: string, index: number) => {
            const tempC = hourly.temperature_2m[index];
            const displayTemp = unit === "F" ? toFahrenheit(tempC) : tempC;
            const displayUnit =
              unit === "F" ? "°F" : currentUnits?.temperature_2m;
            return (
              <Content key={time} $colors={colors}>
                <p>
                  {" "}
                  <ReadableTime dataString={time} mode="hour" />{" "}
                </p>
                <span>{weatherCodes?.[hourly?.weather_code[index]].icon}</span>
                <h6 className="text-lg">
                  {displayTemp}
                  {displayUnit}
                </h6>
              </Content>
            );
          })}
        </Container>
      </HourlyContainer>
    );

}

export default HourlyWeather;
const HourlyContainer = styled.div<{
  $colors: ThemeColors;
}>`
  background-color: ${(p) => p.$colors.cardForeground};
`;
const Container=styled.div<{
  $colors: ThemeColors;
}>`
        display:flex;
        overflow-y: hidden;
        gap:1rem;
        scroll-behavior: smooth;
        
`
const Content = styled.div<{
  $colors: ThemeColors;
}>`
  background-color: ${(p) => p.$colors.card};
  padding: 15px;
  min-width: 80px;
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