import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h4 className="nav-title">Blog App</h4>
      <ul className="nav-list">
        <li className="nav-item" onClick={() => navigate("/")}>Home</li>
        <li className="nav-item" onClick={() => navigate("/blogs")}>Blogs</li>
      </ul>
    </div>
  )
}

export default Navbar