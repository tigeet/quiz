import { cn } from "@bem-react/classname";
import Progress from "@components/progress/progress";
import Question from "@components/question/question";
import { useCallback, useState } from "react";
import "./quiz.scss";
import { TQuiz } from "store/slice";
import { useNavigate } from "react-router-dom";
import { staticPaths } from "@src/router";
import Footer from "../footer/footer";
const cnQuiz = cn("Quiz");

type QuizProps = {
  quiz: TQuiz;
};

const Quiz = ({ quiz }: QuizProps) => {
  const [answers, setAnswers] = useState<Array<string | null>>([]);
  const [correct, setCorrect] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (answer: string) => {
      setAnswers((answers) => [...answers, answer]);
      if (quiz.questions[progress].answer === answer) {
        setCorrect((correct) => correct + 1);
      }
    },
    [progress, quiz.questions]
  );

  const handleSkip = useCallback(() => {
    setAnswers((answers) => [...answers, null]);
    setProgress((progress) => progress + 1);
  }, []);

  const handleNext = useCallback(
    () => setProgress((progress) => progress + 1),
    []
  );

  const handleReset = useCallback(() => {
    setAnswers([]);
    setCorrect(0);
    setProgress(0);
  }, []);

  const handleHome = useCallback(
    () => navigate(staticPaths.quizzes),
    [navigate]
  );
  return (
    <div className={cnQuiz()}>
      <Progress progress={correct / quiz.questions.length} />
      {progress === quiz.questions.length ? (
        <div className={cnQuiz("Result")}>
          <div className={cnQuiz("Score")}>
            {correct}/{quiz.questions.length}
          </div>

          <div className={cnQuiz("Answers")}>
            {quiz.questions.map((question, i) => (
              <div className={cnQuiz("Answers")} key={i}>
                {question.title}, {answers[i]}
              </div>
            ))}
          </div>

          <Footer>
            <button className={cnQuiz("Reset")} onClick={handleReset}>
              Go Again
            </button>

            <button className={cnQuiz("Home")} onClick={handleHome}>
              Home
            </button>
          </Footer> 
        </div>
      ) : (
        <Question
          key={progress}
          question={quiz.questions[progress]}
          onNext={handleNext}
          onSubmit={handleSubmit}
          onSkip={handleSkip}
        />
      )}
    </div>
  );
};

export default Quiz;
