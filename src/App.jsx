import React from 'react';

import Header from './components/Header';
import Start from './components/Start';
import Quiz from "./components/Quiz";

function App() {
  /* 
     Header will always be present
     main div will always be present

     Needed state for display:
     - showStart
     - showQuiz
     - showResult

  */
  const [quizInProgress, setQuizInProgress] = React.useState(false);
  // const [showStart, setShowStart] = React.useState(true);

  // unmount Start, mount Quiz, setQuizInProgress, get quiz questions
  function startQuiz() {
    console.log('starting quiz...')
    setQuizInProgress(true);
    // setShowStart(false);
    console.log('Quiz in progress: ', quizInProgress)
  }

  return (
    <>
      <Header />
      <main className="container">
        {!quizInProgress && <Start startQuiz={startQuiz} />}
        {quizInProgress && <Quiz />}
      </main>
    </>
  );
}

export default App;