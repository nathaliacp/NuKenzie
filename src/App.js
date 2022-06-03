import './App.css';
import { useState } from 'react';
import LandingPage from './components/LandingPage/landingPage';
import HomePage from './components/HomePage/homePage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        {
          isLoggedIn ?
          <HomePage setIsLoggedIn={setIsLoggedIn}/>
          :
          <LandingPage setIsLoggedIn={setIsLoggedIn}/>
        }
    </div>
  );
}

export default App;
