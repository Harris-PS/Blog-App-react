import './App.css'
import BlogList from './pages/BlogList.jsx';
import Navbar from './components/Navbar.jsx';
import BlogProvider from './contexts/BlogContext'
import Home from './pages/Home.jsx'
import CreateBlog from './pages/CreateBlog.jsx';
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (

    <>
    <BlogProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </BlogProvider>
    </>
  )
}

export default App
