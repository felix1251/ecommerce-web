/* eslint-disable @next/next/no-img-element */
import { round, totalPrice } from "@/utils";
import Link from "next/link";
import React from "react";

interface IProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
  price: number;
  discountPercentage: number;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  id,
  title,
  thumbnail,
  brand,
  price,
  discountPercentage,
}: IProductCardProps) => {
  return (
    <Link href={`/products/${id}`} className="flex flex-col gap-4 max-w-md">
      <img
        className="w-full h-52 object-cover object-center rounded-sm border"
        src={thumbnail}
        alt={title}
      />
      <div className="flex flex-col text-center gap-2">
        <h3 className="font-semibold text-[15px] text-slate-800">{title}</h3>
        <span className="text-sm text-gray-500 font-bold">{brand}</span>
      </div>
      <div className="flex gap-2 w-full justify-center font-bold text-sm">
        <span className="text-zinc-400">${round(price, 2)}</span>
        <span className="text-secondary">
          ${totalPrice(price, discountPercentage)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
