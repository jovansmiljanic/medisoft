// Core types
import { Heading } from "@components";
import useTranslation from "next-translate/useTranslation";
import {
  Bag,
  Folder,
  Management,
  Notification,
  Scan,
  Wallet,
} from "public/svg";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Services = styled.div`
  max-width: 1340px;
  margin: auto;
  padding: 50px 20px 80px 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding-top: 40px;
      position: relative;
      z-index: 3;
      align-items: flex-start;
    }
  `}
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  padding: 10px 0;
  text-align: center;

  ${({ theme: { breakpoints, font } }) => css`
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      text-align: left;
      font-size: 38px;
    }
  `}
`;

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex: 0 0 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  border-radius: 10px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transform: translateY(-15px);
    transition: all 0.5s;
  }

  ${({ theme: { spaces, breakpoints } }) => css`
    padding: ${spaces[8]}px;
    margin-top: ${spaces[6]}px;

    @media (max-width: ${breakpoints.md}px) {
      flex: 0 0 100%;
      padding: ${spaces[4]}px;
    }
  `}
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 20px;
  border-radius: 10px;

  ${({ theme: { defaults, colors, font, ...theme } }) => css`
    background-color: ${colors.primary};
  `}
`;

const index: FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home:ourServicesItem1Title"),
      description: t("home:ourServicesItem1Description"),
      icon: <Folder />,
    },
    {
      title: t("home:ourServicesItem2Title"),
      description: t("home:ourServicesItem2Description"),
      icon: <Wallet />,
    },
    {
      title: t("home:ourServicesItem3Title"),
      description: t("home:ourServicesItem3Description"),
      icon: <Bag />,
    },
    {
      title: t("home:ourServicesItem4Title"),
      description: t("home:ourServicesItem4Description"),
      icon: <Scan />,
    },
    {
      title: t("home:ourServicesItem5Title"),
      description: t("home:ourServicesItem5Description"),
      icon: <Management />,
    },
    {
      title: t("home:ourServicesItem6Title"),
      description: t("home:ourServicesItem6Description"),
      icon: <Notification />,
    },
  ];

  return (
    <Services id="our-services">
      <Heading as="h5" color="primary">
        {t("home:ourServicesPreTitle")}
      </Heading>

      <Title>{t("home:ourServicesTitle")}</Title>

      <Heading as="h6" color="textColorSecondary">
        {t("home:ourServicesDescription")}
      </Heading>

      <Boxes>
        {services.map((service, index) => (
          <Box key={index}>
            <IconWrap>{service.icon}</IconWrap>

            <Heading
              as="h4"
              $weight="semiBold"
              $padding={{
                xs: { top: 2, bottom: 1 },
                sm: { top: 2, bottom: 1 },
                md: { top: 3, bottom: 1 },
              }}
            >
              {service.title}
            </Heading>

            <Heading as="h6" color="textColorSecondary">
              {service.description}
            </Heading>
          </Box>
        ))}
      </Boxes>
    </Services>
  );
};

export { index as Services };
