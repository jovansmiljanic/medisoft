"use client";

// Vendors
import styled, { css } from "styled-components";
import useTranslation from "next-translate/useTranslation";

// Global components
import { Heading } from "@components";

const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.white};
    padding: 20px 40px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding: 20px;
    }
  `}
`;

const BenefitContent = styled.div`
  flex: 0 0 50%;
`;

const ImageWrap = styled.div`
  flex: 0 0 47%;
`;

const ContentImage = styled.img`
  width: 100%;
`;

export const benefitContent = () => {
  const { t } = useTranslation();

  return [
    <Benefit>
      <ImageWrap>
        <ContentImage src="/images/benefit-1.webp" alt="Benefit 1" />
      </ImageWrap>

      <BenefitContent>
        <Heading
          as="h1"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("home:benefit1Title")}
        </Heading>

        <Heading as="h6">{t("home:benefit1Description")}</Heading>

        <ul>
          <li>{t("home:benefit1ListItem1")}</li>
          <li>{t("home:benefit1ListItem2")}</li>
        </ul>
      </BenefitContent>
    </Benefit>,

    <Benefit>
      <BenefitContent>
        <Heading as="h1">{t("home:benefit2Title")}</Heading>

        <Heading as="h6">{t("home:benefit2Description")}</Heading>

        <ul>
          <li>{t("home:benefit2ListItem1")}</li>
          <li>{t("home:benefit2ListItem2")}</li>
        </ul>
      </BenefitContent>

      <ImageWrap>
        <ContentImage src="/images/benefit-2.webp" alt="Benefit 1" />
      </ImageWrap>
    </Benefit>,

    <Benefit>
      <ImageWrap>
        <ContentImage src="/images/benefit-3.webp" alt="Benefit 1" />
      </ImageWrap>

      <BenefitContent>
        <Heading as="h1">{t("home:benefit3Title")}</Heading>

        <Heading as="h6">{t("home:benefit3Description")}</Heading>

        <ul>
          <li>{t("home:benefit3ListItem1")}</li>
          <li>{t("home:benefit3ListItem2")}</li>
        </ul>
      </BenefitContent>
    </Benefit>,

    <Benefit>
      <BenefitContent>
        <Heading as="h1">{t("home:benefit4Title")}</Heading>

        <Heading as="h6">{t("home:benefit4Description")}</Heading>

        <ul>
          <li>{t("home:benefit4ListItem1")}</li>
          <li>{t("home:benefit4ListItem2")}</li>
        </ul>
      </BenefitContent>

      <ImageWrap>
        <ContentImage src="/images/benefit-4.webp" alt="Benefit 1" />
      </ImageWrap>
    </Benefit>,

    <Benefit>
      <ImageWrap>
        <ContentImage src="/images/benefit-5.webp" alt="Benefit 1" />
      </ImageWrap>

      <BenefitContent>
        <Heading as="h1">{t("home:benefit5Title")}</Heading>
        <Heading as="h6">{t("home:benefit5Description")}</Heading>

        <ul>
          <li>{t("home:benefit5ListItem1")}</li>
          <li>{t("home:benefit5ListItem2")}</li>
        </ul>
      </BenefitContent>
    </Benefit>,
  ];
};
