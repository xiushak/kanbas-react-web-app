import { Link, useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaInbox,
  FaRegClock,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { FaCalendarDays, FaArrowRightFromBracket } from "react-icons/fa6";
import { PiGauge } from "react-icons/pi";
import { BiSolidBook } from "react-icons/bi";

import "../style.css";

function KanbasNavigation() {
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
  const icons = [
    <FaUserCircle
      className="wd-navigation-sidebar-icon"
      style={{ color: "grey" }}
    />,
    <PiGauge className="wd-navigation-sidebar-icon" />,
    <BiSolidBook className="wd-navigation-sidebar-icon" />,
    <FaCalendarDays className="wd-navigation-sidebar-icon" />,
    <FaInbox className="wd-navigation-sidebar-icon" />,
    <FaRegClock className="wd-navigation-sidebar-icon" />,
    <FaArrowRightFromBracket className="wd-navigation-sidebar-icon" />,
    <FaRegQuestionCircle className="wd-navigation-sidebar-icon" />,
  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-navigation-sidebar-container d-none d-md-block">
      <div className="wd-navigation-sidebar">
        <img src="/images/NU_logo.png" alt="NU Logo" width="100%" />
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item navigation-sidebar-item ${
              pathname.includes(link) && "active"
            }`}
          >
            {icons[index]}
            <p>{link}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;
