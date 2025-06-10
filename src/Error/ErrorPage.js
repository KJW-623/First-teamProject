import React from "react";
import { useRouteError, Link } from "react-router-dom";
import './ErrorPage.css';

function ErrorPage() {
    const error = useRouteError();
    let status = 404;
    if (error?.status) {
        status = error.status;
    }else if (error?.message?.includes("Failed to fatch")) {
        status = 500;
    }
     
    const message =
        error?.data?.message ||
        error?.statusText ||
        (status === 404
            ? "존재하지 않는 페이지입니다."
            : "알 수 없는 오류가 발생했습니다.");

    return (
        <div style={{ padding: "100px", textAlign: "center" }}>
            <h1>🚫 {status} 오류</h1>
            <p>{message}</p>
            <Link
                to="/"
                style={{
                    color: "#ff6b6b",
                    textDecoration: "underline",
                    fontWeight: "bold",
                }}
            >
                홈으로 돌아가기
            </Link>
        </div>
    );
}

//404에러 페이지 컴포넌트

export default ErrorPage;
