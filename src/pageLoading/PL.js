import React, { useEffect, useState } from "react";
import "./PL.css";

function PageLoading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 예시: 2초 후 로딩 종료
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="page-loading-overlay">
            <div className="page-loading-spinner"></div>
            <div className="page-loading-text">로딩 중...</div>
        </div>
    );
}

export default PageLoading;