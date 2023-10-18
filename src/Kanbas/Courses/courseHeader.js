import { useParams, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa6";

import db from "../Database";

function CourseHeader() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const path = pathname.split("/").splice(4);

  return (
    <>
      <div className="row flex-nowrap align-items-center">
        <div className="col-auto">
          <h1>
            <GiHamburgerMenu className="wd-red align-top" />
          </h1>
        </div>
        <div className="col">
          <div
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            className="wd-breadcrumb"
          >
            <Breadcrumb>
              <Breadcrumb.Item
                href={`#/Kanbas/Courses/${courseId}`}
                className="wd-breadcrumb-item"
              >
                <span className="wd-red">{course.name}</span>
              </Breadcrumb.Item>
              {path.map((item, index) => (
                <Breadcrumb.Item
                  key={index}
                  href={`#/Kanbas/Courses/${courseId}/${path
                    .slice(0, index + 1)
                    .join("/")}`}
                  active={index === path.length - 1}
                >
                  <span className={index < path.length - 1 && "wd-red"}>
                    {item.replace("+", " ")}
                  </span>
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary">
            <FaGlasses className="mb-1" /> Student View
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CourseHeader;
