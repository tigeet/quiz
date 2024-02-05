import { cn } from "@bem-react/classname";
import { Link } from "react-router-dom";
import { TQuiz } from "store/slice";

type QuizzesProps = {
  quizes: TQuiz[];
};

const cnQuizzes = cn("Quizzes");

const Quizzes = ({ quizes }: QuizzesProps) => {
  return (
    <div className={cnQuizzes("")}>
      {quizes.map((quiz) => (
        <Link
          key={quiz.id}
          className={cnQuizzes("Quiz")}
          to={`quiz/${quiz.id}`}
        >
          {quiz.title}
        </Link>
      ))}
    </div>
  );
};

export default Quizzes;
