import React from "react";

const SubscribeEmail: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-gray-800 text-lg">Get in touch</h3>
      <div className="space-y-2">
        <div className="flex">
          <input
            className="border py-4 px-6 bg-zinc-50"
            placeholder="Your Email"
            type="text"
          />
          <button className="py-4 px-6 bg-primary text-white">Subscribe</button>
        </div>
        <p className="text-sm font-medium text-zinc-400">
          Lore imp sum dolor Amit
        </p>
      </div>
    </div>
  );
};

export default SubscribeEmail;
