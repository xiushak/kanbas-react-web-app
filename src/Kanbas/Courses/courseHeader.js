import { useParams, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa6";

function CourseHeader({ course }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/").splice(4);

  return (
    <div className="d-none d-md-block">
      <div className="row flex-nowrap align-items-center">
        <div className="col-auto">
          <h1>
            <GiHamburgerMenu className="wd-red align-top" />
          </h1>
        </div>
        <div style={{ "--bs-breadcrumb-divider": "'>'" }} className="col">
          <Breadcrumb className="text-nowrap wd-breadcrumb">
            <Breadcrumb.Item
              href={`#/Kanbas/Courses/${courseId}`}
              className="text-truncate"
            >
              <span className="wd-red">{course.name}</span>
            </Breadcrumb.Item>
            {path.map((item, index) => (
              <Breadcrumb.Item
                key={index}
                href={`#/Kanbas/Courses/${courseId}/${path
                  .slice(0, index + 1)
                  .join("/")}`}
                className="text-truncate"
                active={index === path.length - 1}
              >
                <span className={index < path.length - 1 && "wd-red"}>
                  {item.replace("+", " ")}
                </span>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary">
            <FaGlasses className="mb-1" /> Student View
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CourseHeader;
