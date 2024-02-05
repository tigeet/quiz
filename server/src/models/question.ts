import mongoose, { Types } from "mongoose";

export type TQuestion = {
  _id: Types.ObjectId;
  title: string;
  answer: string;
  options: string[];
};

export const QuestionSchema = new mongoose.Schema<TQuestion>({
  title: String,
  answer: String,
  options: [String],
});

export const Question = mongoose.model("Question", QuestionSchema);
