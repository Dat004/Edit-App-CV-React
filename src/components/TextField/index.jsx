import { useState, useRef } from "react";
import classNames from "classnames";

import ToolBar from "./ToolBar";

function TextField({
  className,
  isFocus = false,
  placeholder = "Enter",
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const textFieldRef = useRef(null);

  const textFieldClasses = classNames(
    "text-[100%] group-hover/field:bg-field focus:text-primary-text",
    {
      [className]: className,
      "!outline-1 !outline-solid !outline-field": isFocus || isActive,
      "bg-white mx-[-6px] px-[6px]": isActive,
      "mx-[-3%] px-[3%]": !isActive,
    }
  );

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleFormatText = (formatter) => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const contents = range.toString();

      document.execCommand(formatter, false, contents);
    }
  };

  const handleInput = (e) => {
    // Check br tag on delete all contents
    if (e.target.innerHTML === "<br>") e.target.innerHTML = "";
  };

  return (
    <section onFocus={handleFocus} onBlur={handleBlur} className="relative">
      <ToolBar handleFormatText={handleFormatText} isActive={isActive} />
      <div
        tabIndex={-1}
        className={textFieldClasses}
        placeholder={placeholder}
        ref={textFieldRef}
        spellCheck="false"
        contentEditable
        aria-multiline
        role="textbox"
        onInput={handleInput}
        {...props}
      ></div>
    </section>
  );
}

export default TextField;
