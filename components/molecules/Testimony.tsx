import { Rating } from "@mui/material";
import Image from "next/image";

const TestimonyCard: React.FunctionComponent = () => {
  return (
    <div className="h-full grid place-items-center">
      <div className="flex flex-col gap-7 items-center text-center">
        <h2 className="font-bold text-2xl text-gray-800">
          What they say about us
        </h2>
        <div className="flex flex-col gap-5 items-center">
          <Image
            src="/about-us-user.jpg"
            className="rounded-full border"
            width={80}
            height={80}
            alt="about-us-user"
          />
          <Rating name="user-star" readOnly={true} value={4} />
        </div>
        <p className="text-center text-sm w-96 font-semibold text-zinc-500">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <div className="text-center space-y-0.5">
          <div className="text-sm font-bold text-primary">Regina Miles</div>
          <div className="text-sm font-bold text-gray-800">Designer</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
