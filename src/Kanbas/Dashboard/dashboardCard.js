import { Link } from "react-router-dom";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

function DashboardCard({ course, setEditCourse, deleteCourse }) {
  return (
    <div className="col-auto">
      <Link
        key={course._id.$oid}
        to={`/Kanbas/Courses/${course._id.$oid}`}
        className="list-group-item"
      >
        <div className="card wd-card">
          <img
            src="images/crying-baby.jpg"
            className="card-img-top"
            width="100%"
            height="145px"
            alt="..."
          />
          <div className="card-text" style={{ padding: "12px", height: "40%" }}>
            <h5 style={{ color: "lightskyblue" }}>{course.name}</h5>
            <p>
              {course.number} <br />
              {course.startDate} {course.endDate}
            </p>
            <div className="text-end">
              <span
                className="wd-clickable-icon p-1"
                onClick={setEditCourse}
                title="Edit Course"
              >
                <FaRegPenToSquare className="mb-1 mx-2" />
              </span>
              <span
                className="wd-clickable-icon p-1"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
                title="Delete Course"
              >
                <FaRegTrashCan className="mb-1 mx-2" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DashboardCard;
