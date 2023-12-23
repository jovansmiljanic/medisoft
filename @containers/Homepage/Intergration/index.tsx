// Core types
import type { FC } from "react";

// Global components
import { Button, Heading } from "@components";

// Vendors
import styled, { css } from "styled-components";
import useTranslation from "next-translate/useTranslation";

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

const index: FC = () => {
  const { t } = useTranslation();

  return (
    <Integration id="app-integration">
      <Wrap>
        <Heading as="h5" color="primary">
          {t("home:integrationPreTitle")}
        </Heading>

        <Title>{t("home:integrationTitle")}</Title>

        <Heading
          as="h6"
          color="textColorSecondary"
          $padding={{
            xs: { bottom: 2 },
            sm: { bottom: 2 },
            md: { bottom: 2 },
          }}
        >
          {t("home:integrationDescription")}
        </Heading>

        <Button $variant="primary">{t("home:integrationCtaLabel")}</Button>
      </Wrap>
    </Integration>
  );
};

export { index as Integration };
