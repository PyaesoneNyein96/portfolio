import React, { useEffect, useState } from 'react'
import { setInitialTheme } from './features/themeSlice.js';
import { useDispatch } from 'react-redux';
import Loading from './utils/Loading/Loading';
import Home from './pages/home/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {

  const [loadTheme, setLoadTheme] = useState(false);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialTheme());
    setLoadTheme(true);
  }, [dispatch])

  const main = (

    <Router>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );

  return (
    <>
      {!loadTheme && <Loading />}
      {main}
    </>
  );




}

export default App