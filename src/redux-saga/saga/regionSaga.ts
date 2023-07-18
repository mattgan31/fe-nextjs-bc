import { call, put } from 'redux-saga/effects';
import RegionApi from "@/api/region";
import { GetRegionSuccess, GetRegionFail, CreateRegionSuccess, CreateRegionFail } from '../action/regionAction';

function* handleGetRegion(): any {
    try {
        const result = yield call(RegionApi.GetRegion)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFail(error))
    }
}

function* createRegion(action: any): any{
    const { payload } = action;
    try {
        const result = yield call(RegionApi.CreateRegion, payload)
        yield put(CreateRegionSuccess(result.data))
    } catch (error) {
        yield put(CreateRegionFail(error))
    }
}

function* deleteRegion(action: any): any{
    const { payload } = action;
    try {
        const result = yield call(RegionApi.DeleteRegion, payload)
        yield put(CreateRegionSuccess(result.data))
    } catch (error) {
        yield put(CreateRegionFail(error))
    }
}

function* updateRegion(action: any): any{
    const { payload } = action;
    try {
        const result = yield call(RegionApi.UpdateRegion, payload.id, payload.payload)
        yield put(CreateRegionSuccess(result.data))
    } catch (error) {
        yield put(CreateRegionFail(error))
    }
}

export {
    handleGetRegion,
    createRegion,
    deleteRegion,
    updateRegion
}
