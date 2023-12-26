// Core types
import type { FC } from "react";

// Global components
import { Button, Heading, Title } from "@components";

// Vendors
import styled, { css } from "styled-components";
import { useTranslations } from "next-intl";

const index: FC = () => {
  // Translation
  const t = useTranslations();

  return (
    <Integration id="app-integration">
      <Wrap>
        <Heading as="h5" color="primary">
          {t("integrationPreTitle")}
        </Heading>

        <Title>{t("integrationTitle")}</Title>

        <Heading
          as="h6"
          color="textColorSecondary"
          $padding={{
            xs: { bottom: 2 },
            sm: { bottom: 2 },
            md: { bottom: 2 },
          }}
        >
          {t("integrationDescription")}
        </Heading>

        <Button $variant="primary" as="a" href="#pricing">
          {t("integrationCtaLabel")}
        </Button>
      </Wrap>
    </Integration>
  );
};

export { index as Integration };

const Integration = styled.div`
  max-width: 1340px;
  margin: auto;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      text-align: left;
      padding: ${spaces[6]}px ${spaces[3]}px;
    }
  `}
`;

const Wrap = styled.div`
  width: 60%;
  margin: auto;

  text-align: center;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
    }
  `}
`;
