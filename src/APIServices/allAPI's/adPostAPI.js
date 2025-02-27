import { baseURL } from "../baseURL"
import { commonAPI } from "../commonAPI"

export const adPostAPI = async (data, headers) => {
    return await commonAPI('post', `${baseURL}/adPost`, data, headers)
}