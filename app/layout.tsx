// Global styles
import GlobalStyle from "globalStyles";

// Fonts
import { Comfortaa } from "next/font/google";

// Providers
import Providers from "providers";

// Store
import { Store } from "@context";
import { Layout } from "../@components/Layout";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={comfortaa.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <title>Medisoft</title>

        <link rel="icon" href="/logo.png" />
      </head>

      <body>
        <Providers>
          <GlobalStyle />

          <Store>
            <Layout>{children}</Layout>
          </Store>
        </Providers>
      </body>
    </html>
  );
}
