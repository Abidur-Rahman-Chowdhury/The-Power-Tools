import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <div >
      <Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
      
    </div>
  );
}

export default App;
