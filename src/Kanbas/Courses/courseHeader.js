import { useParams, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import db from "../Database";

function CourseHeader() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const path = pathname.split("/").splice(4);

  return (
    <>
      <div class="row flex-nowrap align-items-center">
        <div class="col-auto">
          <h1>
            <GiHamburgerMenu className="wd-red" />
          </h1>
        </div>
        <div class="col">
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
        <div class="col-auto">
          <button class="btn btn-secondary">
            <i class="fa-solid fa-glasses"></i> Student View
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CourseHeader;
