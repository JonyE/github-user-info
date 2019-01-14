import { createAction } from "redux-actions";
import actionTypes from "../constants/actionTypes";

export const getUserInfoRequest = createAction(
  actionTypes.GET_USER_INFO_REQUEST
);
export const getUserInfoResponse = createAction(
  actionTypes.GET_USER_INFO_RESPONSE
);

export const getUserRepoRequest = createAction(
    actionTypes.GET_USER_REPO_REQUEST
);
export const getUserRepoResponse = createAction(
    actionTypes.GET_USER_REPO_RESPONSE
);

export const setLoadingState = createAction(
    actionTypes.SET_LOADING_STATE
);

export const setRequestErrorState = createAction(
    actionTypes.SET_REQUEST_ERROR_STATE
);