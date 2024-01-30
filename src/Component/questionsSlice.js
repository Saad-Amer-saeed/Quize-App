import { createSlice } from "@reduxjs/toolkit";

const SecPerQuesion = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsReaminig: null,
};

const questionSlice = createSlice({
  name: "TestQuestion",
  initialState,

  reducers: {
    dataReceived(state, action) {
      state.questions = action.payload;
      state.status = "ready";
    },
    dataFailed(state, action) {
      state.status = "error";
    },

    start(state, action) {
      state.status = "active";
      state.secondsReaminig = state.questions.length * SecPerQuesion;
    },

    newAnswer(state, action) {
      const question = state.questions.at(state.index);

      state.answer = action.payload;
      state.points =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;
    },

    nextQuestion(state, action) {
      state.index = state.index + 1;
      state.answer = null;
    },

    reset(state, action) {
      state.index = 0;
      state.points = 0;
      state.secondsReaminig = 0;
      state.answer = null;
      state.status = "ready";
    },

    tick(state, action) {
      state.secondsReaminig = state.secondsReaminig - 1;
      state.status = state.secondsReaminig === 0 ? "finished" : state.status;
    },

    finish(state, action) {
      state.status = "finished";
      state.highscore =
        state.points > state.highscore ? state.points : state.highscore;

      // },
    },
  },
});
// const numQuestions = state.questions.length;

export const {
  dataReceived,
  dataFailed,
  start,
  newAnswer,
  nextQuestion,
  tick,
  reset,
  finish,
} = questionSlice.actions;

// export const numQuestions = questions?.length;
// export const maxPossiblePoints = questions?.reduce(
//   (prev, cur) => prev + cur.points,
//   0
// );

export default questionSlice.reducer;
