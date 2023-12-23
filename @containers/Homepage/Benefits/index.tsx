"use client";

// Core types
import { type FC, useState } from "react";

// Global components
import { Heading } from "@components";

// Vendors
import styled, { css, keyframes } from "styled-components";

// Benefit content
import { benefitContent } from "./Benefit";

const Benefits = styled.div`
  max-width: 1340px;
  margin: auto;
  padding: 80px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      align-items: flex-start;
    }
  `}
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  padding: 10px 0 20px 0;
  text-align: center;

  ${({ theme: { breakpoints, font } }) => css`
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 38px;
    }
  `}
`;

const Labels = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;

  ${({ theme: { breakpoints, colors } }) => css`
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
  padding: 5px 10px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;

  font-size: 18px;

  ${({ $activeItem, theme: { breakpoints } }) => css`
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

const ContentModal = styled.div``;

interface IBenefits {}

const index: FC<IBenefits> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titles = [
    "Enhanced Efficiency",
    "Improved Patient Engagement",
    "Data-Driven Decisions",
    "Cost-Effective Solutions",
    "Robust Security",
  ];

  return (
    <Benefits id="our-benefits">
      <Heading as="h5" color="primary">
        OUR BENEFITS
      </Heading>

      <Title>
        The Medisoft Advantage: Enhancing Your Healthcare Experience
      </Title>

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

      <ContentModal>{benefitContent[activeIndex]}</ContentModal>
    </Benefits>
  );
};

export { index as Benefits };
