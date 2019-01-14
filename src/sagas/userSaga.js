import { takeEvery, put, call, all } from "redux-saga/effects";
import actionTypes from "../constants/actionTypes";
import * as actions from "../actions";

import * as api from "../api";

function* onGetUserInfoRequest({ payload: name }) {
  yield put(actions.setLoadingState(true));
  yield put(actions.setRequestErrorState(null));

  const user = yield call(api.getUserInfo, { name });
  yield put(actions.setLoadingState(false));

  if (!user.error) {
    yield put(actions.getUserInfoResponse(user));
    yield put(actions.getUserRepoRequest({ name }));
  }
  else{
    yield put(actions.setRequestErrorState(user.error));
  }
}

export default function*() {
  yield all([
    takeEvery(actionTypes.GET_USER_INFO_REQUEST, onGetUserInfoRequest),
  ]);
}
