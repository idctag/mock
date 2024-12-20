import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CustomNavbar } from "@/components/NavBar";
import { getLocale, getMessages } from "next-intl/server";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="snap-y snap-proximity"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <NextIntlClientProvider messages={messages}>
          <CustomNavbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
