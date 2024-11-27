import {
  colorDataConfig,
  backgroundDataConfig,
} from "../../../../../config/dataConfig";
import Menu from ".";

function BackgroundMenu() {
  return (
    <div className="flex items-start w-[640px]">
      <div className="w-[50%] border-r border-solid border-[#3d3d3d] flex-grow-0 flex-shrink-0">
        <Menu isSlide title="Màu chủ đạo">
          <div className="flex items-start overflow-hidden">
            {colorDataConfig?.map((item, index) => (
              <ul
                key={index}
                className="flex items-center flex-wrap px-[12px] w-full flex-shrink-0"
              >
                {item.map((value) => (
                  <div
                    className="flex items-center justify-center my-[10px] w-[25%] flex-grow-0 flex-shrink-0"
                    key={value.id}
                  >
                    <li className="flex items-center outline-2 outline outline-transparent hover:outline-items transition-all rounded-[50%] size-[34px] justify-center cursor-pointer">
                      <span
                        style={{ background: value.code }}
                        className="size-[30px] rounded-full"
                      ></span>
                    </li>
                  </div>
                ))}
              </ul>
            ))}
          </div>
        </Menu>
      </div>
      <Menu
        isSlide
        className="w-[50%] flex-grow-0 flex-shrink-0"
        title="Họa tiết nền"
      >
        <div className="flex items-start overflow-x-hidden">
          {backgroundDataConfig?.map((item, index) => (
            <ul
              key={index}
              className="flex items-center flex-wrap w-full pt-[8px] px-[12px] flex-shrink-0"
            >
              {item.map((value) => (
                <li
                  key={value.id}
                  className="w-full p-[2px] outline-2 outline outline-transparent transition-all hover:outline-items rounded-[6px] flex-grow flex-shrink-0 mb-[16px] cursor-pointer"
                >
                  <span
                    className="block h-[32px] w-full rounded-[5px] bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${value.value})` }}
                  ></span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Menu>
    </div>
  );
}

export default BackgroundMenu;
