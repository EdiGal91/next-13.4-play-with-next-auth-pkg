import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import Navbar, { ILink } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Custom Auth",
  description: "Generated by create next app",
};

async function getLinks(): Promise<ILink[]> {
  const session = await getServerSession();
  return [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Admin",
      href: "/admin",
    },
    {
      title: "Client",
      href: "/client",
    },
    ...(session
      ? [
          {
            title: "Account",
            href: "/account",
          },
        ]
      : [
          {
            title: "Login",
            href: "/login",
          },
        ]),
  ];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = await getLinks();
  return (
    <html lang="en">
      <body>
        <Navbar links={links} />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
