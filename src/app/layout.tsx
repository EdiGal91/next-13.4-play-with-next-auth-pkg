import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Auth",
  description: "Generated by create next app",
};

interface ILink {
  title: string;
  href: string;
}

const LINKS: ILink[] = [
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
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="w-full flex justify-center items-center bg-gray-200 ">
            {LINKS.map((link) => (
              <Link
                key={link.title}
                className="my-2 mx-4 p-2 hover:bg-gray-600 hover:text-white rounded-md"
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
