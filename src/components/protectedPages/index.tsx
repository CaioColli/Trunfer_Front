interface Props {
    children: React.ReactNode
}

export const ProtectedPages = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
}