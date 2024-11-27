import classNames from "classnames";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Button from "../../../../../components/Button";
import Container from "../../../../../components/Container";

function Menu({ children, className, isSlide = false, title = "" }) {
  const menuClasses = classNames("relative", {
    [className]: className,
  });

  return (
    <Container className={menuClasses} title={title}>
      {isSlide && (
        <>
          <div className="absolute translate-y-[-50%] top-[calc(50%+21px)] left-[16px]">
            <Button
              className="flex items-center justify-center bg-white hover:opacity-100 size-[20px] opacity-75"
              rounded
            >
              <MdArrowBackIos className="text-[12px] ml-[4px] text-primary-text" />
            </Button>
          </div>
          <div className="absolute translate-y-[-50%] top-[calc(50%+21px)] right-[16px]">
            <Button
              className="flex items-center justify-center bg-white hover:opacity-100 size-[20px] opacity-75"
              rounded
            >
              <MdArrowForwardIos className="text-[12px] text-primary-text" />
            </Button>
          </div>
        </>
      )}
      <div className="mt-[42px] mx-[32px]">{children}</div>
    </Container>
  );
}

export default Menu;
