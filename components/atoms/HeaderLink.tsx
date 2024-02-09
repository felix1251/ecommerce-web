import Link from "next/link";

interface IHeaderLinkProps {
  url: string;
  text: string;
}

const HeaderLink: React.FunctionComponent<IHeaderLinkProps> = ({
  url,
  text,
}: IHeaderLinkProps) => {
  return (
    <Link
      href={url}
      className="hover:bg-zinc-100 lg:hover:bg-transparent lg:bg-transparent py-2.5 lg:p-0 lg:hover:underline underline-offset-4 decoration-2 text-center lg:text-start w-full lg:w-fit text-xl lg:text-base text-zinc-500 lg:text-black"
    >
      {text}
    </Link>
  );
};

export default HeaderLink;
