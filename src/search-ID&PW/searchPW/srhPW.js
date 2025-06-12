import './srhPW.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import mintLogo from "../../images/민트 로고.png";

function SrhPW() {
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [foundPW, setFoundPW] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setFoundPW("");
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.userId === userId && u.email === email);
        if (user) {
            setFoundPW(user.password || "비밀번호 정보 없음");
        } else {
            setError("아이디와 이메일이 일치하는 계정이 없습니다.");
        }
    };

    return (
        <div className="srh-pw-outer">
            <div className="srh-pw-container">
                <img src={mintLogo} alt="FundFlow Logo" className="mintLogo" />
                <h2>비밀번호 찾기</h2>
                <h4 style={{opacity:'0.35', textAlign:'left'}}>
                    가입한 아이디와 이메일을 모두 입력하면 비밀번호를 안내해 드립니다.
                </h4>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="userId" className='idINPUT'>아이디:</label>
                        <input
                            type="text"
                            id="userId"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="email">이메일:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">비밀번호 찾기</button>
                    <br /><br /><br />
                    <Link to="/FoundID">아이디 찾기</Link> <br /><br />
                    <Link to="/login">로그인</Link>
                </form>
                {foundPW && (
                    <div className="result">비밀번호: {foundPW}</div>
                )}
                {error && (
                    <div className="error">{error}</div>
                )}
            </div>
        </div>
    );
}

export default SrhPW;