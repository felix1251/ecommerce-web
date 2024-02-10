import { Button } from "@/atoms";
import { ProductResponse } from "@/redux/products/types";
import { discountedPrice, roundPrice } from "@/utils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
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
      <div className="w-full flex flex-col gap-6">
        <hr className="border border-zinc-300" />
        <div className="flex gap-5 items-center">
          <Button size="lg">Select Options</Button>
          <button className="p-2 rounded-full border border-zinc-600 text-zinc-600 hover:text-primary hover:border-primary transition-colors duration-200">
            <FavoriteBorderIcon />
          </button>
          <button className="p-2 rounded-full border border-zinc-600 text-zinc-600 hover:text-primary hover:border-primary transition-colors duration-200">
            <ShoppingCartOutlined />
          </button>
          <button className="p-2 rounded-full border border-zinc-600 text-zinc-600 hover:text-primary hover:border-primary transition-colors duration-200">
            <RemoveRedEyeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
