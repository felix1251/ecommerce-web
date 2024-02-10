import React from "react";

interface IRoundedButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RoundedButtonIcon: React.FunctionComponent<IRoundedButtonIconProps> = ({
  children,
  ...props
}: IRoundedButtonIconProps) => {
  return (
    <button
      {...props}
      className="p-2 rounded-full border border-zinc-600 text-zinc-600 hover:text-primary hover:border-primary transition-colors duration-200 disabled:border-zinc-200 disabled:text-zinc-200 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default RoundedButtonIcon;
