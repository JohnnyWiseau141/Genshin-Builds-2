import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null)
  const [weapons, setWeapons] = useState(null)
  const [build, setBuild] = useState(null)

  // useAuthContext and useLogout hook calls

  const handleLogout = () => {
    // utilize logout hook here
  }

  return (
    <>
      {/* pass user as props to navbar */}
      <Navbar handleLogout={handleLogout} /> 

      {/* ROUTES  */}
      <Routes>
        {/* LOGIN/SIGNUP  */}

        {/* PROFILE  */}

        {/* GENSHIN  */}

      </Routes>
    </>
  );
}

export default App;
