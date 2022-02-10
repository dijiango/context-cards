import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topbar from "./components/bars/Topbar";
import Discover from './components/pages/discover/Discover';
import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import LandingPage from "./components/pages/landing/Landing";
import CheckUser from "./components/authorization/CheckUser";

import Flashcard from "./components/flashcards/Flashcard";
import NewCard from "./components/pages/create/NewCard";
import NewDeck from "./components/pages/create/NewDeck";

function App() {
  const [user, setUser] = useState(null);
  const [deckID, setDeckID] = useState('');

  useEffect(() => {
    fetch ("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <CheckUser onLogin={setUser} />

  function clickedDeck(id) {
    setDeckID(id);
  }

  return (
    <div>
      <BrowserRouter>
        <Topbar user={user} setUser={setUser}/>
        <Routes>
          {/* <Route path={`/decks/${}`} element={<Flashcard key={item.id} flashcards={item.flashcards}/>}
            {
              if (deckID === '') return (<Redirect to='/home' />)
            }
          /> */}
          <Route path='/flashcards' element={ <Flashcard /> } />
          <Route path='/create/card' element={ <NewCard /> } />
          <Route path='/create/deck' element={ <NewDeck /> } />
          <Route path='/update' element={ <Discover /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/' element={ <Home clickedDeck={clickedDeck}/> } />
          {/* <Route path='/' element={ <LandingPage /> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
