import { TQuestion } from "../models/question";
import { WithId } from "./types";

export type TQuestionDto = {
  title: string;
  answer: string;
  options: string[];
};

export const questionToDto = (question: TQuestion): WithId<TQuestionDto> => {
  const { title, answer, options, _id } = question;
  return { title, answer, options, id: _id.toHexString() };
};
