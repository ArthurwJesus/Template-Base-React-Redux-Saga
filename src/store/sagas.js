import {all,fork} from "redux-saga/effects"

import Api from "./api/saga"

export default function* rootSaga(){
    yield all([
        fork(Api)
    ])
}