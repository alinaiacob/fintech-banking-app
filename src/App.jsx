import Header from './components/Header'
import Login from './components/Login'
import './App.css'
import { BrowserRouter, Route, Link, Routes}  from "react-router-dom";
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
