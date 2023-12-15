"use client";

// Core types
import type { FC } from "react";

// Core
import { useContext, useEffect, useState } from "react";

// Store context
import { StoreContext } from "@context";

// NextJS
import Link from "next/link";

// Vendors
import styled, { css } from "styled-components";

// Global components
import { Button } from "@components";

// Local components
import { Navigation } from "./Navigation";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;

  max-width: 1440px;
  margin: auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
  `}
`;

const Toggler = styled.div`
  position: absolute;
  width: 40px;
  height: 25px;
  right: 20px;
  top: 49px;
  cursor: pointer;

  &:before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    position: absolute;
    content: "";
    transform: translateY(-50%);
  }

  &:after {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    position: absolute;
    content: "";
    transform: translateY(50%);
  }

  ${({ theme: { colors } }) => css`
    border-top: 2px solid ${colors.black};
    border-bottom: 2px solid ${colors.black};

    &:before {
      background-color: ${colors.black};
    }
  `}
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { colors } }) => css`
    a {
      padding-right: 15px;
      color: ${colors.textColorPrimary};
    }
  `}
`;

const Logo = styled.img`
  width: 80px;
`;

const index: FC = () => {
  const { isTablet } = useContext(StoreContext);
  const [toggled, setToggle] = useState<boolean>(true);

  useEffect(() => {
    setToggle(!isTablet);
  }, [isTablet]);

  return (
    <Wrapper>
      <Link href="/">
        <Logo src="/logo.png" alt="" />
      </Link>

      {!isTablet && (
        <Nav>
          <Link href="#">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#about-us">About us</Link>
          <Link href="#contact-us">Contact us</Link>

          <Button $variant="primary" size="small">
            Get a quote
          </Button>
        </Nav>
      )}

      {isTablet && (
        <>
          <Navigation toggled={toggled} />
          <Toggler onClick={() => setToggle(!toggled)} />
        </>
      )}
    </Wrapper>
  );
};

export { index as Header };
