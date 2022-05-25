import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import AddProducts from './components/Dashboard/AddProducts';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrder/MyOrders';
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

          {/*  dashboard start */}
          <Route path="/dashboard" element={
            <RequiredAuth>
              <Dashboard></Dashboard>
            </RequiredAuth>
            
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>

            <Route path='makeAdmin' element={
              <RequiredAdmin>
                <MakeAdmin></MakeAdmin>
              </RequiredAdmin>
            }></Route>
            <Route path='addProduct' element={
              <RequiredAdmin>
                <AddProducts></AddProducts>
              </RequiredAdmin>
            }></Route>
            <Route path='manageProducts' element={
              <RequiredAdmin>
               <ManageProducts></ManageProducts>
              </RequiredAdmin>
            }></Route>
            
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          </Route>
           {/*  dashboard end */}
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
