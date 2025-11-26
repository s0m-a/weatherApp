"use client"
import style from "styled-components"
import { ButtonProps } from "./shared/interface"
import { ThemeColors } from "@/styles/colors"
import { useTheme } from "../context/ThemeContext";


export default function Button({
  icon,
  onClick,
  bgColor,
  hoverColor,
}: ButtonProps) {
  const { colors } = useTheme();
  return (
    <ButtonContainer
      onClick={onClick}
      $colors={colors}
      bgColor={bgColor}
      hoverColor={hoverColor}
    >
      {icon}
    </ButtonContainer>
  );
}

const ButtonContainer = style.div<{
  $colors: ThemeColors;
  bgColor?: string;
  hoverColor?: string;
}>`
border: 1px ${(p) => p.$colors.border} solid;
border-Radius: 100%;
padding: 8px;
cursor: pointer;
margin-right:4px;
box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 5px;
&:hover{
background-color : ${({ hoverColor }) => hoverColor};
color: (p) => (p.bgColor ? "white" : p.$colors.secondary);
`;