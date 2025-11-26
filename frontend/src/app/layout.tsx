import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./component/Providers";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./component/ThemeWrapper";

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
  title: "Weather App",
  description: "Check if you need an umbrella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Providers>
          <ThemeProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
