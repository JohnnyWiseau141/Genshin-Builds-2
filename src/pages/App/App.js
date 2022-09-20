import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Landing from '../Landing/Landing';

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
        {/* LANDING PAGE */}
        <Route path='/' element={<Landing />} />

        {/* LOGIN/SIGNUP  */}

        {/* PROFILE  */}

        {/* GENSHIN  */}

      </Routes>
    </>
  );
}

export default App;
