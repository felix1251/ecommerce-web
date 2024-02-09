import React from "react";

const SubscribeEmail: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-gray-800">Get in touch</h3>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <input
            className="w-full sm:w-fit border py-4 px-6 bg-zinc-50 rounded-l-md focus:outline-2 focus:outline-primary"
            placeholder="Your Email"
            type="text"
          />
          <button className="rounded-r-md py-4 px-6 bg-primary text-white">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-medium text-zinc-400">
          Lore imp sum dolor Amit
        </p>
      </div>
    </div>
  );
};

export default SubscribeEmail;
