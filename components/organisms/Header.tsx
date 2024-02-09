"use client";

import { HamburgerIcon } from "@/atoms";
import { HeaderActions, HeaderLinks, MobileNav } from "@/molecules";
import Link from "next/link";
import { useState } from "react";

const Header: React.FunctionComponent = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <>
      <header className="w-full margin-max-screen flex items-center min-h-14 md:min-h-24">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-28 items-center">
            <Link href="/" className="font-bold text-2xl text-gray-800">
              Bandage
            </Link>
            <div className="hidden lg:block">
              <HeaderLinks />
            </div>
          </div>
          <div className="hidden lg:block">
            <HeaderActions />
          </div>
        </div>
        <button
          className="block lg:hidden"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <HamburgerIcon />
        </button>
      </header>
      <MobileNav open={mobileNavOpen} />
    </>
  );
};

export default Header;
