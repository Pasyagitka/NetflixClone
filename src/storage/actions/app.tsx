import { detailsLink } from "@/constants";
import { getMovieDetailsType } from "@/types/getMovieDetailsType";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APP_SHOW_MODAL, APP_CLEAR_MODAL, APP_GET_MOVIE_DETAILS } from "../actionTypes/app";

export const showModal = createAction<boolean>(APP_SHOW_MODAL);
export const clearModal = createAction(APP_CLEAR_MODAL);

export const getMovieDetails = createAsyncThunk(
  APP_GET_MOVIE_DETAILS,
  async ({ mediaType, mediaId }: getMovieDetailsType) => {
    const request = await axios.get(detailsLink({ mediaType, mediaId }));
    return request.data;
  }
);
