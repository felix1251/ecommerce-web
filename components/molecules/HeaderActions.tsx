import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const HeaderActions: React.FunctionComponent = () => {
  return (
    <div className="text-primary lg:gap-6 items-center flex flex-col lg:flex-row">
      <Link
        href="/"
        className="font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0 lg:hover:underline underline-offset-4 decoration-2 text-center lg:text-start w-full lg:w-fit text-xl lg:text-base"
      >
        Login / Register
      </Link>
      <button className="font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit text-xl lg:text-base">
        <SearchIcon style={{ fontSize: 25 }} />
      </button>
      <button className="flex justify-center font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit">
        <div className="flex item-center gap-0.5 text-base lg:text-sm">
          <ShoppingCartOutlined style={{ fontSize: 22 }} /> 1
        </div>
      </button>
      <button className="flex justify-center font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit">
        <div className="flex item-center gap-0.5 text-base lg:text-sm">
          <FavoriteBorderIcon style={{ fontSize: 22 }} /> <span>1</span>
        </div>
      </button>
    </div>
  );
};

export default HeaderActions;
