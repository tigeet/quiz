import { Question } from "./models/question";
import { Quiz } from "./models/quiz";

const mock = [
  [
    {
      title: "What is the capital of France?",
      options: ["Berlin", "Rome", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      title: 'Which planet is known as the "Red Planet"?',
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      title: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "F. Scott Fitzgerald",
      ],
      answer: "William Shakespeare",
    },
    {
      title: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Gorilla"],
      answer: "Blue Whale",
    },
    {
      title: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      answer: "1912",
    },
    {
      title: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      title: "What is the chemical symbol for gold?",
      options: ["Gd", "Au", "Ag", "Fe"],
      answer: "Au",
    },
    {
      title: "Which ocean is the largest by surface area?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      title: "What is the capital of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      answer: "Tokyo",
    },
    {
      title: 'Who is known as the "Father of Computers"?',
      options: ["Alan Turing", "Bill Gates", "Charles Babbage", "Steve Jobs"],
      answer: "Charles Babbage",
    },
  ],
  [
    {
      title: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra",
    },
    {
      title: 'Who wrote the novel "To Kill a Mockingbird"?',
      options: [
        "Harper Lee",
        "J.K. Rowling",
        "George Orwell",
        "Ernest Hemingway",
      ],
      answer: "Harper Lee",
    },
    {
      title: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Vietnam"],
      answer: "Japan",
    },
    {
      title: "What is the largest desert in the world?",
      options: ["Gobi Desert", "Sahara Desert", "Antarctica", "Arabian Desert"],
      answer: "Antarctica",
    },
    {
      title: "Who developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      answer: "Albert Einstein",
    },
    {
      title: "Which element has the chemical symbol Hg?",
      options: ["Hydrogen", "Helium", "Mercury", "Magnesium"],
      answer: "Mercury",
    },
    {
      title: "What is the currency of Brazil?",
      options: ["Peso", "Yen", "Real", "Rupee"],
      answer: "Real",
    },
    {
      title:
        "Which famous scientist formulated the laws of motion and universal gravitation?",
      options: [
        "Isaac Newton",
        "Nikola Tesla",
        "Marie Curie",
        "Galileo Galilei",
      ],
      answer: "Isaac Newton",
    },
    {
      title: "In which year did the Berlin Wall fall?",
      options: ["1985", "1989", "1991", "1995"],
      answer: "1989",
    },
    {
      title: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      answer: "Skin",
    },
  ],
];

export const initDatabase = () => {
  mock.forEach((quiz) => {
    const questions = quiz.map(({ title, options, answer }) => {
      const questionEntity = new Question({ title, options, answer });
      questionEntity.save();
      return questionEntity;
    });

    const quizEntity = new Quiz({ title: "General Knowledge", questions });
    quizEntity.save();
  });
};
