/* eslint-disable @next/next/no-img-element */
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Link from "next/link";

interface IPostCardProps {
  isNew?: boolean;
  imgUrl: string;
  title: string;
  description: string;
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  isNew = false,
  imgUrl,
  title,
  description,
}: IPostCardProps) => {
  return (
    <div className="max-w-lg border rounded-sm shadow-md bg-white group">
      <div className="w-full relative overflow-hidden h-72">
        {isNew && (
          <span className="uppercase absolute top-5 left-5 z-10 text-sm bg-red-500 px-3 py-1 rounded-sm text-white">
            New
          </span>
        )}
        <img
          className="h-full w-full object-cover group-hover:scale-105 ease-in-out transition-transform duration-300"
          src={imgUrl}
          alt={imgUrl}
        />
      </div>
      <div className="flex flex-col py-5 px-7 gap-2.5">
        <ul className="flex gap-3 font-normal text-sm text-zinc-500">
          <li className="text-primary/70">Google</li>
          <li>Trending</li>
          <li>New</li>
        </ul>
        <h2 className="font-medium text-gray-700 text-xl">{title}</h2>
        <p className="font-normal text-sm text-zinc-500">{description}</p>
        <div className="flex text-xs mt-2 justify-between">
          <div className="flex gap-1 items-center">
            <AccessAlarmIcon
              className="text-primary/70"
              style={{ fontSize: 20 }}
            />
            <span className="text-zinc-500">22 April 2021</span>
          </div>
          <div className="flex gap-1 items-center">
            <EqualizerIcon
              className="text-secondary"
              style={{ fontSize: 20 }}
            />
            <span className="text-zinc-500">10 comments</span>
          </div>
        </div>
        <div className="mt-3">
          <Link href="/" className="font-bold text-zinc-500">
            Learn More{" "}
            <ArrowForwardIosIcon
              className="text-primary"
              style={{ fontSize: 20 }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
