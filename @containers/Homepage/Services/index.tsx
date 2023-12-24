// Core types
import type { FC } from "react";

// Global components
import { Heading, Title } from "@components";

// Svg's
import {
  Bag,
  Folder,
  Management,
  Notification,
  Scan,
  Wallet,
} from "public/svg";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  // Translation
  const t = useTranslations();

  const services = [
    {
      title: t("ourServicesItem1Title"),
      description: t("ourServicesItem1Description"),
      icon: <Folder />,
    },
    {
      title: t("ourServicesItem2Title"),
      description: t("ourServicesItem2Description"),
      icon: <Wallet />,
    },
    {
      title: t("ourServicesItem3Title"),
      description: t("ourServicesItem3Description"),
      icon: <Bag />,
    },
    {
      title: t("ourServicesItem4Title"),
      description: t("ourServicesItem4Description"),
      icon: <Scan />,
    },
    {
      title: t("ourServicesItem5Title"),
      description: t("ourServicesItem5Description"),
      icon: <Management />,
    },
    {
      title: t("ourServicesItem6Title"),
      description: t("ourServicesItem6Description"),
      icon: <Notification />,
    },
  ];

  return (
    <Services id="our-services">
      <Heading as="h5" color="primary">
        {t("ourServicesPreTitle")}
      </Heading>

      <Title>{t("ourServicesTitle")}</Title>

      <Heading as="h6" color="textColorSecondary">
        {t("ourServicesDescription")}
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

const Services = styled.div`
  max-width: 1340px;
  margin: auto;

  text-align: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[6]}px ${spaces[3]}px ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      text-align: left;
    }
  `}
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

  min-height: 400px;
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
  border-radius: 10px;

  ${({ theme: { colors, spaces } }) => css`
    padding: ${spaces[3]}px;
    background-color: ${colors.primary};
  `}
`;

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
