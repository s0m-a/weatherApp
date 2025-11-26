'use client'
import React,{useState} from "react";
import { Header } from "./component/Header";
import CurrentWeather from "./component/CurrentWeather";
import { DEFAULT_COORDS } from "./component/shared/interface";
import HourlyWeather from "./component/HourlyWeather";
import DailyWeather from "./component/DailyWeather";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { ThemeColors } from "@/styles/colors";
import { useTheme } from "./context/ThemeContext";
export default function Home() {
  const { colors } = useTheme();
  const [coords, setCoords] = useState(DEFAULT_COORDS)
  const [unit, setUnit] = useState<"C" | "F">("C");
   const [openModal,setOpenModal] = useState(false)
   const [locationName, setLocationName] = useState({city: "Abuja", country: "Nigeria"})
  return (
    <div className="">
      <Header
        coords={coords}
        setCoords={setCoords}
        setLocationName={setLocationName}
        setUnit={setUnit}
        setOpenModal={setOpenModal}
      />
      <CurrentWeather
        lat={coords.lat}
        lon={coords.lon}
        locationName={locationName}
        unit={unit}
      />
      <HourlyWeather lat={coords.lat} lon={coords.lon} unit={unit} />
      <DailyWeather lat={coords.lat} lon={coords.lon} unit={unit} />

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 ">
          <CenterModal className=" p-6 rounded-lg shadow-lg " $colors={colors}>
            <div className="flex justify-between align-middle mb-5">
              <div>
                <h2 className="font-bold"> Settings </h2>
                <p>Customize your weather dashboard preferences</p>
              </div>
              <div>
                <IoIosClose
                  size={30}
                  onClick={() => setOpenModal((prev) => !prev)}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <h2>Temperature Unit</h2>
            <div className="mt-5  ">
              <LabelContain $colors={colors}>
                <Label
                  className="flex items-center gap-2 cursor-pointer"
                  $colors={colors}
                >
                  <input
                    type="radio"
                    name="temperature-unit"
                    checked={unit === "C"}
                    onChange={() => {
                      setUnit("C");
                      setOpenModal((p) => !p);
                    }}
                  />
                  <div>
                    <span>Celsius (°C)</span>
                    <p className="text-sm text-gray-500">Metric system</p>
                  </div>
                </Label>
              </LabelContain>

              <LabelContain $colors={colors}>
                <Label
                  className="flex items-center gap-2 cursor-pointer"
                  $colors={colors}
                >
                  <input
                    type="radio"
                    name="temperature-unit"
                    checked={unit === "F"}
                    onChange={() => {
                      setUnit("F");
                      setOpenModal((p) => !p);
                    }}
                  
                  />
                  <div>
                    <p>Fahrenheit (°F)</p>
                    <p>Imperial system</p>
                  </div>
                </Label>
              </LabelContain>
            </div>
          </CenterModal>
        </div>
      )}
    </div>
  );
}
const CenterModal = styled.div<{ $colors: ThemeColors }>`
  background-color: ${(p) => p.$colors.card};
  width: 40%;
  height: 35%;
  overflow-y: hidden;
  @media (max-width: 420px) {
    width: 90%;
    height: 40%;
  }
`;
const Label = styled.label<{ $colors: ThemeColors }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  align-content: center;
  margin-bottom: 15px;
  border: 1px solid ${(p) => p.$colors.border};
  padding: 0.5rem;
  border-radius: 16px;
`;
const LabelContain = styled.div<{ $colors: ThemeColors }>`
  :hover {
    background-color: ${(p) => p.$colors.primary10};
  }
`;