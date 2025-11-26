import { useState, FormEvent, useEffect } from "react";
import Button from "./Buttons"
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { IoMoonOutline,IoSunnyOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { ThemeColors } from "@/styles/colors";
import { useFetchCoords, useGeoCoordinates } from "../hooks";
import {  DEFAULT_COORDS, HeaderProps } from "./shared/interface";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

export function Header({setCoords, setLocationName, setOpenModal}:HeaderProps){
  const { mode, colors, toggleTheme } = useTheme();
    const [city, setCity] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const {data} = useFetchCoords(searchCity);
     const [coords, setLocalCoords] = useState<{ lat: number; lon: number }>(
       DEFAULT_COORDS
     );
     const { data: goeData, isFetching } = useGeoCoordinates(coords);
  useEffect(() => {
    if (data?.latitude && data?.longitude && data.name && data.country) {
      setCoords({ lat: data.latitude, lon: data.longitude });
      setLocationName({ city: data.name, country: data.country });
    }
  }, [data, setCoords, setLocationName]);
  const handleSubmit = (
    e: FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    setSearchCity(city.trim());
  };
  const handleGetUserLocation = () => {
      if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
        setLocalCoords({ lat: latitude, lon: longitude });
        setSearchCity(goeData?.city.trim());
      },
      (error) => {
        if (error.code === 1)
          alert("Permission denied. Enable location access.");
        else if (error.code === 2) alert("Location unavailable.");
        else if (error.code === 3) alert("Request timed out.");
      }
    );
  }

    return (
      <HeaderStyle
        className="w-full sticky top-0 border-b  p-4 shadow-sm z-50 "
        $colors={colors}
      >
        <div className=" flex flex-col sm:flex-row justify-between  ">
          <div className="flex items-start md:items-center gap-4 mb-4 sm:mb-0">
            <div className="flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center">
              <span className="text-2xl">☀️</span>
            </div>
            <h1 className="text-2xl tracking-tight font-bold  text-gray-600">
              Weather Now
            </h1>
          </div>

          <div className="flex items-center">
            <div className="flex items-center justify-center gap-4">
              <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                <div className="relative flex items-center w-full max-w-sm">
                  <Input
                    type="text"
                    name="city"
                    placeholder="Search city..."
                    className="w-full pr-20 pl-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    $colors={colors}
                  />
                  <IoSearchOutline
                    className="absolute right-3 text-gray-500 text-lg cursor-pointer h-4 w-4"
                    onClick={handleSubmit}
                  />
                </div>

                <Button
                  icon={<IoLocationOutline className="w-4 h-4" />}
                  onClick={handleGetUserLocation}
                  disabled={isFetching}
                  hoverColor={`${colors.ring}`}
                />
              </form>
              <Button
                hoverColor={`${colors.ring}`}
                onClick={toggleTheme}
                icon={
                  mode === "light" ? (
                    <IoMoonOutline className="w-4 h-4" />
                  ) : (
                    <IoSunnyOutline className="w-4 h-4" />
                  )
                }
              />
              <Button
                hoverColor={`${colors.ring}`}
                icon={<CiSettings className="w-4 h-4 " />}
                onClick={() => setOpenModal((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </HeaderStyle>
    );
}
const HeaderStyle = styled.header<{ $colors: ThemeColors }>`
  background-color: ${(p) => p.$colors.cardForeground};
  h1 {
    color: ${(p) => p.$colors.destructiveForeground};
  }
`;
const Input = styled.input<{ $colors: ThemeColors }>`
  background-color: ${(p) => p.$colors.input};
`;