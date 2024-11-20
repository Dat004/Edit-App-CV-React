import classNames from "classnames";

function Button({
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
}) {
  const buttonClasses = classNames(
    "flex items-center gap-x-[6px] text-white-text",
    {
      [className]: className,
      "bg-primary hover:bg-second rounded-[999px]": container,
      "rounded-[50%]": rounded,
      "opacity-40": disabled,
    }
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftIcon && icon}
      {children}
      {rightIcon && icon}
    </button>
  );
}

export default Button;
