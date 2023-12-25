"use client";

// Core types
import type { FC } from "react";

// Local components
import { Hero } from "./Hero";
import { Services } from "./Services";
import { AboutUs } from "./AboutUs";
import { Benefits } from "./Benefits";
import { Integration } from "./Intergration";
import { SignUp } from "./SignUp";
import { Pricing } from "./Pricing";

const index: FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Benefits />
      <Integration />
      <Pricing />
      <SignUp />
    </>
  );
};

export { index as Homepage };
