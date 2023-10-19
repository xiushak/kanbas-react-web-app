import { Link, useParams } from "react-router-dom";
import {
  FaGripVertical,
  FaEllipsisVertical,
  FaPlus,
  FaRegPenToSquare,
  FaCircleCheck,
} from "react-icons/fa6";

function AssignmentGroup({ assignmentGroup }) {
  const { courseId } = useParams();
  return (
    <>
      <div class="mt-4">
        <ul class="list-group">
          <li class="wd-list-header">
            <div class="row flex-nowrap">
              <div class="col-auto wd-align-items-center">
                <FaGripVertical className="mb-1 me-3" />
              </div>
              <div class="col">
                <span class="text-black">
                  <h5>{assignmentGroup.type}</h5>
                </span>
              </div>
              <div class="col-auto wd-align-items-center">
                <span class="wd-pill px-2">
                  {assignmentGroup.percentage * 100}% of Total
                </span>
                <FaPlus className="mx-2" />
                <FaEllipsisVertical className="mx-2" />
              </div>
            </div>
          </li>
          {assignmentGroup.assignments.map((assignment) => (
            <li class="wd-list-item">
              <div class="row flex-nowrap">
                <div class="col-auto wd-align-items-center">
                  <FaGripVertical className="mb-1 me-3" />
                  <FaRegPenToSquare
                    className="mb-1"
                    style={{ color: "green" }}
                  />
                </div>
                <div class="col">
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="text-black"
                  >
                    <h5>{assignment.title}</h5>
                  </Link>
                </div>
                <div class="col-auto wd-align-items-center">
                  <FaCircleCheck className="mb-1" style={{ color: "green" }} />
                  <FaEllipsisVertical className="mx-2 mb-1" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AssignmentGroup;
