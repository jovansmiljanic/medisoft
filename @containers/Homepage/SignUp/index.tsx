// Core types
import type { FC } from "react";

// Global componentd
import { Button, Title } from "@components";

// Server utils
import { sendEmail } from "@utils";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const SignUp = styled.div`
  max-width: 1340px;
  margin: auto;
  position: relative;

  display: flex;
  border-radius: 10px;

  ${({ theme: { breakpoints, colors, spaces } }) => css`
    margin: ${spaces[10]}px auto;
    padding: ${spaces[10]}px ${spaces[8]}px;
    background-color: ${colors.primary};

    @media (max-width: ${breakpoints.md}px) {
      padding: ${spaces[6]}px ${spaces[3]}px;
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
    color: ${colors.white};

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
  // Translation
  const t = useTranslations();

  return (
    <SignUp>
      <Content>
        <Title>{t("signUpTitle")}</Title>

        <Form
          action={async formData => {
            await sendEmail(formData);
          }}
        >
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={t("emailPlaceholder")}
            required
          />

          <Button $variant="white" type="submit">
            {t("signUpCtaLabel")}
          </Button>
        </Form>
      </Content>

      <Image src="/images/signUp.webp" alt="Sign up" />
    </SignUp>
  );
};

export { index as SignUp };
