import { useState, useContext } from "react"
import { BlogContext } from "../contexts/BlogContext"


function CreateBlog() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const { posts, setPost } = useContext(BlogContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (title.trim() !== "" && description.trim()!=="") {
      const newPost = {
      id: posts.length + 1,
      title: title,
      description: description
      };
      setPost([...posts, newPost])

      setTitle("");
      setDescription("");
    }

  };

  return (
    <div className="create-container">
      <h1 className="create-header">Create a blog post</h1>
      <form onSubmit={handleSubmit}>
        <label className="title-label">Enter Title :</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label className="description-label">Enter Description :</label>
        <input type="text" className="discription-input" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  )
}

export default CreateBlog