"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading, Wave } from "@components";

// Vendors
import styled, { css } from "styled-components";

const Hero = styled.div`
  max-width: 1340px;
  margin: auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 150px;
  position: relative;
  z-index: 3;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding-top: 40px;
      position: relative;
      z-index: 3;
    }
  `}
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;

  ${({ theme: { breakpoints, font, colors } }) => css`
    font-weight: ${font.weight.medium};
    color: ${colors.white};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 42px;
    }
  `}
`;

const ContentWrap = styled.div`
  flex: 0 0 45%;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: 20px;
    }
  `}
`;

const MockupWrap = styled.div`
  flex: 0 0 50%;
`;

const Mockup = styled.img`
  width: 100%;
`;

const index: FC = () => {
  return (
    <Wave>
      <Hero id="#home">
        <ContentWrap>
          <Title>
            Revolutionizing Healthcare with Advanced Digital Solutions
          </Title>

          <Heading
            as="h6"
            color="white"
            $padding={{
              xs: { top: 1, bottom: 1 },
              sm: { top: 1, bottom: 1 },
              md: { top: 2, bottom: 2 },
            }}
          >
            Discover Medisoft's innovative solutions for efficient Appointment
            Scheduling, comprehensive Patient Records Management, and advanced
            Reporting and Analytics. Transforming healthcare with technology for
            better patient care and practice management.
          </Heading>

          <Button $variant="white" as="a" href="#our-services">
            Learn more
          </Button>
        </ContentWrap>

        <MockupWrap>
          <Mockup src="/images/hero-mockup.webp" alt="Mockup" />
        </MockupWrap>
      </Hero>
    </Wave>
  );
};

export { index as Hero };
