import * as React from "react";

const Banner: React.FunctionComponent = (props) => {
  return (
    <div className="bg-[#23856D] w-full flex items-center h-14">
      <div className="flex margin-max-screen justify-between gap-5 text-white font-medium">
        <div className="flex gap-10">
          <span>(222) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <span>Follow us and get a chance to win 80% off</span>
        <span>Follow us: </span>
      </div>
    </div>
  );
};

export default Banner;
