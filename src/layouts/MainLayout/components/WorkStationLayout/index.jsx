import { useState } from "react";

import { SimpleTemplate } from "../../../../components/Templates";

function WorkStation() {
  const [title, setTitle] = useState("Nguyen Van A - Frontend Development");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
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
                  onChange={handleChangeTitle}
                  placeholder="Đặt tên hồ sơ"
                  value={title}
                  name="title"
                  type="text"
                  id="title"
                />
              </section>
              <section>
                <section className="relative">
                  {/* Start Pages */}
                  <section className="bg-white w-[595px] p-[22px] mt-[20px] mx-auto">
                    <SimpleTemplate />
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
