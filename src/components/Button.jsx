import classNames from "classnames";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      icon,
      className,
      container = false,
      outline = false,
      rounded = false,
      disabled = false,
      leftIcon = false,
      rightIcon = false,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      "flex items-center gap-x-[6px] text-white-text select-none",
      {
        [className]: className,
        "bg-primary hover:bg-second rounded-[999px]": container,
        "rounded-[50%]": rounded,
        "opacity-40": disabled,
      }
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <i>{icon}</i>}
        {children}
        {rightIcon && <i>{icon}</i>}
      </button>
    );
  }
);

export default Button;
