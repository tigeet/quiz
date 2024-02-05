import { Quiz, TQuiz } from "@models/quiz";
import { quizToDto, TQuizDto } from "@mappers/quiz";

export const findAllQuizes = async (): Promise<TQuizDto[]> => {
  const quizes = await Quiz.find().exec();
  return quizes.map((quiz) => quizToDto(quiz));
};

export const findQuizById = async (id: string): Promise<TQuizDto | null> => {
  const quiz = await Quiz.findById(id).exec();
  if (!quiz) {
    return null;
  }

  return quizToDto(quiz);
};
