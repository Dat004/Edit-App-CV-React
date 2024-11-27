import Container from "../../../../../components/Container";
import Menu from ".";

function FontMenu() {
  return (
    <>
      <Menu className="!rounded-none" isSlide title="Phông chữ">
        <div className="flex">
          <ul className="mx-[12px] min-w-[175px] mb-[26px]">
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Arimo
            </li>
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Roboto
            </li>
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Helvetica
            </li>
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Noto Sans
            </li>
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Noto Serif
            </li>
            <li className="text-[13px] text-white-text hover:text-second-text py-[4px] cursor-pointer">
              Source Sans Pro
            </li>
          </ul>
        </div>
      </Menu>
      <div className="relative mb-[8px] border-t border-solid border-separator">
        <Container title="Cỡ chữ">
          <div className="mt-[32px] px-[8px] flex items-center">
            <div className="flex flex-grow flex-shrink items-center mr-[8px]">
              <input
                type="radio"
                className="size-[16px] appearance-none bg-white rounded-full mr-[8px]"
                name="small-text"
                id="small"
              />
              <label
                className="text-[12px] text-white-text cursor-pointer hover:text-second-text"
                htmlFor="small"
              >
                Nhỏ
              </label>
            </div>
            <div className="flex flex-grow flex-shrink items-center mr-[8px]">
              <input
                type="radio"
                className="size-[16px] appearance-none bg-white rounded-full mr-[8px]"
                name="medium-text"
                id="medium"
              />
              <label
                className="text-[12px] text-white-text cursor-pointer hover:text-second-text"
                htmlFor="medium"
              >
                Vừa
              </label>
            </div>
            <div className="flex flex-grow flex-shrink items-center mr-[8px]">
              <input
                type="radio"
                className="size-[16px] appearance-none bg-white rounded-full mr-[8px]"
                name="large-text"
                id="large"
              />
              <label
                className="text-[12px] text-white-text cursor-pointer hover:text-second-text"
                htmlFor="large"
              >
                Lớn
              </label>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FontMenu;
