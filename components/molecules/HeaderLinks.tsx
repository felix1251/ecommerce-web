import Link from "next/link";
import React from "react";

const HeaderLinks: React.FunctionComponent = () => {
  return (
    <div className="flex font-medium gap-4 text-gray-700">
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        Home
      </Link>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        Shop
      </Link>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        About
      </Link>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        Blog
      </Link>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        Contact
      </Link>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-2"
      >
        pages
      </Link>
    </div>
  );
};

export default HeaderLinks;
