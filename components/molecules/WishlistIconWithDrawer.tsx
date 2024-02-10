"use client";

import { Drawer } from "@/atoms";
import { WishlistDrawerData } from "@/molecules";
import { RootState } from "@/redux/store";
import { getWishlistCount } from "@/redux/wishlist/slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useSelector } from "react-redux";

const WislistIconWithDrawer: React.FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const wishlistCount = useSelector<RootState, number>(getWishlistCount);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit"
      >
        <div className="flex item-center gap-0.5 text-base lg:text-sm">
          <FavoriteBorderIcon style={{ fontSize: 22 }} />{" "}
          {wishlistCount > 0 && <span>{wishlistCount}</span>}
        </div>
      </button>
      <Drawer
        drawerOpen={open}
        setDrawerOpen={setOpen}
        title={`My Wishlist (${wishlistCount})`}
      >
        <WishlistDrawerData />
      </Drawer>
    </>
  );
};

export default WislistIconWithDrawer;
