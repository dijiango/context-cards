import { React, useState, useEffect } from 'react';
import Deck from '../../Deck';
import { DivStyle, TitleBar } from './Home.styled';



function Home() {

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("/decks")
    .then(r => r.json())
    .then(data => setDecks(data))
  }, [])

  console.log(decks);
  return (
    <div>
      <DivStyle>
        <TitleBar>First bar</TitleBar>
        <TitleBar>Second bar</TitleBar>
      </DivStyle>
      
      {decks.length > 0 ? (
        decks.map((item) => (
          <Deck key={item.id} deck={item}/>
        ))
      ) : (
        <>
          <h2>You haven't added any decks yet.</h2>
        </>
      )
      
      }
    </div>
)}

export default Home;