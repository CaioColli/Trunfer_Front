import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/getUser";

export const InitialPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetchUser(),
        refetchOnWindowFocus: false
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