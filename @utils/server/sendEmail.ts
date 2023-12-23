"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "smiljko99@gmail.com",
    subject: "Medisoft newsletter",
    text: `Hello, ${email} joined your newsletter!`,
  });
};
