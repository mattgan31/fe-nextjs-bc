import { all, takeEvery } from "redux-saga/effects";
import * as ActionRegion from '@/redux-saga/constant/regionConstant';
import { createRegion, handleGetRegion, deleteRegion, updateRegion } from "./regionSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQ, handleGetRegion),
        takeEvery(ActionRegion.CREATE_REGION_REQ, createRegion),
        takeEvery(ActionRegion.DELETE_REGION_REQ, deleteRegion),
        takeEvery(ActionRegion.UPDATE_REGION_REQ, updateRegion),
    ])
}

export default watchAll;
