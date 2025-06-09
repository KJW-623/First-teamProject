import logo from './logo.svg';
import './App.css';
import ProductAll from './components/ProductAll';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Mypage from './components/Mypage';
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Error/router";

function App() {
  return <RouterProvider router={router} />;


//<ProductAll/>
//<Navbar/>
//<Details/>
//<Mypage/>
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
