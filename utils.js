import { decode } from 'html-entities';

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export function formatQuestions(data) {
  return data.map((questionObj, index) => ({
    id: index,
    question: decode(questionObj.question),
    correct_answer: decode(questionObj.correct_answer),
    answers: shuffle([
      {answer: decode(questionObj.correct_answer), isCorrect: true},
      ...questionObj.incorrect_answers.map(answer => ({answer: decode(answer),
      isCorrect: false}))
    ])
  }))
}
