import { FaHome, FaChartBar, FaUserPlus, FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/" className="nav-icon">
            <FaHome />
            <span className="nav-text">HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dash" className="nav-icon">
            <FaChartBar />
            <span className="nav-text">DASH</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-icon">
            <FaUserPlus />
            <span className="nav-text">JOIN</span>
          </NavLink>
        </li>
        <li>
          <button onClick={() => navigate(-1)} className="nav-icon nav-button">
            <FaArrowLeft />
            <span className="nav-text">BACK</span>
          </button>
        </li>
      </ul>{" "}
    </nav>
  );
}
