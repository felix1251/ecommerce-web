"use client";

import { getCartlist, getCartlistTotalSum } from "@/redux/carts/slice";
import { SingleCart } from "@/redux/carts/types";
import { RootState } from "@/redux/store";
import { roundPrice } from "@/utils";
import { useSelector } from "react-redux";
import CartCard from "../atoms/CartCard";

const CartDrawerData: React.FunctionComponent = () => {
  const carts = useSelector<RootState, SingleCart[]>(getCartlist);
  const cartTotalSum = useSelector<RootState, number>(getCartlistTotalSum);

  return (
    <div>
      <div className="-mx-5 px-5 pb-4 w-full sticky top-0 bg-white">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-xl text-gray-700">Total: </span>
          <span
            className={`text-xl font-semibold ${
              cartTotalSum > 0 ? "text-green-500" : "text-zinc-500"
            }`}
          >
            {roundPrice(cartTotalSum)}
          </span>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-zinc-200">
        {carts.map((w) => (
          <CartCard
            key={w.id}
            id={w.id}
            title={w.title}
            thumbnail={w.thumbnail}
            price={w.price}
            discountPercentage={w.discountPercentage}
            quantity={w.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartDrawerData;
