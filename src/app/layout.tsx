import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppData } from "@/utils/appdata";
import SideBar from "@/components/SideBar/page";
import { FullScreenMediaProvider } from "@/context/FullScreenMediaContext";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${AppData.name} - Home`,
  description: AppData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex items-start  w-screen overflow-hidden`}
      >
        <FullScreenMediaProvider>
          <SideBar />
          {children}
        </FullScreenMediaProvider>
      </body>
    </html>
  );
}
