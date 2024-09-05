import React from 'react';

function Start({startQuiz}) {
  return (
    <section className='start-section'>
      <h2 className='sub-heading'>Ready to test your knowledge?</h2>
      <p>Click the button below to get started.</p>
      <button className="btn btn-primary" onClick={startQuiz}>
        Start Quiz
      </button>
    </section>
  );
}

export default Start;