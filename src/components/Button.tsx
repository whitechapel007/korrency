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
      primary: "bg-primary text-white  font-gilroy-regular",
      secondary: "",
    },
    size: { sm: "py-2 text-sm px-1", md: "py-3 px-2 text-md", lg: "" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});
export default Button;
