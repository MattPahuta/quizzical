function Answer({answerText, answerName}) {

  return (
    <div className="answer">
      <input
        type="radio"
        id={answerText}
        value={answerText}
        name={answerName}
        className="radio-input-choice visually-hidden"
      />
      <label htmlFor={answerText} className="choice-btn">
        {answerText}
      </label>
    </div>
  );
}

export default Answer;