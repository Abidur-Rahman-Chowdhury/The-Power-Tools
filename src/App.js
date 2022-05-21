import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
     </Navbar>
    </div>
  );
}

export default App;
