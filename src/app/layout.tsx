import type { Metadata } from "next"
import { Inter } from 'next/font/google';
// import localFont from 'next/font/local'
import "./globals.css";

import Navbar from "@/components/server/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../SessionAuth/AuthOptions";
import SessionProvider from "@/TheSessionProvider";

/* const myFont = localFont({
  src: [
    {
      path: '../assets/vazir-font-v16.1.0/Vazir-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/vazir-font-v16.1.0/Vazir-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/vazir-font-v16.1.0/Vazir-Thin.woff2',
      weight: '200',
      style: 'normal',
    }
  ],
  variable: "--font-localFont-myFont",
}); */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "movies information",
  description: "this website made for practise and useless",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions)

  return (
    <html dir="ltr" lang="en">
      <body
        className={`${inter.className} w-[full-content] min-w-[27rem]`} 
      >
        <SessionProvider session={session}>
          <Navbar/>
          <br />
          <br />
          <br />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
