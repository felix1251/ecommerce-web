import Link from "next/link";
import * as React from "react";

interface IHeaderLinksProps {}

const HeaderLinks: React.FunctionComponent<IHeaderLinksProps> = (props) => {
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
