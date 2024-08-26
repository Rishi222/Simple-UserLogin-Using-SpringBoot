// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Navbar from "./layout/navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";


function App() {
      return (
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/adduser" element={<AddUser />} />
              <Route exact path="/edituser/:id" element={<EditUser />} />
              <Route path="/viewuser/:id" element={<ViewUser />} />
            </Routes>
          </Router>
        </>
      );
}

export default App
