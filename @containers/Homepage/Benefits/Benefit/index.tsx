"use client";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Global components
import { Heading } from "@components";

// Svg's
import { ListItem } from "public/svg";

export const benefitContent = () => {
  const t = useTranslations();

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
          {t("benefit1Title")}
        </Heading>

        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit1Description")}
        </Heading>

        <List>
          <Item>
            <ListItem />
            <span>{t("benefit1ListItem1")}</span>
          </Item>

          <Item>
            <ListItem />
            <span>{t("benefit1ListItem2")}</span>
          </Item>
        </List>
      </BenefitContent>
    </Benefit>,

    <Benefit>
      <BenefitContent>
        <Heading
          as="h1"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit2Title")}
        </Heading>

        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit2Description")}
        </Heading>

        <List>
          <Item>
            <ListItem />
            <span>{t("benefit2ListItem1")}</span>
          </Item>

          <Item>
            <ListItem />
            <span>{t("benefit2ListItem2")}</span>
          </Item>
        </List>
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
        <Heading
          as="h1"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit3Title")}
        </Heading>

        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit3Description")}
        </Heading>

        <List>
          <Item>
            <ListItem />
            <span>{t("benefit3ListItem1")}</span>
          </Item>
          <Item>
            <ListItem />
            <span>{t("benefit3ListItem2")}</span>
          </Item>
        </List>
      </BenefitContent>
    </Benefit>,

    <Benefit>
      <BenefitContent>
        <Heading
          as="h1"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit4Title")}
        </Heading>

        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit4Description")}
        </Heading>

        <List>
          <Item>
            <ListItem />
            <span>{t("benefit4ListItem1")}</span>
          </Item>

          <Item>
            <ListItem />
            <span>{t("benefit4ListItem2")}</span>
          </Item>
        </List>
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
        <Heading
          as="h1"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit5Title")}
        </Heading>
        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("benefit5Description")}
        </Heading>

        <List>
          <Item>
            <ListItem />
            <span>{t("benefit5ListItem1")}</span>
          </Item>

          <Item>
            <ListItem />
            <span>{t("benefit5ListItem2")}</span>
          </Item>
        </List>
      </BenefitContent>
    </Benefit>,
  ];
};

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

const List = styled.ul`
  margin-left: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  ${({ theme: { spaces } }) => css`
    margin-bottom: ${spaces[1]}px;

    svg {
      min-width: 22px;
      min-height: 22px;
      margin-right: ${spaces[1]}px;
    }
  `}
`;
