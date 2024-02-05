import { useGetAllQuizesQuery } from "../store/slice";
import Quizzes from "@src/components/quizzes/quizzes";

const QuizPage = () => {
  const { data: quizes = [] } = useGetAllQuizesQuery();

  return <Quizzes quizes={quizes} />;
};
export default QuizPage;
