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
  max-width: 1440px;
  margin: auto;
`;

const Logo = styled.img`
  width: 100px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 20px 0;
`;

const Column = styled.div`
  flex: 0 0 25%;
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
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
            Quick Contact Info
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
              2118 Thornridge Cir. Syracuse, Connecticut 35624
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
              (704) 555-0127
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
              duco@gmail.com
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
            Quick Contact Info
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
              2118 Thornridge Cir. Syracuse, Connecticut 35624
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
              (704) 555-0127
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
              duco@gmail.com
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
            <Link href="#services">Services</Link>
            <Link href="#about-us">About us</Link>
            <Link href="#contact-us">Contact us</Link>
          </Links>
        </Column>
      </Main>

      <Secondary />
    </Footer>
  );
};

export { index as Footer };
