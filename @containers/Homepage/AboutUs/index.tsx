// Core types
import { Button, Heading } from "@components";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const AboutUs = styled.div`
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
  font-size: 50px;
  line-height: 1.2;

  ${({ theme: { breakpoints, font, colors } }) => css`
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 38px;
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
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface IAboutUs {}

const index: FC<IAboutUs> = () => {
  return (
    <AboutUs>
      <MockupWrap>
        <Mockup src="/images/about-us-mockup.webp" alt="About us mockup" />
      </MockupWrap>

      <ContentWrap>
        <Heading
          as="h5"
          color="primary"
          $padding={{
            xs: { top: 2, bottom: 2 },
            sm: { top: 2, bottom: 2 },
            md: { top: 2, bottom: 2 },
          }}
        >
          ABOUT US
        </Heading>

        <Title>
          What Can Sofbox <br /> Do For You?
        </Title>

        <Heading
          as="h6"
          color="textColorSecondary"
          $padding={{
            xs: { top: 2, bottom: 2 },
            sm: { top: 2, bottom: 2 },
            md: { top: 2, bottom: 2 },
          }}
        >
          It is a long established fact that a reader will be distracted
          <br /> by the readable content of a page when looking at its layout.
        </Heading>

        <Button $variant="primary">Read more</Button>
      </ContentWrap>
    </AboutUs>
  );
};

export { index as AboutUs };
