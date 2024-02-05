import mongoose, { Types } from "mongoose";
import { QuestionSchema, TQuestion } from "./question";

export type TQuiz = {
  _id: Types.ObjectId;
  title: string;
  questions: Types.DocumentArray<TQuestion>;
};

const QuizSchema = new mongoose.Schema<TQuiz>({
  title: String,
  questions: [QuestionSchema],
});

export const Quiz = mongoose.model("Quiz", QuizSchema);
