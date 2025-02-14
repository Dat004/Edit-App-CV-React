import { useState } from "react";
import TextFieldWrapper from "../../../../components/TextField/TextFieldWrapper";
import TextField from "../../../../components/TextField";

function WorkStation() {
  const [profile, setNameProfile] = useState("Nguyen Van A - Frontend Development");

  const handleChangeNameProfile = (e) => {
    setNameProfile(e.target.value);
  };

  return (
    <section className="w-full">
      <section className="relative">
        <section className="origin-center">
          <section className="pt-[4px] relative">
            <section className="w-full h-full">
              <section className="w-[400px] mt-[70px] mx-auto mb-[48px]">
                <input
                  className="py-[2px] text-[18px] text-center text-white-text font-medium w-full"
                  onChange={handleChangeNameProfile}
                  placeholder="Đặt tên hồ sơ"
                  value={profile}
                  name="profile"
                  id="profile"
                  type="text"
                />
              </section>
              <section>
                <section className="relative">
                  {/* Start Pages */}
                  <section className="bg-white w-[595px] p-[22px] mt-[20px] mx-auto">
                    <TextFieldWrapper secondTitle>
                      <TextField placeholder="Vị trí ứng tuyển" simpleFocus />
                    </TextFieldWrapper>
                  </section>
                  {/* End Page */}
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default WorkStation;
