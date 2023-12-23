// Core types
import type { FC } from "react";

// Global components
import { Button, Heading } from "@components";

// Vendors
import styled, { css } from "styled-components";

const Integration = styled.div`
  max-width: 1340px;
  margin: auto;
  padding: 80px 20px;

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

  ${({ theme: { breakpoints, font } }) => css`
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 38px;
    }
  `}
`;

const Wrap = styled.div`
  width: 60%;
  margin: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
    }
  `}
`;

interface IIntegration {}

const index: FC<IIntegration> = () => {
  return (
    <Integration id="app-integration">
      <Wrap>
        <Heading as="h5" color="primary">
          APP INTEGRATION
        </Heading>

        <Title>Seamless Integration for Comprehensive Care</Title>

        <Heading
          as="h6"
          color="textColorSecondary"
          $padding={{
            xs: { bottom: 2 },
            sm: { bottom: 2 },
            md: { bottom: 2 },
          }}
        >
          Medisoft's software seamlessly integrates with a wide range of
          healthcare applications and systems, ensuring a unified and efficient
          workflow. Our robust integration capabilities allow for effortless
          synchronization with existing medical tools, enhancing both patient
          care and practice management. Embrace the full potential of digital
          healthcare with Medisoft's versatile app integration.
        </Heading>

        <Button $variant="primary">Explore more</Button>
      </Wrap>
    </Integration>
  );
};

export { index as Integration };
