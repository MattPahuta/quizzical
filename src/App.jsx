import React from 'react';

import Header from './components/Header';
import Quiz from "./components/Quiz";

function App() {
  /* 
     Header will always be present
     main div will always be present
  */
  const [quizInProgress, setQuizInProgress] = React.useState(false);

  function startQuiz() {
    console.log('starting quiz...')
    setQuizInProgress(true)
  }

  /* 
    Start Card component? 
    - future: select options (difficulty, category, etc)
  */

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className='container'>
          {!quizInProgress && <button className='btn start-btn' onClick={startQuiz}>Start Quiz</button>}
          {quizInProgress && <Quiz /> }
        </div>
      </main>
    </div>
  );
}

export default App;