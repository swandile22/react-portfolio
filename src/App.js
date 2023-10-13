import './App.css';
import {SideBar} from './Components/SideBar';
import './Components/Pages/Home.css'
import {Outlet, Route, Router, Routes} from "react-router-dom";
import {Home} from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
        <SideBar/>
        <Router  location={}>
            
        
        <Routes>
            <Route path={'/'}
            element={<Home />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
