import { TQuiz } from "../models/quiz";
import { TQuestionDto, questionToDto } from "./question";
import type { WithId } from "./types";
export type TQuizDto = {
  title: string;
  questions: TQuestionDto[];
};

export const quizToDto = (quiz: TQuiz): WithId<TQuizDto> => {
  const { title, questions, _id } = quiz;

  return {
    title,
    id: _id.toHexString(),
    questions: questions.map((question) => questionToDto(question)),
  };
};
