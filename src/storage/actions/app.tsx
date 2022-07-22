import { movieDto } from "@/types/dto/movieDto";
import { createAction } from "@reduxjs/toolkit";
import { APP_SHOW_MODAL, APP_SET_MOVIE } from "../actionTypes/app";

export const showModal = createAction<boolean>(APP_SHOW_MODAL);
export const setMovie = createAction<movieDto>(APP_SET_MOVIE);
