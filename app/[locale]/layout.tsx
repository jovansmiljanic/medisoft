// Global styles
import GlobalStyle from "@styles/globalStyles";

// Fonts
import { Comfortaa } from "next/font/google";

// Providers
import Providers from "providers";

// Store
import { Store } from "@context";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";

// Global components
import { Layout } from "@components";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "Medisoft",
  description:
    "Medisoft: Streamlining Healthcare Management. Experience unparalleled efficiency with Medisoft, the leading medical clinic software. Designed for healthcare professionals, our intuitive platform simplifies patient scheduling, billing, and electronic health records management. With Medisoft, enjoy seamless integration, secure data handling, and customizable features tailored to your clinic's needs. Elevate patient care with Medisoft's cutting-edge technology, ensuring a more organized, efficient, and compliant medical practice. Ideal for small to mid-sized clinics looking for an affordable, reliable solution.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    return notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className={comfortaa.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <title>Medisoft</title>
      </head>

      <body>
        <Providers>
          <GlobalStyle />

          <NextIntlClientProvider locale={locale} messages={messages}>
            <Store>
              <Layout>{children}</Layout>
            </Store>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
