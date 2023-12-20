"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading, Wave } from "@components";

// Vendors
import styled, { css } from "styled-components";

const Hero = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 180px;

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
  font-size: 60px;
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
  flex: 0 0 50%;

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
      <Hero>
        <ContentWrap>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quisquam voluptatum porro voluptate, tempore reprehenderit, rem,
            exercitationem perferendis illum ducimus consequuntur et! Beatae
            aliquam quas accusamus dolore laudantium repellat ex!
          </Heading>

          <Button $variant="white">Learn more</Button>
        </ContentWrap>

        <MockupWrap>
          <Mockup src="/images/hero-mockup.webp" alt="Mockup" />
        </MockupWrap>
      </Hero>
    </Wave>
  );
};

export { index as Hero };
