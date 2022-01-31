import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topbar from "./components/bars/Topbar";
import Review from './components/pages/review/Review';
import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import LandingPage from "./components/pages/landing/Landing";
import CheckAccount from "./components/authorization/CheckUser";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch ("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) {
  //   return <h2>Welcome back, {user.username}</h2>
  // } else {
  //   return <Login onLogin = {setUser} />
  // }

  if (!user) return <CheckAccount onLogin={setUser} />

  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/review' element={ <Review /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/' element={ <LandingPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
