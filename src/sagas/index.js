import { fork, all } from 'redux-saga/effects';
import userSaga from "./userSaga";
import reposSaga from "./reposSaga";


export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(reposSaga),
    ]);
}