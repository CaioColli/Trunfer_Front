import { useLocation } from "wouter";
import { getCookie } from "../../utils/cookie"
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/getUser";

export const InitialPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetchUser(),
    });

    console.log(data);

    const token = getCookie('token');

    const [, setLocation] = useLocation();

    useEffect(() => {
        if (!token) {
            return setLocation('/login');
        }
    }, [token, setLocation])

    return (
        <>
            <h1>Home</h1>
        </>
    )
}