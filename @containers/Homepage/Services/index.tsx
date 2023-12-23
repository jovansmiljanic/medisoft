// Core types
import { Heading } from "@components";
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

interface IServices {}

const index: FC<IServices> = () => {
  const services = [
    {
      title: "Appointment Scheduling",
      description: "Effortless booking and management of patient appointments.",
      icon: <Folder />,
    },
    {
      title: "Patient Records Management",
      description:
        "Secure, comprehensive digital records for optimal patient care.",
      icon: <Wallet />,
    },
    {
      title: "Reporting and Analytics",
      description: "Advanced analytics for insightful healthcare decisions.",
      icon: <Bag />,
    },
    {
      title: "Telemedicine Integration",
      description: "Connect with patients remotely for convenient care.",
      icon: <Scan />,
    },
    {
      title: "Billing and Insurance Processing",
      description: "Streamlined handling of billing and insurance claims.",
      icon: <Management />,
    },
    {
      title: "Customizable Dashboard",
      description:
        "Tailor your medical practice with our customizable interface.",
      icon: <Notification />,
    },
  ];

  return (
    <Services id="our-services">
      <Heading as="h5" color="primary">
        OUR SERVICES
      </Heading>

      <Title>Empowering Healthcare with Our Diverse Services</Title>

      <Heading as="h6" color="textColorSecondary">
        Explore our range of digital solutions designed for excellence in
        healthcare management and patient care.
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
