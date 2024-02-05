import { Quiz } from "@models/quiz";
import { TQuestionDto, questionToDto } from "@mappers/question";
import { Question, TQuestion } from "@models/question";

export const findQuestionById = async (
  id: string
): Promise<TQuestionDto | null> => {
  const question = await Question.findById(id).exec();

  if (!question) {
    return null;
  }

  return questionToDto(question);
};

export const findQuestionByQuizId = async (
  id: string
): Promise<TQuestionDto[]> => {
  const quiz = await Quiz.findById(id).exec();
  if (!quiz) {
    return [];
  }

  return quiz.toObject().questions.map((question) => questionToDto(question));
};
