/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface IProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
  brand: string;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  id,
  title,
  thumbnail,
  brand,
}: IProductCardProps) => {
  return (
    <Link href={`/products/${id}`} className="flex flex-col gap-5 max-w-md">
      <img
        className="w-full h-52 object-cover object-center rounded-sm border"
        src={thumbnail}
        alt={title}
      />
      <div className="flex flex-col text-center gap-2">
        <h3 className="font-semibold text-[15px] text-slate-800">{title}</h3>
        <span className="text-sm text-gray-500 font-bold">{brand}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
