// Core types
import type { FC } from "react";

// Global components
import { Heading } from "@components";

// Vendors
import Link from "next/link";
import styled, { css } from "styled-components";

const Secondary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ${({ theme: { colors, breakpoints } }) => css`
    border-top: 1px solid ${colors.textColorSecondary};

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme: { colors, breakpoints } }) => css`
    a {
      padding: 0 10px;
      color: ${colors.textColorPrimary};
    }

    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: 10px;
    }
  `}
`;

const index: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Secondary>
      <Links>
        <Link href="#home">Home</Link>
        <Link href="#our-services">Services</Link>
        <Link href="#about-us">About</Link>
        <Link href="#our-benefits">Benefits</Link>
        <Link href="#app-integration">Integration</Link>
      </Links>

      <Heading as="h6" color="primary">
        Copyright © Medisoft {year}. all right reserved
      </Heading>
    </Secondary>
  );
};

export { index as Secondary };
