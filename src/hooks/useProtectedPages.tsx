import { useLocation } from "wouter";
import { getCookie } from "../utils/cookie";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode
}

export const UseProtectedPages = ({ children }: Props) => {

    const token = getCookie('token');

    const [, setLocation] = useLocation();

    useEffect(() => {
        if (!token) {
            return setLocation('/');
        }
    }, [token])

    return (
        <>
            {children}
        </>
    )
}