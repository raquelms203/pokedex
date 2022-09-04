import api from "../../../services/api";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { addToCartSuccess, selectPokemon } from "./actions";

const getPokemon = (id) => {  
  const response = yield call(get, `${api}/${id}`);

  yield put(selectPokemon(response.data))
}

export default all([takeLatest("@pokemon/SELECT_REQUEST")])