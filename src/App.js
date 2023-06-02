import About from './components/About';
import NavBar from './components/NavBar';
import TextFoarm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  } 

  const handleToggleMode = () =>{
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#0d0930'
      showAlert('Dark Mode Enabled', 'success')
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')
    }
  }
  return (
        <BrowserRouter  >
                <NavBar title="Text Utility" mode={mode} toggleMode={handleToggleMode}/>
                <Alert  alert={alert}/>
                <Routes>
                  <Route  path="/" 
                          element={<TextFoarm showAlert={showAlert}
                          mode={mode} heading="Enter Text below to Analyze"/>} />
                  <Route path="/about" element={ <About mode={mode} />}/>
                </Routes>
        </BrowserRouter>

  );
}

export default App;
