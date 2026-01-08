function BlogCard(props) {
  return (
    <div className='blog-card'>
      <h3 className="posts-title">{props.title}</h3>
      <p className="posts-description">{props.description}</p>
    </div>
  )
}

export default BlogCard