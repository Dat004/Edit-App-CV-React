import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
// import { EditorContent, useEditor } from "@tiptap/react";
// import Underline from "@tiptap/extension-underline";
// import StarterKit from "@tiptap/starter-kit";

import {
  BoldTextFormatIcon,
  UnderlineTextFormatIcon,
  ItalicTextFormatIcon,
  ListTextFormatIcon,
} from "../../icons";
import ToolBar from "./ToolBar";
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

  const textFieldClasses = classNames(
    "text-[100%] group-hover/field:bg-field",
    {
      [className]: className,
      "!outline-1 !outline-solid !outline-field":
        isFocus || (isActive && simpleFocus),
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
        {...props}
      ></div>
    </section>
  );
}

export default TextField;
