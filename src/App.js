import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Redirect,
//   Navigate,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [colormode, setColorMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark mode";
      setInterval(() => {
        document.title = "Textutil is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutil now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils light mode";
    }
  };

  const toggleColorMode = () => {
    if (colormode === "light") {
      setColorMode("#3aad77");
      document.body.style.backgroundColor = "#3aad77";
      showAlert("Green mode has been enabled", "success");
    } else if (colormode === "light") {
      setColorMode("#f3c335");
      document.body.style.backgroundColor = "#f3c335";
      showAlert("Green mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}

        <Navbar
          title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} colormode={colormode} toggleColorMode={toggleColorMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}/> */}

            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
             */}
            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
            
          {/* </Routes> */}
        </div>


      {/* </Router> */}


    </>
  );
}

export default App;
