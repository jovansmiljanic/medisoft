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

  ${({ theme: { colors } }) => css`
    border-top: 1px solid ${colors.textColorSecondary};
  `}
`;

const Links = styled.div`
  ${({ theme: { colors } }) => css`
    a {
      padding-right: 20px;
      color: ${colors.textColorPrimary};
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
