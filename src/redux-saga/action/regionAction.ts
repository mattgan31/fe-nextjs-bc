import * as ActionRegion from '@/redux-saga/constant/regionConstant'

export const GetRegionReq: any = () => ({
    type: ActionRegion.GET_REGION_REQ
})

export const GetRegionSuccess: any = (payload: any) => ({
    type: ActionRegion.GET_REGION_OK, payload
})

export const GetRegionFail: any = (payload: any) => ({
    type: ActionRegion.GET_REGION_FAIL, payload
})

export const CreateRegionReq: any = (payload: any) => ({
    type: ActionRegion.CREATE_REGION_REQ, payload
})

export const CreateRegionSuccess: any = (payload: any) => ({
    type: ActionRegion.CREATE_REGION_OK, payload
})

export const CreateRegionFail: any = (payload: any) => ({
    type: ActionRegion.CREATE_REGION_FAIL, payload
})

export const DeleteRegionReq: any = (payload: any) => ({
    type: ActionRegion.DELETE_REGION_REQ, payload
})

export const DeleteRegionSuccess: any = (payload: any) => ({
    type: ActionRegion.DELETE_REGION_OK, payload
})

export const DeleteRegionFail: any = (payload: any) => ({
    type: ActionRegion.DELETE_REGION_FAIL, payload
})

export const UpdateRegionReq: any = (payload: any) => ({
    type: ActionRegion.UPDATE_REGION_REQ, payload
})

export const UpdateRegionSuccess: any = (payload: any) => ({
    type: ActionRegion.UPDATE_REGION_OK, payload
})

export const UpdateRegionFail: any = (payload: any) => ({
    type: ActionRegion.UPDATE_REGION_FAIL, payload
})
