"use client"

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../(user)/globals.css";
import { AppData } from "@/utils/appdata";
import { FullScreenMediaProvider } from "@/context/FullScreenMediaContext";
import { SideBarProvider } from "@/context/Admin/SideBarContext";
import { Toaster } from "react-hot-toast";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
// import SideBar from "@/components/Admin/SideBar";
import { usePathname } from "next/navigation";
import NavBar from "@/components/Admin/NavBar";
import { useState } from "react";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    fallback: ["sans-serif"],
    display: "swap",
    subsets: ["latin"],
});

// export const metadata: Metadata = {
//     title: `${AppData.name} - Admin`,
//     description: `Admin of ${AppData.name}`,
// };

const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: { main: '#f6339a' }, // pink
    },
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathName = usePathname();
    const showSideBar = !pathName.startsWith("/dashboard/auth");
    const [scrollPosition, setScrollPosition] = useState(0);


    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased flex items-start  w-screen overflow-hidden`}
            >
                <AppRouterCacheProvider>
                    <SideBarProvider>
                        <ThemeProvider theme={theme}>
                            {showSideBar && <NavBar isShowing={scrollPosition < 10} />}

                            <Toaster
                                position="top-right"
                                reverseOrder={false}
                            />

                            <main onScroll={e => {
                                setScrollPosition(e.currentTarget.scrollTop);
                            }} className="pt-[4.5rem] bg-gray-50 px-4 w-full h-full overflow-y-auto md:flex justify-center">
                                {children}
                            </main>
                        </ThemeProvider>
                    </SideBarProvider>

                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
