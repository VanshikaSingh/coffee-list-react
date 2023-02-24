import {takeLatest, put, call} from "redux-saga/effects";
import {loadCoffeesSuccess, loadCoffeesFail } from "./redux/actions/index" 
import {loadCoffeeApi} from "./redux/api";

export function* onLoadCoffeesStartAsync() {
    try{
        const response =  yield call(loadCoffeeApi);
         yield put(loadCoffeesSuccess(response.data));
    } 
    catch (error) {
        yield put (loadCoffeesFail(error));
    }
}

export function* onLoadCoffees() {
    yield takeLatest("LOAD_COFFEES", onLoadCoffeesStartAsync)
}