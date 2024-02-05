import { createBrowserRouter } from "react-router-dom";
import QuizzesPage from "./pages/quizzesPage";
import QuizPage from "./pages/quizPage";
import RoadPage from "./pages/roadPage";

export const staticPaths = {
  quizzes: "/",
  quiz: "/quiz",
  road: "/road",
};
export const router = createBrowserRouter([
  { path: staticPaths.quizzes, element: <QuizzesPage /> },
  { path: staticPaths.quiz + "/:id", element: <QuizPage /> },
  { path: staticPaths.road, element: <RoadPage /> },
]);
