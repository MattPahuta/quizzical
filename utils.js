import { decode } from 'html-entities';

// ToDo: add shuffle as a seperate function to call within formatQuestions

// format questions with answers - data from API
export function formatQuestionsOriginal(data) {
  // console.log(data.results);
  return data.map((questionObj) => {
    const { question, correct_answer, incorrect_answers } = questionObj;
    // combine answers into new array of objects
    const allAnswers = [
      { answer: decode(correct_answer), isCorrect: true },
      ...incorrect_answers.map((answer) => ({
        answer: decode(answer),
        isCorrect: false,
      })),
    ];
    // shuffle answers
    const shuffledAnswers = allAnswers.sort(
      () => Math.random() - 0.5
    );
    // return formated question object
    return { question: decode(question), answers: shuffledAnswers };
  });
}

export const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export function formatQuestions(data) {
  return data.map((question, index) => (
    {
      id: index,
      question: decode(question.question),
      correct_answer: decode(question.correct_answer),
      answers: shuffle([
        { answer: question.correct_answer, isCorrect: true},
        ...question.incorrect_answers.map(answer => ({answer: decode(answer), isCorrect: false}))
      ])
    }
  ))
}
