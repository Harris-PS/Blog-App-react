import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
  return (
    <div className="home-container">
        <h1 className="heading-text">Welcome to Blog App</h1>
      
      <div className="blog-routes">
        <button onClick={() => navigate("/blogs")}>View Blogs</button>
        <button onClick={() => navigate("/create")}>Create a Blog</button>
      </div>
    </div>
  )
}

export default Home