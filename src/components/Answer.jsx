import React from 'react';


function Answer({answerText, isCorrect, isSelected, quizFinished, onChange}) {
  const answerId = React.useId();
  // Get styling classes for answers
  // ToDo: port to utils
  // Or, rework this to different format
  // - const selectedCorrect = answer === correctAnswer
  // - const selectedIncorrect = uswerAnswer
  const getAnswerClass = () => {
    if (!quizFinished) return 'choice-btn';

    if (isCorrect) {
      return 'choice-btn correct-answer';
    } else if (isSelected) {
      return 'choice-btn incorrect-answer';
    } else {
      return 'choice-btn';
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
      <label htmlFor={answerId} className={getAnswerClass()}>
        {answerText}
      </label>
    </div>
  );
}

export default Answer;