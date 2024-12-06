import { useState, useRef } from "react";
import classNames from "classnames";

import {
  BoldTextFormatIcon,
  UnderlineTextFormatIcon,
  ItalicTextFormatIcon,
  ListTextFormatIcon,
} from "../../icons";
import Button from "../Button";

function TextField({
  className,
  isFocus = false,
  simpleFocus = false,
  placeholder = "Enter",
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const textFieldRef = useRef(null);
  const toolbarRef = useRef(null);

  const textFieldClasses = classNames(
    "text-[100%] w-full border-[1px] border-solid border-transparent group-hover/field:bg-field",
    {
      [className]: className,
      "!border-field": isFocus || (isActive && simpleFocus),
      "bg-white px-[6px] mx-[-6px]": isActive,
      "px-[3%] mx-[-3%]": !isActive,
    }
  );

  const handleFormatText = () => {};

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <section onFocus={handleFocus} onBlur={handleBlur} className="relative">
      {isActive && (
        <div
          ref={toolbarRef}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute p-[5px] rounded-tr-[3px] rounded-tl-[3px] bg-toolbar bottom-[100%] right-[calc(0%+5px)]"
        >
          <div className="flex items-center">
            <Button
              className="px-[2px] hover:text-white-text text-items-text"
              onClick={handleFormatText}
            >
              <BoldTextFormatIcon />
            </Button>
            <Button
              className="px-[2px] hover:text-white-text text-items-text"
              onClick={handleFormatText}
            >
              <UnderlineTextFormatIcon />
            </Button>
            <Button
              className="px-[2px] hover:text-white-text text-items-text"
              onClick={handleFormatText}
            >
              <ItalicTextFormatIcon />
            </Button>
            <Button
              className="px-[2px] hover:text-white-text text-items-text"
              onClick={handleFormatText}
            >
              <ListTextFormatIcon />
            </Button>
          </div>
        </div>
      )}
      <div
        tabIndex={-1}
        className={textFieldClasses}
        placeholder={placeholder}
        ref={textFieldRef}
        spellCheck="false"
        contentEditable
        aria-multiline
        role="textbox"
        {...props}
      ></div>
    </section>
  );
}

export default TextField;
