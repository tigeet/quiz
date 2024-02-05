import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TQuestion = {
  id: string;
  title: string;
  options: string[];
  answer: string;
};

export type TQuiz = {
  id: string;
  title: string;
  questions: TQuestion[];
};

export const quizApi = createApi({
  reducerPath: "quiz",
  tagTypes: ["Quiz"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllQuizes: builder.query<TQuiz[], void>({
      query: () => "/",
    }),
    getQuizById: builder.query<TQuiz | null, string>({
      query: (id) => `/quiz/${id}`,
    }),
  }),
});

export const { useGetAllQuizesQuery, useGetQuizByIdQuery } = quizApi;
