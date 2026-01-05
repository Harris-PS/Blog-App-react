import './App.css'
import BlogList from './pages/BlogList.jsx';
import Navbar from './components/Navbar.jsx';
import BlogProvider from './contexts/BlogContext'


function App() {
  
  return (

    <>
    <BlogProvider>
     <Navbar/>
     <BlogList/>
    </BlogProvider>
    </>
  )
}

export default App
