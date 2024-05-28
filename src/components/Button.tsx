import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { ComponentProps, ComponentType, ReactNode, SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SVGComponent = ComponentType<SVGAttributes<SVGComponent>>;
type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  } & {
    leadingIcon?: SVGComponent;
    trailingIcon?: SVGComponent;
  };

function Button({
  children,
  variant,
  size,
  className,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(clsx(buttonVariants({ variant, size, className })))}
      {...rest}
    >
      {LeadingIcon && <LeadingIcon />}
      {children}
      {TrailingIcon && <TrailingIcon />}
    </button>
  );
}

const buttonVariants = cva("rounded-md shadow-sm font-semibold", {
  variants: {
    variant: {
      primary: "border-black  px-2 py-1",
      secondary: "",
    },
    size: { sm: "py-2 text-sm py-0", md: "", lg: "" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});
export default Button;
