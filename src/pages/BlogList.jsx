import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext.jsx"



function BlogList(){
  const items = useContext(BlogContext);
  return (
    <div className="blog-list-container">
      {items.map((post) => (<BlogCard key={post.id} title = {post.title} description = {post.description}/>))}
    </div>
  )
}


export default BlogList