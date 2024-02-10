import { ProductDetailsOptions } from "@/molecules";
import { ProductResponse } from "@/redux/products/types";
import { discountedPrice, roundPrice } from "@/utils";
import { Rating } from "@mui/material";

interface IProductDetailsProps {
  product: ProductResponse;
}

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = ({
  product,
}) => {
  const inStock: boolean = product.stock > 0;

  return (
    <div className="grid py-5 w-full">
      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-4xl text-gray-800">{product.title}</h2>
        <div className="flex gap-3 items-center">
          <Rating
            name="user-star"
            readOnly={true}
            value={product.rating}
            size="large"
          />
          <span className="font-bold text-gray-500 text-xl">10 reviews</span>
        </div>
        <div className="mt-2 space-y-3">
          <div className="flex gap-3">
            <span className="text-4xl line-through font-bold text-zinc-400">
              {roundPrice(product.price)}
            </span>
            <span className="text-4xl font-bold text-gray-800">
              {discountedPrice(product.price, product.discountPercentage)}
            </span>
          </div>
          <div className="flex gap-2 font-bold text-zinc-500 text-xl">
            Availability:{" "}
            <span className={inStock ? "text-primary" : "text-red-500"}>
              {inStock ? "In Stock" : "Out of Stock"} ({product.stock})
            </span>
          </div>
        </div>
      </div>
      <ProductDetailsOptions product={product} />
    </div>
  );
};

export default ProductDetails;
