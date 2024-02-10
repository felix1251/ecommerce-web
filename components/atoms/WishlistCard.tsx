/* eslint-disable @next/next/no-img-element */

import { AppDispatch } from "@/redux/store";
import { removeFromWishlist } from "@/redux/wishlist/slice";
import { discountedPrice, roundPrice } from "@/utils";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";

interface IWislistCard {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  discountPercentage: number;
}

const WishlistCard: React.FunctionComponent<IWislistCard> = ({
  id,
  thumbnail,
  title,
  price,
  discountPercentage,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const removeWislist = () => dispatch(removeFromWishlist(id));

  return (
    <div className="flex gap-5 py-2.5">
      <img
        className="min-w-20 w-20 h-20 border rounded-sm object-cover object-top"
        src={thumbnail}
        alt={thumbnail}
      />
      <div className="flex gap-1 justify-between w-full items-start">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-base text-gray-800">{title}</span>
          <div className="flex gap-2">
            {discountPercentage > 0 && (
              <span className="text-zinc-400 line-through font-medium">
                {roundPrice(price)}
              </span>
            )}
            <span className="text-secondary font-medium">
              {discountedPrice(price, discountPercentage)}
            </span>
          </div>
        </div>
        <button
          aria-label="remove wislist"
          onClick={removeWislist}
          className="text-gray-400 hover:text-red-600 transition-colors duration-100 ease-in-out"
        >
          <DeleteForeverIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
