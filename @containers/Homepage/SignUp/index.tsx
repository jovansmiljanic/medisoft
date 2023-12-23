// Core types
import type { FC } from "react";

// Global componentd
import { Button } from "@components";

// Server utils
import { sendEmail } from "../../../@utils/server";

// Vendors
import styled, { css } from "styled-components";
import useTranslation from "next-translate/useTranslation";

const Wrapper = styled.div`
  padding: 80px 20px;
`;

const SignUp = styled.div`
  max-width: 1340px;
  margin: auto;
  display: flex;

  padding: 100px 60px;
  position: relative;
  border-radius: 10px;

  ${({ theme: { breakpoints, colors } }) => css`
    background-color: ${colors.primary};

    @media (max-width: ${breakpoints.md}px) {
      align-items: flex-start;
      padding: 80px 20px;
    }
  `}
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;
  padding: 10px 0 20px 0;

  ${({ theme: { breakpoints, font, colors } }) => css`
    font-weight: ${font.weight.medium};
    color: ${colors.white};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 38px;
    }
  `}
`;

const Image = styled.img`
  position: absolute;
  top: -100px;
  right: 10px;

  ${({ theme: { breakpoints, font, colors } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      display: none;
    }
  `}
`;

const Content = styled.div`
  flex: 0 0 55%;

  ${({ theme: { breakpoints, font, colors } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      flex: 0 0 100%;
    }
  `}
`;

const Input = styled.input`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 50%;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.white};

    &::placeholder {
      color: ${colors.white};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;

const Form = styled.form`
  button {
    height: 100%;
  }
`;

const index: FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SignUp>
        <Content>
          <Title>{t("home:signUpTitle")}</Title>

          <Form
            action={async formData => {
              await sendEmail(formData);
            }}
          >
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />

            <Button $variant="white" type="submit">
              {t("home:signUpCtaLabel")}
            </Button>
          </Form>
        </Content>

        <Image src="/images/signUp.webp" alt="Sign up" />
      </SignUp>
    </Wrapper>
  );
};

export { index as SignUp };
