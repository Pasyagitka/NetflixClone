/* eslint-disable no-param-reassign */
import { movieDto } from "@/types/dto/movieDto";
import { createReducer } from "@reduxjs/toolkit";
import { showModal, setMovie } from "../actions/app";

type AppStateProps = {
  showModal: boolean;
  movie: movieDto;
};

const initialState = {
  showModal: false,
  movie: {
    title: "",
    description: "",
  },
};

const appStateReducer = createReducer<AppStateProps>(initialState, (builder) => {
  builder.addCase(showModal, (state, action) => {
    state.showModal = action.payload;
  });
  builder.addCase(setMovie, (state, action) => {
    state.movie = action.payload;
  });
});

export default appStateReducer;
