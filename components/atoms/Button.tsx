import { Spinner } from "@/atoms";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  capitalize?: boolean;
  loading?: boolean;
}

const conditionalVariant = (variant: string): string => {
  const defaultVariant = "bg-[#23A6F0] text-white disabled:bg-gray-300";

  switch (variant) {
    case "primary":
      return defaultVariant;
    case "ghost":
      return "bg-white border text-[#23A6F0] border-[#23A6F0] disabled:border-gray-300 disabled:text-gray-300";
    default:
      return defaultVariant;
  }
};

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = "primary",
  capitalize = true,
  loading = false,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`flex gap-2 px-6 py-2.5 text-sm font-semibold rounded-md w-fit ${
        capitalize ? "uppercase" : ""
      } ${conditionalVariant(variant)}`}
      {...props}
    >
      <span>{children}</span>
      {loading && <Spinner />}
    </button>
  );
};

export default Button;
