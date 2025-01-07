import { ButtonHTMLAttributes, ReactNode } from "react";
import SpinnerLoader from "../loader/SpinnerLoader";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const CustomButton = ({
  children,
  className,
  isLoading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Default styles
        "bg-primary px-8 py-2.5 rounded-lg cursor-pointer",

        // Core styles
        "font-medium text-base text-text-300",
        "transition-transform duration-300 ease-in-out", // Smooth scaling animation
        "flex items-center justify-center",

        // State styles
        !isLoading && !disabled && "hover:scale-105 active:scale-95", // Scale up on hover, scale down on active
        isLoading && "opacity-70 cursor-wait",
        disabled && "opacity-50 cursor-not-allowed",

        // Custom styles passed as props (will properly merge with defaults)
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <SpinnerLoader width={25} height={25} color="#fff" />
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
