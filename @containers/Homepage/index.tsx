"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled from "styled-components";

// Local components
import { Hero } from "./Hero";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";

const Homepage = styled.div``;

const index: FC = () => {
  return (
    <Homepage>
      <Hero />
      <Services />
      <AboutUs />
    </Homepage>
  );
};

export { index as Homepage };
