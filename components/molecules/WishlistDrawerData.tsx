/* eslint-disable @next/next/no-img-element */
"use client";

import { RootState } from "@/redux/store";
import { getWishlistData, getWishlistTotalSum } from "@/redux/wishlist/slice";
import { SingleWishlist } from "@/redux/wishlist/types";
import { roundPrice } from "@/utils";
import { useSelector } from "react-redux";
import { WishlistCard } from "../atoms";

const WishlistDrawerData: React.FunctionComponent = () => {
  const wishlist = useSelector<RootState, SingleWishlist[]>(getWishlistData);
  const wishlistTotalSum = useSelector<RootState, number>(getWishlistTotalSum);

  return (
    <div>
      <div className="-mx-5 px-5 pb-4 w-full sticky top-0 bg-white">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-xl text-gray-700">Total: </span>
          <span
            className={`text-xl font-semibold ${
              wishlistTotalSum > 0 ? "text-green-500" : "text-zinc-500"
            }`}
          >
            {roundPrice(wishlistTotalSum)}
          </span>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-zinc-200">
        {wishlist.map((w) => (
          <WishlistCard
            key={w.id}
            id={w.id}
            title={w.title}
            thumbnail={w.thumbnail}
            price={w.price}
            discountPercentage={w.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistDrawerData;
