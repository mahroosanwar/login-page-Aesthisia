import React from "react";

const variantClasses = {
  h1: "font-normal text-5xl sm:text-[38px] md:text-[44px]",
  h2: "font-bold sm:text-3xl md:text-[32px] text-[34px]",
  h3: "font-medium text-base",
  h4: "font-normal text-sm",
  h5: "font-normal text-xs",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
