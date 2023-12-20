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
  padding: 20px 0;

  ${({ theme: { colors, breakpoints } }) => css`
    border-top: 1px solid ${colors.textColorSecondary};

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const Links = styled.div`
  ${({ theme: { colors, breakpoints } }) => css`
    a {
      padding-right: 20px;
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
        <Link href="#services">Services</Link>
        <Link href="#about-us">About us</Link>
        <Link href="#contact-us">Contact us</Link>
      </Links>

      <Heading as="h6" color="primary">
        Copyright © Medisoft {year}. all right reserved
      </Heading>
    </Secondary>
  );
};

export { index as Secondary };
