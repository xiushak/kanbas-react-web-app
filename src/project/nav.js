import { Link, useLocation } from "react-router-dom";

function ProjectNav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav flex-column nav-pills mt-2">
      <Link
        to="/project"
        className={`nav-link ${pathname.includes("home") ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/project/signin"
        className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}
      >
        Signin
      </Link>
      <Link
        to="/project/signup"
        className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}
      >
        Signup
      </Link>
      <Link
        to="/project/account"
        className={`nav-link ${pathname.includes("account") ? "active" : ""}`}
      >
        Account
      </Link>
    </nav>
  );
}

export default ProjectNav;
