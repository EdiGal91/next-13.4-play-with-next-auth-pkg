import Link from "next/link";
import React from "react";

export interface ILink {
  title: string;
  href: string;
}

export default function Navbar({ links }: { links: ILink[] }) {
  return (
    <header>
      <div className="w-full flex justify-center items-center bg-gray-200 ">
        {links.map((link) => (
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
  );
}
