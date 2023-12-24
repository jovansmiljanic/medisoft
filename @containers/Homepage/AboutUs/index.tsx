"use client";

// Core types
import type { FC } from "react";

// Global components
import { Button, Heading, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Svg's
import { BlackMessage, BlueMessage, RedMessage } from "public/svg";

const index: FC = () => {
  const t = useTranslations();

  return (
    <Wrapper id="about-us">
      <AboutUs>
        <MockupWrap>
          <Mockup src="/images/about-us-mockup.webp" alt="About us mockup" />
        </MockupWrap>

        <ContentWrap>
          <Heading as="h5" color="primary">
            {t("aboutUsPreTitle")}
          </Heading>

          <Title>{t("aboutUsTitle")}</Title>

          <Heading as="h6" color="textColorSecondary">
            {t("aboutUsDescription")}
          </Heading>

          <List>
            <Item>
              <RedMessage />
              <Heading as="h6" $weight="semiBold">
                {t("aboutUslistItem1")}
              </Heading>
            </Item>

            <Item>
              <BlackMessage />
              <Heading as="h6" $weight="semiBold">
                {t("aboutUslistItem2")}
              </Heading>
            </Item>

            <Item>
              <BlueMessage />
              <Heading as="h6" $weight="semiBold">
                {t("aboutUslistItem3")}
              </Heading>
            </Item>
          </List>

          <Button $variant="primary" as="a" href="#our-benefits">
            {t("aboutUsCtaLabel")}
          </Button>
        </ContentWrap>
      </AboutUs>
    </Wrapper>
  );
};

export { index as AboutUs };

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
  `}
`;

const AboutUs = styled.div`
  max-width: 1340px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      padding: ${spaces[6]}px ${spaces[3]}px;
      flex-direction: column;
    }
  `}
`;

const ContentWrap = styled.div`
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const MockupWrap = styled.div`
  flex: 0 0 50%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const Mockup = styled.img`
  width: 100%;
`;

const List = styled.div`
  ${({ theme: { spaces } }) => css`
    padding-top: ${spaces[3]}px;
  `}
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
