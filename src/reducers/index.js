import { handleActions } from "redux-actions";
import actionTypes from "../constants/actionTypes";

const defaultState = {
    userInfo: null,
    repoData: null,
    loading: false,
    requestError: null,
};

const reducer = handleActions(
    {
        [actionTypes.GET_USER_INFO_RESPONSE]: (state, { payload }) => {
            return { ...state, userInfo: payload };
        },
        [actionTypes.GET_USER_REPO_RESPONSE]: (state, { payload }) => {
            return { ...state, repoData: payload };
        },
        [actionTypes.SET_LOADING_STATE]: (state, { payload }) => {
            return { ...state, loading: payload };
        },
        [actionTypes.SET_REQUEST_ERROR_STATE]: (state, { payload }) => {
            return { ...state, requestError: payload };
        }
    },
    defaultState
);

export const getUserInfo = state => state.userInfo;
export const getUserRepoData = state => state.repoData;
export const isLoading = state => state.loading;
export const getRequestError = state => state.requestError;

export default reducer;