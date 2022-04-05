import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topbar from "./components/bars/Topbar";
import Discover from './components/pages/discover/Discover';
import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import CheckUser from "./components/authorization/CheckUser";
import Quiz from "./components/quiz/Quiz";

import Flashcard from "./components/flashcards/Flashcard";
import NewCard from "./components/pages/create/NewCard";
import NewDeck from "./components/pages/create/NewDeck";
import UserSetting from "./components/pages/settings/UserSetting";

function App() {
  const [user, setUser] = useState(null);
  const [deckID, setDeckID] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("waiting...");

  useEffect(() => {
    fetch ("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <CheckUser onLogin={setUser} />

  function handleDeckId(id) {
    setDeckID(id);
  //   fetch(`/decks/${id}`)
  //     .then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //           r.json().then((deck) => {
  //           setFlashcards(deck.flashcards);
  //           });
  //       }
  //   });
  }

  // useEffect(() => {
  //   handleDeckId(id)
  // }, [id]);

  console.log("flashcards in app.js", flashcards);

  return (
    <div>
      <BrowserRouter>
        <Topbar key={user.id} user={user} setUser={setUser}/>
        <Routes>
          <Route path='/quiz/:deckID' element={ <Quiz /> } />
          <Route path='/user/settings' element={<UserSetting key={user.id} user={user}/>} />
          <Route path='/deck/:deckID' element={ <Flashcard key={flashcards.id} flashcards={flashcards} /> } />
          <Route path='/create/card' element={ <NewCard /> } />
          <Route path='/create/deck' element={ <NewDeck /> } />
          <Route path='/discover' element={ <Discover /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
