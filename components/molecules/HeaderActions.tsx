import { CartIconWithDrawer, WishlistIconWithDrawer } from "@/molecules";
import SearchIcon from "@mui/icons-material/Search";
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
      <button
        aria-label="search icon"
        className="font-semibold hover:bg-zinc-100 lg:hover:bg-transparent py-2.5 lg:p-0  text-center lg:text-start w-full lg:w-fit text-xl lg:text-base"
      >
        <SearchIcon style={{ fontSize: 25 }} />
      </button>
      <CartIconWithDrawer />
      <WishlistIconWithDrawer />
    </div>
  );
};

export default HeaderActions;
