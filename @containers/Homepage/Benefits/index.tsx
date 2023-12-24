"use client";

// Core types
import { type FC, useState } from "react";

// Global components
import { Heading, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css, keyframes } from "styled-components";

// Benefit content
import { benefitContent } from "./Benefit";

const index: FC = () => {
  const t = useTranslations();

  const [activeIndex, setActiveIndex] = useState(0);

  const titles = [
    t("benefit1Label"),
    t("benefit2Label"),
    t("benefit3Label"),
    t("benefit4Label"),
    t("benefit5Label"),
  ];

  return (
    <Benefits id="our-benefits">
      <Heading as="h5" color="primary">
        {t("benefitsPreTitle")}
      </Heading>

      <Title>{t("benefitsTitle")}</Title>

      <Labels>
        {titles.map((title, index) => (
          <Label
            key={index}
            $activeItem={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {title}
          </Label>
        ))}
      </Labels>

      <ContentModal>{benefitContent()[activeIndex]}</ContentModal>
    </Benefits>
  );
};

export { index as Benefits };

const Benefits = styled.div`
  max-width: 1340px;
  margin: auto;
  text-align: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      text-align: left;
      padding: ${spaces[6]}px ${spaces[3]}px;
    }
  `}
`;

const Labels = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  ${({ theme: { breakpoints, colors, spaces } }) => css`
    margin: ${spaces[2]}px 0;
    border-bottom: 1px solid ${colors.lightGray};

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

// Keyframes for the border animation
const animateBorder = keyframes`
  from {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #a37cfc;
    width: 0;
  }
  to {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #a37cfc;
    width: 100%;
  }
`;

const Label = styled.div<{ $activeItem: boolean }>`
  position: relative;
  cursor: pointer;

  font-size: 18px;
  text-align: center;

  ${({ $activeItem, theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[1]}px 0;
    margin: 0 ${spaces[1]}px;

    &:hover {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        animation: ${animateBorder} 0.5s forwards;
      }
    }

    ${$activeItem &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        animation: ${animateBorder} 0.5s forwards;
      }
    `}

    @media (max-width: ${breakpoints.md}px) {
      margin: 0;
      padding: 10px 0;
    }
  `}
`;

const ContentModal = styled.div`
  text-align: left;
`;
