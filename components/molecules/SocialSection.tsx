"use client";

import FacebookRounded from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialSection: React.FunctionComponent = () => {
  return (
    <section className="py-16 w-full bg-zinc-100">
      <div className="flex justify-between margin-max-screen">
        <h2 className="font-bold text-3xl text-gray-800">Bandage</h2>
        <div className="text-primary flex gap-5">
          <FacebookRounded style={{ fontSize: 30 }} />
          <InstagramIcon style={{ fontSize: 30 }} />
          <TwitterIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
