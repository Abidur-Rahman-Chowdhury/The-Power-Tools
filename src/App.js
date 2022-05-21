import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
     </Navbar>
    </div>
  );
}

export default App;
