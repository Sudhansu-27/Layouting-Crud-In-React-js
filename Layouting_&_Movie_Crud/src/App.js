import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage'
import Signuppage from './Components/Signuppage'
import { BrowserRouter, Routes,  Route, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Sidebardata from './Components/Sidebardata'
import Profile from './Components/Profile'
import Movies from './Components/Movies'
import Home from './Components/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protected from './Components/Protected'
import Start from './Components/Home'


function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     <BrowserRouter>
     <Routes>
     <Route path ="/" element = {<Protected Component = {Start}/>}></Route>
     <Route path ="/homepage" element = {<Protected Component = {Homepage}/>}></Route>
     <Route path ="/signuppage" element = {<Protected Component = {Signuppage}/>}></Route>
     <Route path ="/dashboard" element = {<Protected Component = {Dashboard}/>}></Route>
     <Route path ="/sidebardata" element = {<Protected Component = {Sidebardata}/>}></Route>
     <Route path ="/home" element = {<Protected Component = {Home}/>}></Route>
     <Route path ="/profile" element = {<Protected Component = {Profile}/>}></Route>
     <Route path ="/movies" element = {<Protected Component = {Movies}/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
