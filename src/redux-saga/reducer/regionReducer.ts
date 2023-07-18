import * as ActionType from "@/redux-saga/constant/regionConstant";

const INIT_STATE = {
    regions: []
}

const RegionReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_REGION_REQ:
            return { ...state }
        case ActionType.GET_REGION_OK:
            return GetRegion(state, action)
        case ActionType.CREATE_REGION_REQ:
            return { ...state }
        case ActionType.CREATE_REGION_OK:
            return CreateRegion(state, action)
        case ActionType.DELETE_REGION_REQ:
            return { ...state }
        case ActionType.DELETE_REGION_OK:
            return DeleteRegion(state, action)
        case ActionType.UPDATE_REGION_REQ:
            return { ...state }
        case ActionType.UPDATE_REGION_OK:
            return UpdateRegion(state, action)
        default:
            return {...state}
    }
}

const GetRegion = (state: any, action: any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const CreateRegion = (state: any, action: any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const DeleteRegion = (state: any, action: any) => {
    return {
        ...state,
        regions: action.payload
    }
}

const UpdateRegion = (state: any, action: any) => {
    return {
        ...state,
        regions: action.payload
    }
}

export default RegionReducer;
