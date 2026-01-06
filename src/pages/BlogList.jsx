import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext.jsx"



function BlogList(){
  const { posts } = useContext(BlogContext);
  return (
    <div className="blog-list-container">
      <ol className="list-order">
        {posts.map((post) => <li className="list-item" key={posts.id}><BlogCard title = {post.title} description = {post.description}/></li>)}
      </ol>
    </div>
  )
}


export default BlogList