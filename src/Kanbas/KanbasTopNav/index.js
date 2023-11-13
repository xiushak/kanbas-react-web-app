import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown, FaGlasses } from "react-icons/fa6";

import db from "../Database";

function KanbasNavigation() {
  const { pathname } = useLocation();
  const path = pathname.split("/").splice(3);
  const course = db.courses.find((course) => course._id === path[0]);
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "History",
    "Studio",
    "Comons",
    "Help",
  ];
  const currentPage = links.find((link) => pathname.includes(link));
  const headerText =
    currentPage === "Courses" && course ? course.name + " " + path[1] : currentPage;
  return (
    <div className="wd-navigation-topbar-container d-sm-block d-md-none">
      <div className="wd-navigation-topbar">
        <div className="row flex-nowrap text-center px-2 align-items-center">
          <div className="col-auto text-white">
            <Button variant="none">
              <GiHamburgerMenu className="mb-1 text-white" />
            </Button>
          </div>
          <div className="col text-white">
            <h3>{headerText}</h3>
          </div>
          {currentPage === "Courses" && (
            <div className="col-auto text-white">
              <Button variant="none">
                <FaGlasses className="mb-1 text-white" />
              </Button>
              <Button variant="none">
                <FaCaretDown className="mb-1 text-white" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default KanbasNavigation;
