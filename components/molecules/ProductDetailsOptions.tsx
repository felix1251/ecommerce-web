import { Button } from "@/atoms";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const ProductDetailsOptions: React.FunctionComponent = () => {
  return (
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
  );
};

export default ProductDetailsOptions;
