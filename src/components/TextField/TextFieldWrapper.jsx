import { useEffect, useState } from "react";
import classNames from "classnames";

import { titleTypeDataConfig } from "../../config/dataConfig";
import TextField from ".";

function TextFieldWrapper({
  className,
  type = "",
  theme = "",
  placeholder = "",
  mainTitle = false, // Used to enter the username text box
  secondTitle = false, // Used to enter the title section
}) {
  let Comp;
  const [titleTypeData, setTitleTypeData] = useState({});

  useEffect(() => {
    // Set new title type data
    setTitleTypeData(titleTypeDataConfig.find((data) => data.type === type));
  }, [type]);

  const textFieldWrapperClasses = classNames("", {
    [className]: className,
    // Styles for default text box
    "group/field text-[10px] leading-[1.6em]": !mainTitle && !secondTitle,

    // Styles for all main titles
    "relative font-normal border-b-[2px] border-solid border-transparent mb-[-2px]":
      mainTitle,
    "leading-[1em]":
      [
        "chicken",
        "basic",
        "rabbit",
        "crisp",
        "cascade",
        "iconic",
        "vibes",
        "simple",
        "concept",
        "enfold",
        "decker",
      ].includes(theme) && mainTitle,
    "leading-[2.2rem]":
      ["newsweek", "bubbles", "message"].includes(theme) && mainTitle,
    "text-[28px]":
      [
        "chicken",
        "rabbit",
        "crisp",
        "iconic",
        "vibes",
        "simple",
        "concept",
        "newsweek",
        "decker",
        "bubbles",
        "message",
      ].includes(theme) && mainTitle,
    "text-[2rem]": ["basic"].includes(theme) && mainTitle,
    "text-[1.4rem]": ["cascade", "enfold"].includes(theme) && mainTitle,
    "text-white-text":
      ["rabbit", "cascade", "enfold", "newsweek"].includes(theme) && mainTitle,
    "text-[#343434]": ["bubbles", "message"].includes(theme) && mainTitle,

    // Styles for all titles
    "leading-[1.4em] font-normal": secondTitle,
    "border-b border-solid border-[#d5d6d6]":
      [
        "chicken",
        "basic",
        "crisp",
        "cascade",
        "iconic",
        "vibes",
        "simple",
        "enfold",
      ].includes(theme) && secondTitle,
    "border-b border-solid": ["newsweek"].includes(theme) && secondTitle,
    "text-[0.8rem]":
      [
        "chicken",
        "rabbit",
        "crisp",
        "cascade",
        "iconic",
        "vibes",
        "simple",
        "concept",
        "enfold",
        "decker",
        "bubbles",
        "message",
      ].includes(theme) && secondTitle,
    "text-[1rem]": ["basic"].includes(theme) && secondTitle,
    "text-[0.9rem]": ["newsweek"].includes(theme) && secondTitle,
    "mt-[8px] mb-[10px]":
      ["chicken", "basic", "rabbit", "iconic", "concept"].includes(theme) &&
      secondTitle,
    "my-[12px]":
      [
        "crisp",
        "cascade",
        "vibes",
        "simple",
        "enfold",
        "newsweek",
        "bubbles",
        "message",
      ].includes(theme) && secondTitle,
    "p-0": ["chicken", "rabbit", "concept"].includes(theme) && secondTitle,
    "pb-[4px]": ["basic", "enfold"].includes(theme) && secondTitle,
    "py-[4px] px-[8px]": ["decker"].includes(theme) && secondTitle,
    "pb-[4px] pl-[26px]":
      ["crisp", "cascade", "iconic", "vibes"].includes(theme) && secondTitle,
    "pb-[2px] pl-[26px]": ["newsweek"].includes(theme) && secondTitle,
    "py-[3px] pl-[26px]": ["bubbles", "message"].includes(theme) && secondTitle,
    "text-center": ["basic"].includes(theme) && secondTitle,
    uppercase: ["rabbit", "concept", "bubbles"].includes(theme) && secondTitle,
    relative:
      [
        "basic",
        "rabbit",
        "crisp",
        "cascade",
        "iconic",
        "vibes",
        "simple",
        "concept",
        "enfold",
        "newsweek",
        "decker",
        "bubbles",
        "message",
      ] && secondTitle,
    "top-[1px]": ["decker"].includes(theme) && secondTitle,
    "bg-current":
      ["decker", "bubbles", "message"].includes(theme) && secondTitle,
    "rounded-[14px]": ["bubbles", "message"].includes(theme) && secondTitle,
  });

  const itemClasses = classNames(
    "flex items-center justify-center size-[20px] bg-current",
    {
      "absolute top-[-1px] left-[0] rounded-0": [
        "crisp",
        "cascade",
        "iconic",
        "vibes",
        "newsweek",
      ].includes(theme),
      "absolute top-0 left-[-33px]": ["rabbit", "concept"].includes(theme),
      "rounded-full": ["crisp", "cascade", "concept"].includes(theme),
      "rounded-[2px] rotate-45": theme === "rabbit",
    }
  );

  const itemIconClasses = classNames("w-[12px] object-cover", {
    "rotate-[-45deg]": ["rabbit"].includes(theme),
    "absolute top-[6px] left-[8px]": ["bubbles", "message"].includes(theme),
  });

  const textFieldClasses = classNames({
    "text-primary-text": !mainTitle && !secondTitle,
    "pb-[2px] pt-[3px]": mainTitle,
    "text-white-text font-normal":
      ["decker", "bubbles", "message"].includes(theme) && secondTitle,
    "font-bold":
      !["decker", "bubbles", "message"].includes(theme) && secondTitle,
  });

  if (mainTitle) {
    Comp = "h2";
  } else if (secondTitle) {
    Comp = "h3";
  } else {
    Comp = "section";
  }

  return (
    <>
      {secondTitle && (
        <>
          {["decker"].includes(theme) ? (
            <section className="flex mt-[8px] mb-[10px] border-b-[2px] border-solid">
              <Comp className={textFieldWrapperClasses}>
                {[
                  "rabbit",
                  "crisp",
                  "cascade",
                  "iconic",
                  "vibes",
                  "concept",
                  "newsweek",
                ].includes(theme) && (
                  <span className={itemClasses}>
                    <img
                      className={itemIconClasses}
                      src={titleTypeData?.icon}
                    />
                  </span>
                )}
                <TextField
                  className={textFieldClasses}
                  placeholder={placeholder}
                />
              </Comp>
            </section>
          ) : (
            <Comp className={textFieldWrapperClasses}>
              {[
                "rabbit",
                "crisp",
                "cascade",
                "iconic",
                "vibes",
                "concept",
                "newsweek",
              ].includes(theme) && (
                <span className={itemClasses}>
                  <img
                    className={itemIconClasses}
                    src={titleTypeData?.icon}
                  />
                </span>
              )}
              {["bubbles", "message"].includes(theme) && (
                <img
                  className={itemIconClasses}
                  src={titleTypeData?.icon}
                />
              )}
              <TextField
                className={textFieldClasses}
                placeholder={placeholder}
              />
            </Comp>
          )}
        </>
      )}
      {mainTitle && (
        <Comp className={textFieldWrapperClasses}>
          <TextField className={textFieldClasses} placeholder={placeholder} />
        </Comp>
      )}
      {!mainTitle && !secondTitle && (
        <Comp className={textFieldWrapperClasses}>
          <TextField className={textFieldClasses} placeholder={placeholder} />
        </Comp>
      )}
    </>
  );
}

export default TextFieldWrapper;
