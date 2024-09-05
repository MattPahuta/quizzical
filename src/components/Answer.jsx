import React from 'react';

function Answer({answerText, isCorrect, isSelected, quizFinished, onChange}) {
  const answerId = React.useId(); // get unique ID for each input/label pair
  // Get styling classes for answers
  const getAnswerClass = () => {
    if (isCorrect) {
      return 'correct-answer';
    } else if (isSelected) {
      return 'incorrect-answer';
    } else {
      return '';
    }
  };

  return (
    <div className="answer">
      <input
        type="radio"
        value={answerText}
        onChange={onChange}
        checked={isSelected}
        disabled={quizFinished}
        id={answerId}
        className="radio-input-choice visually-hidden"
      />
      <label
        htmlFor={answerId}
        className={
          'choice-btn ' + (quizFinished && getAnswerClass())
        }>
        {answerText}
      </label>
    </div>
  );
}

export default Answer;