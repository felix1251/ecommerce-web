"use client";
import { HeaderActions, HeaderLinks } from "@/molecules";
import Collapse from "@mui/material/Collapse";

interface IMobileNavProps {
  open: boolean;
}

const MobileNav: React.FunctionComponent<IMobileNavProps> = ({
  open = false,
}: IMobileNavProps) => {
  return (
    <div className="w-full block lg:hidden">
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="flex flex-col">
          <HeaderLinks />
          <HeaderActions />
        </div>
      </Collapse>
    </div>
  );
};

export default MobileNav;
