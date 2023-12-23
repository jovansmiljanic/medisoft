"use client";

// Vendors
import styled, { css } from "styled-components";

// Global components
import { Heading } from "@components";

const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.white};
    padding: 20px 40px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding: 20px;
    }
  `}
`;

const BenefitContent = styled.div`
  flex: 0 0 50%;
`;

const ImageWrap = styled.div`
  flex: 0 0 47%;
`;

const ContentImage = styled.img`
  width: 100%;
`;

export const benefitContent = [
  <Benefit>
    <ImageWrap>
      <ContentImage src="/images/benefit-1.webp" alt="Benefit 1" />
    </ImageWrap>

    <BenefitContent>
      <Heading
        as="h1"
        $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
      >
        Streamlined Operations
      </Heading>

      <Heading as="h6">
        Our software drastically reduces administrative workload, allowing more
        focus on patient care.
      </Heading>

      <ul>
        <li>Faster appointment scheduling</li>
        <li>Automated patient record updates</li>
      </ul>
    </BenefitContent>
  </Benefit>,

  <Benefit>
    <BenefitContent>
      <Heading as="h1">Empowering Patients</Heading>

      <Heading as="h6">
        Easy access to health records and appointment scheduling fosters patient
        involvement in their own care.
      </Heading>

      <ul>
        <li>User-friendly patient portal</li>
        <li>Enhanced communication tools</li>
      </ul>
    </BenefitContent>

    <ImageWrap>
      <ContentImage src="/images/benefit-2.webp" alt="Benefit 1" />
    </ImageWrap>
  </Benefit>,

  <Benefit>
    <ImageWrap>
      <ContentImage src="/images/benefit-3.webp" alt="Benefit 1" />
    </ImageWrap>

    <BenefitContent>
      <Heading as="h1">Informed Healthcare</Heading>

      <Heading as="h6">
        Leverage comprehensive analytics for better medical decision-making and
        practice management.
      </Heading>

      <ul>
        <li>Advanced reporting features</li>
        <li>Real-time data analysis</li>
      </ul>
    </BenefitContent>
  </Benefit>,

  <Benefit>
    <BenefitContent>
      <Heading as="h1">Reducing Operational Costs</Heading>

      <Heading as="h6">
        Our software minimizes unnecessary expenses, optimizing financial
        performance.
      </Heading>

      <ul>
        <li>Streamlined billing processes</li>
        <li>Efficient resource management</li>
      </ul>
    </BenefitContent>

    <ImageWrap>
      <ContentImage src="/images/benefit-4.webp" alt="Benefit 1" />
    </ImageWrap>
  </Benefit>,

  <Benefit>
    <ImageWrap>
      <ContentImage src="/images/benefit-5.webp" alt="Benefit 1" />
    </ImageWrap>

    <BenefitContent>
      <Heading as="h1">Safeguarding Patient Data</Heading>
      <Heading as="h6">
        We prioritize the highest standards of data security and privacy
        protection.
      </Heading>

      <ul>
        <li>State-of-the-art encryption</li>
        <li>Regular security updates and compliance checks</li>
      </ul>
    </BenefitContent>
  </Benefit>,
];
