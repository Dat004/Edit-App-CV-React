import WorkStation from "./components/WorkStationLayout";
import BarMenuLayout from "./components/BarMenuLayout";

function MainLayout() {
  return (
    <div className="relative h-[100dvh]">
      <div className="absolute inset-0 bg-theme">
        <BarMenuLayout />
        <div className="w-full h-full">
          <div className="w-[70%] h-full">
            <WorkStation />
          </div>
          <div className="fixed top-0 right-0 h-full w-[30dvw]"></div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
