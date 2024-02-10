"use client";

import { Drawer } from "@/atoms";
import { getCartCount } from "@/redux/carts/slice";
import { RootState } from "@/redux/store";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CartDrawerData } from ".";

const CartDrawer: React.FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cartCount = useSelector<RootState, number>(getCartCount);

  return (
    <>
      <button
        aria-label="cart icon drawer"
        onClick={() => setOpen(true)}
        className="flex justify-center font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit"
      >
        <div className="flex item-center gap-0.5 text-base lg:text-sm">
          <ShoppingCartOutlined style={{ fontSize: 22 }} />{" "}
          {cartCount > 0 && <span>{cartCount}</span>}
        </div>
      </button>
      <Drawer
        drawerOpen={open}
        setDrawerOpen={setOpen}
        title={`My Cart (${cartCount})`}
      >
        <CartDrawerData />
      </Drawer>
    </>
  );
};

export default CartDrawer;
