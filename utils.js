import { decode } from 'html-entities';

// format questions with answers - data from API
export function formatQuestions(data) {
  // console.log(data.results);
  return data.map((questionObj) => {
    const { question, correct_answer, incorrect_answers } =
      questionObj; // destructure needed props
    // combine answers into new array of objects
    const allAnswers = [
      { answer: correct_answer, isCorrect: true },
      ...incorrect_answers.map((answer) => ({
        answer,
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
