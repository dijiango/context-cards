import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topbar from "./components/bars/Topbar";
import Discover from './components/pages/discover/Discover';
import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import CheckUser from "./components/authorization/CheckUser";

import Flashcard from "./components/flashcards/Flashcard";
import NewCard from "./components/pages/create/NewCard";
import NewDeck from "./components/pages/create/NewDeck";
import UserSetting from "./components/pages/settings/UserSetting";

function App() {
  const [user, setUser] = useState(null);
  const [deckID, setDeckID] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch ("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <CheckUser onLogin={setUser} />

  function handleFlashcards(cards) {
    setFlashcards(cards);
    // setDeckID(id);
    // console.log("flashcards in app.js", cards);
  }

  return (
    <div>
      <BrowserRouter>
        <Topbar key={user.id} user={user} setUser={setUser}/>
        <Routes>
          <Route path='/user/settings' element={<UserSetting key={user.id} user={user}/>} />
          <Route path='/viewdeck' element={ <Flashcard key={flashcards.id} viewFlashcards={flashcards} /> } />
          <Route path='/create/card' element={ <NewCard /> } />
          <Route path='/create/deck' element={ <NewDeck /> } />
          <Route path='/update' element={ <Discover /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/' element={ <Home handleFlashcards={handleFlashcards}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
