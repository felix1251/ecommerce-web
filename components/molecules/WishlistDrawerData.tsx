"use client";

import { RootState } from "@/redux/store";
import { getWishlistIds } from "@/redux/wishlist/slice";
import { SingleWishlist } from "@/redux/wishlist/types";
import { useSelector } from "react-redux";

const WishlistDrawerData: React.FunctionComponent = () => {
  const wishlist = useSelector<RootState, SingleWishlist[]>(getWishlistIds);

  return (
    <div>
      {wishlist.map((wishlist) => (
        <div key={wishlist.id}>{wishlist.id}</div>
      ))}
    </div>
  );
};

export default WishlistDrawerData;
