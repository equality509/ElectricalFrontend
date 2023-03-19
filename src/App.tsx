import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar"


function App() {
  return (
    
    <div className="App">
        

      <h1 className='title'>Electrical App</h1>
      <Outlet/>
    </div>
  );
}

export default App;