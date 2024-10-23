"use client"

import type { Metadata } from "next";
import {Cormorant_Garamond, Inter, Poppins} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import {Providers} from "@/app/provider";
import Header from "@/public/Header/Header";
import React from "react";
import {usePathname} from "next/navigation";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant-garamond",
    weight: ["400"],
})

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "600"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname()
    if(pathname === "/"){
  return (<html lang="en">
      <body className={`${cormorantGaramond.variable} ${poppins.variable}`}>
      {/*<Header/>*/}
      {children}
      </body>
      </html>

  );
    } else {
        return (
            <html lang="en">
                <body className={`${cormorantGaramond.variable} ${poppins.variable}`}>
                {children}
                </body>
            </html>
        )
    }
}
