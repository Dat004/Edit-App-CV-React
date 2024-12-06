import classNames from "classnames";

function TextFieldWrapper({
  children,
  className,
  mainTitle = false,
  secondTitle = false,
}) {
  let Comp;

  const textFieldWrapperClasses = classNames("", {
    [className]: className,
    "border-b-[2px] border-transparent mb-[-2px] text-[28px] leading-[28px] font-bold":
      mainTitle,
    "pt-[0.3em] pb-[0.2em] font-normal text-[0.8rem] leading-[1.42em] my-[12px] border-b-[1px] border-solid":
      secondTitle,
    "group/field text-[10px] leading-[1.6em]": !mainTitle && !secondTitle,
  });

  if (mainTitle) {
    Comp = "h2";
  } else if (secondTitle) {
    Comp = "h3";
  } else {
    Comp = "section";
  }

  return <Comp className={textFieldWrapperClasses}>{children}</Comp>;
}

export default TextFieldWrapper;
