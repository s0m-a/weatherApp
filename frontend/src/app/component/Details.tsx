import React from "react";
import { DetailsProps } from "./shared/interface";
import styled from "styled-components";
import { theme } from "@/styles/colors";
import { ThemeColors } from "@/styles/colors";
import { useTheme } from "../context/ThemeContext";

export default function Details({ icon, label, value }: DetailsProps){
    const { colors } = useTheme();
    return (
      <DetailsContainer $colors={colors}>
        <IconContainer>{icon}</IconContainer>
        <Desc>
          <h6>{label}</h6>
          <p>{value}</p>
        </Desc>
      </DetailsContainer>
    );
}

const DetailsContainer = styled.div<{ $colors: ThemeColors }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 16px;
  border-radius: 16px;
  background-color: ${(p) => p.$colors.card};
  flex-wrap: wrap;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  @media (max-width: 508px) {
    width: 100%;
  }
`;
const IconContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height:40px;
        background-color: ${theme.light.primary10};
`
const Desc = styled.div`
        h6{
        font-weight: semi-bold;
        font-size: 15px;
        color: ${theme.light.mutedForeground};
        }
        p{
        font-weight: bold;

        }
`