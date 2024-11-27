import { templateDataConfig } from "../../../../../config/dataConfig";
import Menu from ".";

function TemplatesMenu() {
  return (
    <Menu className="" title="Mẫu CV" isSlide>
      <div className="flex items-center mt-[-14px] w-[900px] h-[240px]">
        <div className="flex items-start justify-center w-[90%] py-[8px] mx-auto overflow-x-hidden">
          {templateDataConfig.map((item) => (
            <section
              key={item.id}
              className="w-[25%] group/template flex-grow-0 flex-shrink-0 px-[12px] cursor-pointer"
            >
              <div className="relative w-full p-[4px] outline-3 outline outline-transparent group-hover/template:outline-items transition-all rounded-[20px]">
                <img
                  className="rounded-[16px]"
                  src={item.value}
                  alt={item.name}
                />
              </div>
              <h3 className="capitalize text-[16px] text-white-text group-hover/template:text-second-text text-center my-[15px] font-bold transition-colors">
                {item.name}
              </h3>
            </section>
          ))}
        </div>
      </div>
    </Menu>
  );
}

export default TemplatesMenu;
