import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import About from './components/About/About.jsx';
import CourseHome from './components/AllCourses/CourseHome.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<CourseHome />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
