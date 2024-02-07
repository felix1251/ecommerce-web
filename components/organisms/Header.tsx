import Link from "next/link";
import * as React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <header className="w-full margin-max-screen flex items-center h-24">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-28 items-center">
          <Link href="/" className="font-bold text-2xl">
            Bandage
          </Link>
          <div>
            <div className="flex font-medium gap-4 text-gray-700">
              <Link
                href="/"
                className="hover:underline underline-offset-4 decoration-2"
              >
                Home
              </Link>
              <Link href="/">Shop</Link>
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact</Link>
              <Link href="/">pages</Link>
            </div>
          </div>
        </div>
        <div>
          <a href="/" className="text-sky-400 font-semibold">
            Login / Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
