// Core types
import type { FC } from "react";

// Global components
import { Button, Heading, List, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
  `}
`;
const Pricing = styled.div`
  max-width: 1340px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding: ${spaces[6]}px ${spaces[3]}px;
    }
  `}
`;

const Content = styled.div`
  flex: 0 0 42%;
`;

const Boxes = styled.div`
  flex: 0 0 55%;

  display: flex;
  justify-content: space-between;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      flex: 0 0 100%;
      flex-direction: column;
    }
  `}
`;

const Box1 = styled.div`
  border-radius: 10px;

  h1 {
    text-align: center;
  }

  button {
    width: 100%;
  }

  ${({ theme: { spaces, colors, breakpoints } }) => css`
    padding: ${spaces[8]}px ${spaces[5]}px;
    margin-right: ${spaces[1]}px;
    background-color: ${colors.background};

    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[4]}px;
    }
  `}
`;

const Box2 = styled.div`
  border-radius: 10px;

  h1 {
    text-align: center;
  }

  button {
    width: 100%;
  }

  ${({ theme: { spaces, colors } }) => css`
    padding: ${spaces[8]}px ${spaces[5]}px;
    color: ${colors.white};
    background-color: ${colors.primary};

    svg {
      path {
        fill: ${colors.white};
      }
    }
  `}
`;

const Price = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  h1 {
    padding-right: 5px;
    padding-left: 5px;
  }

  span {
    font-size: 14px;
    padding-bottom: 20px;
  }
`;

const index: FC = () => {
  const t = useTranslations();

  return (
    <Wrapper id="pricing">
      <Pricing>
        <Content>
          <Heading as="h6" color="primary">
            {t("pricingPreTitle")}
          </Heading>

          <Title>{t("pricingTitle")}</Title>

          <Heading
            as="h6"
            $padding={{
              xs: { bottom: 2 },
              sm: { bottom: 2 },
              md: { bottom: 2 },
            }}
          >
            {t("pricingDescription")}
          </Heading>
        </Content>

        <Boxes>
          <Box1>
            <Heading
              as="h6"
              $textAlign={{ xs: "center", sm: "center", md: "center" }}
            >
              {t("pricingBoxOneTitle")}
            </Heading>

            <Price>
              <span>{t("pricingBoxOneStartsFrom")}</span>
              <Title>{t("pricingBoxOnePrice")}</Title>
              <span>{t("pricingBoxOnePerMonth")}</span>
            </Price>

            <List
              list={[
                t("pricingBoxOneFeatureOne"),
                t("pricingBoxOneFeatureTwo"),
                t("pricingBoxOneFeatureThree"),
                t("pricingBoxOneFeatureFour"),
                t("pricingBoxOneFeatureFive"),
              ]}
            />

            <Button
              $variant="primary"
              $margin={{ xs: { top: 1 }, sm: { top: 1 }, md: { top: 1 } }}
            >
              {t("pricingCtaLabel")}
            </Button>
          </Box1>

          <Box2>
            <Heading
              as="h6"
              $textAlign={{ xs: "center", sm: "center", md: "center" }}
            >
              {t("pricingBoxTwoTitle")}
            </Heading>

            <Price>
              <span>{t("pricingBoxTwoStartsFrom")}</span>
              <Title>{t("pricingBoxTwoPrice")}</Title>
              <span>{t("pricingBoxTwoPerMonth")}</span>
            </Price>

            <List
              list={[
                t("pricingBoxTwoFeatureOne"),
                t("pricingBoxTwoFeatureTwo"),
                t("pricingBoxTwoFeatureThree"),
                t("pricingBoxTwoFeatureFour"),
                t("pricingBoxTwoFeatureFive"),
              ]}
            />

            <Button
              $variant="white"
              $margin={{ xs: { top: 1 }, sm: { top: 1 }, md: { top: 1 } }}
            >
              {t("pricingCtaLabel")}
            </Button>
          </Box2>
        </Boxes>
      </Pricing>
    </Wrapper>
  );
};

export { index as Pricing };
