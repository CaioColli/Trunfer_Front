import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/getUser";

export const getUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
        retry: false // Não tentar novamente se falhas
    })
}