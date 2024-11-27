import {
  UploadIcon,
  CropImageIcon,
  ChangeSizeImageIcon,
  HideIcon,
  DisplayIcon,
} from "../../../../../icons";
import Container from "../../../../../components/Container";
import Button from "../../../../../components/Button";

function ProfilePhotoMenu() {
  return (
    <Container className="w-[200px]" title="Ảnh hồ sơ">
      <div className="mt-[32px]">
        <ul>
          <Button className="text-white-text !gap-x-[8px] py-[6px] w-full hover:text-second-text">
            <UploadIcon />
            <span className="text-[13px]">Tải ảnh lên</span>
          </Button>
          <Button className="text-white-text !gap-x-[8px] py-[6px] w-full hover:text-second-text">
            <CropImageIcon />
            <span className="text-[13px]">Cắt ảnh</span>
          </Button>
          <Button className="text-white-text !gap-x-[8px] py-[6px] w-full hover:text-second-text">
            <ChangeSizeImageIcon />
            <span className="text-[13px]">Đổi kích cỡ</span>
          </Button>
          <Button className="text-white-text !gap-x-[8px] py-[6px] w-full hover:text-second-text">
            <HideIcon />
            <span className="text-[13px]">Ẩn ảnh</span>
          </Button>
        </ul>
      </div>
    </Container>
  );
}

export default ProfilePhotoMenu;
