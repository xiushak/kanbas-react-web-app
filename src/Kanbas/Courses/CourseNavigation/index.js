import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom+Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navbar mx-2 d-none d-md-block">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`wd-course-navbar-item ${
            pathname.includes(link) && "active"
          }`}
        >
          {link.replace("+", " ")}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
