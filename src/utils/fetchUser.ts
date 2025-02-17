import { api } from "../services/baseAPI";
import { getCookie } from "./cookie"

export const Teste = async () => {
    const token = getCookie('token');
    
    if (!token) {
        throw new Error('Usuário não autenticado.');
    }

    const response = await api.get('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}