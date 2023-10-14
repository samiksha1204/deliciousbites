import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notifications from "./components/notification";
import Nav from "./components/navbar";
import Foot from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notifications></Notifications>
        <Nav />

        {children}
        <Foot />
      </body>
    </html>
  );
}
