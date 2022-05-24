import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import MyProfile from './components/Dashboard/MyProfile';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';

import Login from './components/Login/Login';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Purchase from './components/Purchase/Purchase';
import RequiredAdmin from './components/RequiredAuth/RequiredAdmin';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/purchase/:id" element={<RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>}></Route>

        
         
          <Route
            path="/portfolio"
            element={<MyPortfolio></MyPortfolio>}
          ></Route>
          
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
            
          }>

            <Route path='makeAdmin' element={
              <RequiredAdmin>
                <MakeAdmin></MakeAdmin>
              </RequiredAdmin>
            }></Route>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
