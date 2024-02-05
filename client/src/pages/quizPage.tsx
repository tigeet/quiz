import Quiz from "@components/quiz/quiz";
import { useParams } from "react-router-dom";
import { useGetQuizByIdQuery } from "@src/store/slice";

const QuizPage = () => {
  const { id } = useParams();
  const { data } = useGetQuizByIdQuery(id ?? "");
  console.log(data);
  if (!data) {
    return <p>:(</p>;
  }

  return <Quiz quiz={data} />;
};
export default QuizPage;
