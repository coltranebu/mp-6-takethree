import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"
import { Providers } from "@/components/Sesh"

import styled from "styled-components";

export const metadata: Metadata = {
  title: "Coltrane Margosian mp-6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      
      <body>
        <Header/>
        <Providers>
          {children}
        </Providers>
      </body>
      
    </html>
  );
}
