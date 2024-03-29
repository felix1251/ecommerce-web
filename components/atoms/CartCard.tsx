"use client";

/* eslint-disable @next/next/no-img-element */
import {
  deccreseCartQuantity,
  increseCartQuantity,
  removeFromCart,
} from "@/redux/carts/slice";
import { AppDispatch } from "@/redux/store";
import { discountedPrice, roundPrice } from "@/utils";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";

interface ICartCard {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  discountPercentage: number;
  quantity: number;
}

const CartCard: React.FunctionComponent<ICartCard> = ({
  id,
  thumbnail,
  title,
  price,
  discountPercentage,
  quantity,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const removeCart = () => dispatch(removeFromCart(id));
  const increaseQuantity = () => dispatch(increseCartQuantity(id));
  const decreaseQuantity = () => dispatch(deccreseCartQuantity(id));

  return (
    <div className="flex gap-5 py-2.5">
      <img
        className="min-w-20 w-20 h-20 border rounded-sm object-cover object-top"
        src={thumbnail}
        alt={thumbnail}
      />
      <div className="flex gap-2 justify-between w-full items-start">
        <div className="flex flex-col gap-1">
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <button
                aria-label="decrease quantity"
                onClick={decreaseQuantity}
                className="h-8 px-1 border text-gray-800 hover:border-red-500 hover:text-red-500 rounded-sm transition-colors duration-100 ease-in-out"
              >
                <RemoveIcon style={{ fontSize: 22 }} />
              </button>
              <button
                aria-label="increase quantity"
                onClick={increaseQuantity}
                className="h-8 px-1 border text-gray-800 hover:border-green-500 hover:text-green-500 rounded-sm transition-colors duration-100 ease-in-out"
              >
                <AddIcon style={{ fontSize: 22 }} />
              </button>
            </div>
            <span className="font-medium text-gray-800">QTY: {quantity}</span>
          </div>
        </div>
        <button
          aria-label="remove cart"
          onClick={removeCart}
          className="text-gray-400 hover:text-red-600 transition-colors duration-100 ease-in-out"
        >
          <DeleteForeverIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
