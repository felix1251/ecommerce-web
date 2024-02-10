import { Spinner } from "@/atoms";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  capitalize?: boolean;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = "primary",
  capitalize = true,
  loading = false,
  size = "md",
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`flex gap-2 px-6 py-2.5 text-sm font-semibold rounded-md w-fit ${
        capitalize ? "uppercase" : ""
      } ${conditionalVariant(variant)} ${conditionalSize(size)}`}
      {...props}
    >
      <span>{children}</span>
      {loading && <Spinner />}
    </button>
  );
};

export default Button;

// conditional styles
const conditionalVariant = (variant: string): string => {
  const defaultVariant = "bg-primary text-white disabled:bg-gray-300";

  switch (variant) {
    case "primary":
      return defaultVariant;
    case "ghost":
      return "bg-white border text-primary border-primary disabled:border-gray-300 disabled:text-gray-300";
    default:
      return defaultVariant;
  }
};

const conditionalSize = (size: string): string => {
  const defaultVariant = "px-6 py-2.5";

  switch (size) {
    case "md":
      return defaultVariant;
    case "sm":
      return "px-5 py-2";
    case "lg":
      return "px-5 py-3 md:px-8 ,d:py-4";
    default:
      return defaultVariant;
  }
};
