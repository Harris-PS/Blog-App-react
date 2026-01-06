import { createContext, useState } from 'react';

export const BlogContext = createContext();


function BlogProvider({children}) {
  const [posts,setPost] = useState([{
    id: 1,
    title: "Cooking in home",
    description: "Cooking at home is a rewarding way to enjoy healthier, tastier meals while saving money and building confidence in the kitchen. It's simpler than you might think, especially for beginners."
  },
  ]);
  return (
    <>
      <BlogContext.Provider value={{posts, setPost}}>
        {children}
      </BlogContext.Provider>
    </>
  )
}

export default BlogProvider


