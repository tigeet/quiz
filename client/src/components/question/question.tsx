import { useCallback, useState } from "react";
import { cn } from "@bem-react/classname";
import Option from "@components/option/option";
import "./question.scss";
import clsx from "clsx";
import { TQuestion } from "../../store/slice";
import Footer from "../footer/footer";
const cnQuestion = cn("Question");

type QuestionProps = {
  question: TQuestion;
  onSubmit: (submition: string) => void;
  onSkip: () => void;
  onNext: () => void;
};

const Question = ({ question, onSubmit, onNext, onSkip }: QuestionProps) => {
  const [submition, setSubmition] = useState<string | undefined>(undefined);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const hasSubmitted = submition !== undefined;
  const hasSelected = selected !== undefined;

  const { title, options, answer } = question;

  const handleSubmit = useCallback(() => {
    if (!hasSelected) {
      return;
    }

    setSubmition(selected);
    onSubmit(selected);
  }, [hasSelected, onSubmit, selected]);

  const handleSelect = useCallback(
    (value: string) => {
      if (hasSubmitted) {
        return;
      }

      setSelected((selected) => (selected === value ? undefined : value));
    },
    [hasSubmitted]
  );

  const getOptionState = (option: string) => {
    if (!hasSubmitted && selected === option) {
      return "selected";
    }

    if (hasSubmitted && answer === option) {
      return "correct";
    }

    if (hasSubmitted && submition === option && answer !== option) {
      return "error";
    }
  };

  return (
    <div className={cnQuestion()}>
      <p className={cnQuestion("Title")}>{title}</p>
      <div className={cnQuestion("Answers")}>
        {options.map((option) => (
          <Option
            key={option}
            title={option}
            value={option}
            state={getOptionState(option)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <Footer align="right">
        {hasSubmitted ? (
          <button
            className={clsx(cnQuestion("Next"), cnQuestion("Button"))}
            onClick={onNext}
          >
            Continue
          </button>
        ) : (
          <>
            <button
              className={clsx(cnQuestion("Skip"), cnQuestion("Button"))}
              onClick={onSkip}
            >
              Skip
            </button>

            <button
              className={clsx(
                cnQuestion("Submit", { disabled: !hasSelected }),
                cnQuestion("Button")
              )}
              disabled={!hasSelected}
              onClick={handleSubmit}
            >
              Check
            </button>
          </>
        )}
      </Footer>
    </div>
  );
};

export default Question;
