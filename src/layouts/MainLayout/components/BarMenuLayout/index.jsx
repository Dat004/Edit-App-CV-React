import {
  FontFormatTextIcon,
  BackgroundIcon,
  TemplateIcon,
  PersonIcon,
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
} from "../../../../icons";
import Button from "../../../../components/Button";

function BarMenuLayout() {
  return (
    <section className="fixed flex items-center justify-center h-[46px] mt-[16px] top-0 left-0 right-[30vw] hht:right-0 z-[999]">
      <div className="flex items-center h-full rounded-full bg-[#425061]">
        <section className="flex items-center pl-[14px]">
          <section className="px-[12px]">
            <Button
              className="text-[14px] hover:text-second-text"
              leftIcon
              icon={<FontFormatTextIcon />}
            >
              <span className="hhp:hidden">Phông chữ</span>
            </Button>
          </section>
          <section className="px-[12px]">
            <Button
              className="text-[14px] hover:text-second-text"
              leftIcon
              icon={<BackgroundIcon />}
            >
              <span className="hhp:hidden">Màu sắc</span>
            </Button>
          </section>
          <section className="px-[12px]">
            <Button
              className="text-[14px] hover:text-second-text"
              leftIcon
              icon={<TemplateIcon />}
            >
              <span className="hhp:hidden">Mẫu CV</span>
            </Button>
          </section>
          <section className="px-[12px]">
            <Button
              className="text-[14px] hover:text-second-text"
              leftIcon
              icon={<PersonIcon />}
            >
              <span className="hhp:hidden">Ảnh hồ sơ</span>
            </Button>
          </section>
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
