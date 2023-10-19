import React from "react";
import {
  FaGripVertical,
  FaCircleCheck,
  FaEllipsisVertical,
  FaPlus,
} from "react-icons/fa6";

function ModuleItem({ module }) {
  return (
    <div className="mt-4">
      <ul className="wd-list">
        {/* header item */}
        <li className="wd-list-header">
          <div className="row flex-nowrap">
            <div className="col-auto wd-align-items-center">
              <FaGripVertical className="me-3 mb-1" />
            </div>
            <div className="col">
              <h3>{module.name}</h3>
              {module.description}
            </div>
            <div className="col-auto wd-align-items-center">
              <FaCircleCheck className="mx-2 mb-1" style={{ color: "green" }} />
              <FaPlus className="mx-2 mb-1" />
              <FaEllipsisVertical className="mx-2 mb-1" />
            </div>
          </div>
        </li>
        {/* the rest of the lesson */}
        {module.lessons &&
          module.lessons.map((lesson, index) => (
            <li className="wd-list-item" key={index}>
              <div className="row flex-nowrap">
                <div className="col-auto wd-align-items-center">
                  <FaGripVertical className="me-3 mb-1" />
                </div>
                <div className="col">
                  <h3>{lesson.name}</h3>
                  {lesson.description}
                </div>
                <div className="col-auto wd-align-items-center">
                  <FaCircleCheck
                    className="mx-2 mb-1"
                    style={{ color: "green" }}
                  />
                  <FaEllipsisVertical className="mx-2 mb-1" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleItem;
