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

const index: FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Benefits />
      <Integration />
      <SignUp />
    </>
  );
};

export { index as Homepage };
