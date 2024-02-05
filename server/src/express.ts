import express from "express";
import cors from "cors";
import { findAllQuizes, findQuizById } from "./controllers/quiz";
import { findQuestionById } from "./controllers/question";
export const initExpress = async () => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(cors());
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  app.get("/", async (req, res) => {
    const quizes = await findAllQuizes();
    res.json(quizes);
  });

  app.get("/quiz/:id", async (req, res) => {
    const quizId = req.params.id;
    const quiz = await findQuizById(quizId);

    if (!quiz) {
      res.sendStatus(404);
    }

    res.json(quiz);
  });

  app.get("/question/:id", async (req, res) => {
    const questionId = req.params.id;
    const question = await findQuestionById(questionId);

    res.json(question);
  });
  return app;
};
