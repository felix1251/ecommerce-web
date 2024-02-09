import { HeaderLink } from "@/atoms";

const HeaderLinks: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row font-medium lg:gap-5 text-gray-700">
      <HeaderLink text="Home" url="/" />
      <HeaderLink text="Shop" url="/" />
      <HeaderLink text="About" url="/" />
      <HeaderLink text="Blog" url="/" />
      <HeaderLink text="Contact" url="/" />
      <HeaderLink text="Pages" url="/" />
    </div>
  );
};

export default HeaderLinks;
