import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const{isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light":"dark"}`}>
     <Navbar/>
    </div>
  );
}

export default App;
