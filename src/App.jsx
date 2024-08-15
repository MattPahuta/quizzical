import React from 'react';

import Header from './components/Header';
import Splash from "./components/Splash";
import Game from "./components/Game";

function App() {

  /* 
    Initialize state to determine if 'start quiz' splash should be displayed,
      or the quiz should be displayed

    2 screens: start and questions

    Quiz screen 
      - collect answers (use form)
      - tally correct/incorrect answers after submit
      - display selected answers, incorrect answers   
  
    Hints: 
     - use html-entities library to decode the html entities coming back in the question
     - create an array with all answers, randomly insert correct_answer into the array w/incorrect_answers
  */


  return (
    <>
      <Header />
      <main className='wrapper'>
        <div className='game-container'>
          Game Container Goes Here
        </div>
      </main>
    
    </>

  );
}

export default App;