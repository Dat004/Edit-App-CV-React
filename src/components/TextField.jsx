import classNames from "classnames";

function TextField({ className, placeholder = "Enter" }) {
  const textFieldClasses = classNames("px-[5px]", {
    [className]: className,
  });

  return (
    <div
      className={textFieldClasses}
      contentEditable
      aria-multiline
      role="textbox"
      aria-placeholder={placeholder}
    ></div>
  );
}

export default TextField;
