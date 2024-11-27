import {
  BackgroundIcon,
  DownloadIcon,
  FontFormatTextIcon,
  PersonIcon,
  TemplateIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "../../../../icons";
import ProfilePhotoMenu from "./Menu/ProfilePhotoMenu";
import Button from "../../../../components/Button";
import BackgroundMenu from "./Menu/BackgroundMenu";
import TemplatesMenu from "./Menu/TemplatesMenu";
import ToggleMenu from "./Menu/ToggleMenu";
import FontMenu from "./Menu/FontMenu";

function BarMenuLayout() {
  return (
    <section className="fixed flex items-center justify-center h-[46px] mt-[16px] top-0 left-0 right-[30vw] hht:right-0 z-[999]">
      <div className="flex items-center h-full rounded-full bg-[#425061]">
        <section className="flex items-center pl-[14px]">
          <ToggleMenu
            className="px-[12px]"
            id={0}
            label="Phông chữ"
            Menu={<FontMenu />}
            Icon={<FontFormatTextIcon />}
          />
          <ToggleMenu
            className="px-[12px]"
            id={1}
            label="Màu sắc"
            Menu={<BackgroundMenu />}
            Icon={<BackgroundIcon />}
          />
          <ToggleMenu
            className="px-[12px]"
            id={2}
            label="Mẫu CV"
            Menu={<TemplatesMenu />}
            Icon={<TemplateIcon />}
          />
          <ToggleMenu
            className="px-[12px]"
            id={3}
            label="Ảnh hồ sơ"
            Menu={<ProfilePhotoMenu />}
            Icon={<PersonIcon />}
          />
        </section>
        <section className="flex items-center pl-[12px] pr-[6px]">
          <section>
            <Button className="hover:text-second-text mr-[12px]">
              <ZoomInIcon />
            </Button>
          </section>
          <section>
            <Button className="hover:text-second-text mr-[12px]">
              <ZoomOutIcon />
            </Button>
          </section>
          <section className="pl-[12px]">
            <Button
              leftIcon
              icon={<DownloadIcon />}
              container
              className="text-[13px] py-[10px] px-[21px] leading-[1.14]"
            >
              <span>Tải xuống</span>
            </Button>
          </section>
        </section>
      </div>
    </section>
  );
}

export default BarMenuLayout;
