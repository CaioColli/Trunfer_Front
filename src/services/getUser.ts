import { getCookie } from "../utils/cookie";
import { api } from "./baseAPI"

export const fetchUser = async () => {
    const token = getCookie('token');

    const response = await api.get('/user', {
        headers: {
            Authorization: token,
        }
    });
    return response.data;
}