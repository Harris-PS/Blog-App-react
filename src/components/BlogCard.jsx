function BlogCard(prams) {
  return (
    <div className='blog-card'>
      <h3 className="posts-title">{prams.title}</h3>
      <p className="posts-description">{prams.description}</p>
    </div>
  )
}

export default BlogCard