function Answer({answer, name}) {

  return (
    <div className="answer">
      <input
        type="radio"
        id={answer}
        value={answer}
        name={name}
        checked={false}
        className="radio-input-choice visually-hidden"
      />
      <label htmlFor={answer} className="choice-btn">
        {answer}
      </label>
    </div>
  );
}

export default Answer;