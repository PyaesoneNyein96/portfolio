import React, { useEffect, useState } from 'react'
import { setInitialTheme } from './features/themeSlice.js';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Loading from './utils/Loading/Loading';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/About/About.jsx';
// import RouteWatcher from './utils/RouteWatcher/RouteWatcher.jsx';

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
      {/* <RouteWatcher /> */}
      <div className="px-5 md:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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