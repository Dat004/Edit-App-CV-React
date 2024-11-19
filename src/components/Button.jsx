import classNames from "classnames";

function Button({
  children,
  className,
  container = false,
  outline = false,
  rounded = false,
  disabled = false,
  ...props
}) {
  const buttonClasses = classNames("text-white-text", {
    [className]: className,
    "bg-primary hover:bg-second rounded-[999px]": container,
    "rounded-[50%]": rounded,
    "opacity-40": disabled,
  });

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
