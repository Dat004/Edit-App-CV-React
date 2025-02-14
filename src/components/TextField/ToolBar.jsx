import { useRef } from "react";

import { formatTextConfig } from "../../config/dataConfig";
import Button from "../Button";

function ToolBar({ isActive = false, handleFormatText = () => {} }) {
  const toolbarRef = useRef(null);
  // const [formattedTagList, setFormattedTagList] = useState([]);

  const handleSetFormattedTag = (formatter) => {
    // const formatted = formattedTagList.includes(formatter);

    // if (formatted) {
    //   const indexFormatted = formattedTagList.findIndex(
    //     (formatted) => formatted === formatter
    //   );

    //   setFormattedTagList([
    //     ...formattedTagList.filter((_, index) => index !== indexFormatted),
    //   ]);
    // } else {
    //   setFormattedTagList((state) => [...state, formatter]);
    // }

    handleFormatText(formatter);
  };

  return (
    <>
      {isActive && (
        <div
          ref={toolbarRef}
          onMouseDown={(e) => e.preventDefault()}
          className="absolute rounded-tl-[2px] rounded-tr-[2px] bg-toolbar bottom-[100%] right-0"
        >
          <div className="flex items-center p-[2px]">
            {formatTextConfig.map((type) => {
              const Icon = type.icon;

              return (
                <Button
                  key={type.id}
                  className="rounded-tr-[3px] !items-baseline justify-center py-[2px] mx-[1px] size-[18px] hover:text-white-text text-items-text"
                  onClick={() => handleSetFormattedTag(type.value)}
                >
                  <Icon />
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ToolBar;
