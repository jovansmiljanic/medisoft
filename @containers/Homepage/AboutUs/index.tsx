// Core types
import type { FC } from "react";

// Global components
import { Button, Heading } from "@components";

// Vendors
import styled, { css } from "styled-components";
import { BlackMessage, BlueMessage, RedMessage } from "public/svg";
import useTranslation from "next-translate/useTranslation";

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
  `}
`;

const AboutUs = styled.div`
  max-width: 1340px;
  margin: auto;
  padding: 80px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

const List = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
`;

const index: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id="about-us">
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
            {t("home:aboutUsPreTitle")}
          </Heading>

          <Title>{t("home:aboutUsTitle")}</Title>

          <Heading
            as="h6"
            color="textColorSecondary"
            $padding={{
              xs: { top: 2, bottom: 2 },
              sm: { top: 2, bottom: 2 },
              md: { top: 2, bottom: 2 },
            }}
          >
            {t("home:aboutUsDescription")}
          </Heading>

          <List>
            <Item>
              <RedMessage />
              <Heading as="h6" $weight="semiBold">
                {t("home:aboutUslistItem1")}
              </Heading>
            </Item>

            <Item>
              <BlackMessage />
              <Heading as="h6" $weight="semiBold">
                {t("home:aboutUslistItem2")}
              </Heading>
            </Item>

            <Item>
              <BlueMessage />
              <Heading as="h6" $weight="semiBold">
                {t("home:aboutUslistItem3")}
              </Heading>
            </Item>
          </List>

          <Button $variant="primary" as="a" href="#our-benefits">
            {t("home:aboutUsCtaLabel")}
          </Button>
        </ContentWrap>
      </AboutUs>
    </Wrapper>
  );
};

export { index as AboutUs };
