import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AuthModal from './components/AuthModal';

function App() {

const [isAuthOpen, setIsAuthOpen] = useState(false)

  return (
    <div className="App">
     <Header onloginclick={()=>{setIsAuthOpen(true)}}/>
      <AuthModal openAuth={isAuthOpen} onClose={()=>{setIsAuthOpen(false)}}/>
     <Hero/>
    </div>
  );
}

export default App;
