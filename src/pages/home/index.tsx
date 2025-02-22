import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/getUser";

export const InitialPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetchUser(),
    });

    if (isLoading) {
        console.log('Carregando...');
    } else {
        console.log(data);
    }

    return (
        <>
            <h1>Home</h1>
        </>
    )
}