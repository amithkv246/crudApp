import { baseURL } from "../baseURL"
import { commonAPI } from "../commonAPI"

export const registerAPI = async (data) => {
    return await commonAPI('post',`${baseURL}/register`,data,"")
}

export const loginAPI = async (data) => {
    return await commonAPI('post',`${baseURL}/login`,data,"")
}