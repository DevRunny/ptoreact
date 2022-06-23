import React from "react";

interface IErrorNotFoundProps {
    errorInfo: any
}

export const ErrorNotFound: React.FC<IErrorNotFoundProps> = ({errorInfo}) => {
    return (
        <>
            <h1>Такой страницы не существует</h1>
            <h2>{errorInfo}</h2>
        </>
    )
}