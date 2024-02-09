import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const Breadcrumb: React.FunctionComponent = () => {
  return (
    <div className="w-full margin-max-screen pt-10">
      <div className="flex items-center gap-2">
        <Link className="font-bold text-gray-800" href="/">
          Home
        </Link>
        <ArrowForwardIosIcon
          className="text-neutral-300"
          style={{ fontSize: 23 }}
        />
        <span className="font-bold text-neutral-300">Shop</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
