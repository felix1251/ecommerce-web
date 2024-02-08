interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  capitalize?: boolean;
}

const conditionalVariant = (variant: string): string => {
  switch (variant) {
    case "primary":
      return "bg-[#23A6F0] text-white";
    case "ghost":
      return "bg-white border text-[#23A6F0] border-[#23A6F0]";
    default:
      return "bg-[#23A6F0] text-white";
  }
};

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = "primary",
  capitalize = true,
  ...props
}) => {
  return (
    <button
      className={`px-6 py-2.5 text-sm font-medium rounded-md w-fit ${
        capitalize ? "uppercase" : ""
      } ${conditionalVariant(variant)}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
