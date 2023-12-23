"use client";

// Core types
import type { FC } from "react";

// Global components
import { Heading } from "@components";

// Local components
import { Secondary } from "./Secondary";

// Vendors
import Link from "next/link";
import styled, { css } from "styled-components";

const Footer = styled.div`
  max-width: 1340px;
  margin: auto;
`;

const Logo = styled.img`
  width: 100px;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: 20px;
    }
  `}
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 20px;

  ${({ theme: { breakpoints, colors } }) => css`
    h6 {
      a {
        color: ${colors.textColorPrimary};
      }
    }

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const Column = styled.div`
  flex: 0 0 25%;

  ${({ theme: { defaults, colors, font, breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: 20px;
    }
  `}
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme: { defaults, colors, font, ...theme } }) => css`
    a {
      padding: 7px 0;
      color: ${colors.textColorSecondary};
    }
  `}
`;

interface Footer {}

const index: FC<Footer> = () => {
  return (
    <Footer>
      <Main>
        <Logo src="/logo.png" alt="" />

        <Column>
          <Heading
            as="h5"
            $padding={{
              xs: { bottom: 1 },
              sm: { bottom: 1 },
              md: { bottom: 2 },
            }}
          >
            Contact Informations
          </Heading>

          <div>
            <Heading
              as="h5"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              Medisoft
            </Heading>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              <Link href="tel:+38112345678">+381 123 456 78</Link>
            </Heading>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              <Link href="mailto:info@medisoft">info@medisoft</Link>
            </Heading>
          </div>
        </Column>

        <Column>
          <Heading
            as="h5"
            $padding={{
              xs: { bottom: 1 },
              sm: { bottom: 1 },
              md: { bottom: 2 },
            }}
          >
            Where can you find us
          </Heading>

          <div>
            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              Some address street
            </Heading>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              11000, Belgrade
            </Heading>
          </div>
        </Column>

        <Column>
          <Heading
            as="h5"
            $padding={{
              xs: { bottom: 1 },
              sm: { bottom: 1 },
              md: { bottom: 2 },
            }}
          >
            Links
          </Heading>

          <Links>
            <Link href="#home">Home</Link>
            <Link href="#our-services">Services</Link>
            <Link href="#about-us">About</Link>
            <Link href="#our-benefits">Benefits</Link>
            <Link href="#app-integration">Integration</Link>
          </Links>
        </Column>
      </Main>

      <Secondary />
    </Footer>
  );
};

export { index as Footer };
