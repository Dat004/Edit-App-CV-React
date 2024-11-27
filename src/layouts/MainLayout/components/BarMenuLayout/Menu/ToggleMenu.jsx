import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import Button from "../../../../../components/Button";

function ToggleMenu({
  className,
  id = 0,
  CustomButton,
  CustomMenu,
  Menu,
  Icon,
  label = "",
}) {
  const menuRef = useRef();
  const btnRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const idBtn = +btnRef.current.dataset.id;

      if (
        parseInt(event.target.closest('[role="button"]')?.dataset.id) !== idBtn
      ) {
        if (menuRef.current.contains(event.target)) {
          return;
        }

        setShowMenu(false);
      }
    };

    if (menuRef.current) {
      if (menuRef.current.offsetWidth >= 768) {
        menuRef.current.style.transform = `translateX(${
          0 -
          menuRef.current.getBoundingClientRect().left +
          btnRef.current.getBoundingClientRect().height
        }px)`;
      }
    }

    if (showMenu) document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const menuContainerClasses = classNames("relative", {
    [className]: className,
  });

  const btnProps = {
    "aria-expanded": showMenu,
    "aria-haspopup": true,
    "data-id": id,
    role: "button",
  };

  const handleToggleMenu = () => {
    setShowMenu((state) => !state);
  };

  return (
    <div className={menuContainerClasses}>
      {!!CustomButton ? (
        <CustomButton ref={btnRef} onClick={handleToggleMenu} {...btnProps} />
      ) : (
        <Button
          ref={btnRef}
          leftIcon
          className="text-[14px] hover:text-second-text"
          onClick={handleToggleMenu}
          icon={Icon}
          {...btnProps}
        >
          <span className="hhp:hidden">{label}</span>
        </Button>
      )}
      {showMenu && (
        <>
          {!!CustomMenu ? (
            <CustomMenu />
          ) : (
            <div
              ref={menuRef}
              className="absolute top-[calc(100%+20px)] bg-[#425061] rounded-[8px]"
            >
              {Menu}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ToggleMenu;
