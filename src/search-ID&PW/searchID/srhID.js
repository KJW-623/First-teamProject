import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./srhID.css";
import mintLogo from "../../images/민트 로고.png";

function SrhID() {
    const [ email, setEmail ] = useState("");
    const [ foundID, setFoundID ] = useState("");
    const [ error, setError ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setFoundID("");
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email);
        if (user) {
            setFoundID(user.email);
        } else {
            setError("해당 이메일로 등록된 아이디가 없습니다.");
        }
    };

    return (
    <div className="srh-id-outer">
        <div className="srh-id-container">
            <img
                src={mintLogo}
                alt="FundFlow Logo"
                className="mintLogo"
            />
            <h2>아이디 찾기</h2>
            <h4 style={{ opacity: '0.35', textAlign: 'left' }}>
                가입한 이메일 계정을 입력하면 비밀번호를 재설정할 수 있는 링크를 이메일로 발송해 드립니다.
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                    <label htmlFor="email" className="EmailINPUT">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">아이디 찾기</button><br /><br /><br />
                <Link to="/FoundPW">비밀번호 찾기</Link><br /><br />
                <Link to="/login">로그인</Link>
            </form>
            {foundID && (
                <div className="result">아이디: {foundID}</div>
            )}
            {error && (
                <div className="error">{error}</div>
            )}
        </div>
    </div>
);
}

export default SrhID;