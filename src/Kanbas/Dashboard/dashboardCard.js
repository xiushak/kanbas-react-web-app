import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";

function DashboardCard({ course }) {
  return (
    <div className="col-auto">
      <Link
        key={course._id}
        to={`/Kanbas/Courses/${course._id}`}
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
            <FaRegPenToSquare />
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DashboardCard;
