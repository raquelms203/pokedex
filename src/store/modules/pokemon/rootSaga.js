import {all} from "redux-saga/effects";

import pokemon from "../pokemon/sagas";

export default rootSaga = () => yield all([pokemon])