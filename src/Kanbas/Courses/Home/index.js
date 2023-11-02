import ModuleList from "../Modules/ModuleList";
import CourseStatus from "./status";

function Home() {
  return (
    <div className="row flex-nowrap">
      <div className="col">
        <ModuleList />
      </div>
      <div className="col-auto d-none d-xl-block wd-course-status px-4">
        <CourseStatus />
      </div>
    </div>
  );
}

export default Home;
