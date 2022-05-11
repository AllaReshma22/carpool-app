import './App.css';
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LogIn from "./pages/login/login.jsx"
import SignUp from "./pages/signup/signup.jsx"
import Choose from "./pages/choose/choose.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LogIn/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/selection' element={<Choose/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;