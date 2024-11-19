import { useState, useRef } from "react";
import classNames from "classnames";

import {
  BoldTextFormatIcon,
  UnderlineTextFormatIcon,
  ItalicTextFormatIcon,
  ListTextFormatIcon,
} from "../icons";
import Button from "./Button";

function TextField({ className, isFocus = false, placeholder = "Enter" }) {
  const [isActive, setIsActive] = useState(false);
  const textFieldRef = useRef(null);
  const toolbarRef = useRef(null);

  const textFieldClasses = classNames(
    "px-[5px] w-full border-[2px] border-solid border-transparent hover:bg-field",
    {
      [className]: className,
      "border-field": isFocus,
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
        className={textFieldClasses}
        ref={textFieldRef}
        contentEditable
        aria-multiline
        role="textbox"
        aria-placeholder={placeholder}
      ></div>
    </section>
  );
}

export default TextField;
