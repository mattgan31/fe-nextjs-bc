import axios from 'axios';
import config from '@/config/config';

const GetRegion = async () => {
    try {
        const result = await axios.get(`${config.domain}/regions`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const CreateRegion = async (payload: any) => {
    try {
        const result = await axios.post(`${config.domain}/regions/upload`, payload);

        return result.data;
    } catch (error) {
        return error;
    }
}

const DeleteRegion = async (payload: any) => {
    try {
        const result = await axios.delete(`${config.domain}/regions/${payload}`, );

        return result.data;
    } catch (error) {
        return error;
    }
}

const UpdateRegion = async ( id:number, payload: any) => {
    try {
        const result = await axios.put(`${config.domain}/regions/${id}`, payload);

        return result.data;
    } catch (error) {
        return error;
    }
}

const RegionApi = {
    GetRegion,
    CreateRegion,
    DeleteRegion,
    UpdateRegion
}

export default RegionApi
