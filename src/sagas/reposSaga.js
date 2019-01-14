import { takeEvery, put, call, all } from "redux-saga/effects";
import actionTypes from "../constants/actionTypes";
import * as actions from "../actions";

import * as api from "../api";

function* onGetUserRepoRequest({ payload }) {
    yield put(actions.setLoadingState(true));
    yield put(actions.setRequestErrorState(null));

    const repoData = yield call(api.getUserRepos, payload);
    yield put(actions.setLoadingState(false));

    if (!repoData.error) {
        yield put(actions.getUserRepoResponse(repoData));
    }
    else{
        yield put(actions.setRequestErrorState(repoData.error));
    }

}

export default function*() {
    yield all([
        takeEvery(actionTypes.GET_USER_REPO_REQUEST, onGetUserRepoRequest)
    ]);
}
