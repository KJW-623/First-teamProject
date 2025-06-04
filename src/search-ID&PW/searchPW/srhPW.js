import './srhPW.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import mintLogo from "../../images/민트 로고.png";

function SrhPW() {
    const [id, setId] = useState("");
    const [foundPW, setFoundPW] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setFoundPW("");
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === id || u.ID === id);
        if (user) {
            setFoundPW(user.password || user.pw || "비밀번호 정보 없음");
        } else {
            setError("해당 아이디(이메일)로 등록된 계정이 없습니다.");
        }
    };

    return (
        <div className="srh-pw-outer">
            <div className="srh-pw-container">
                <img
                    src={mintLogo}
                    alt="FundFlow Logo"
                    className="mintLogo"
                />
                <h2>비밀번호 찾기</h2>
                <h4 style={{opacity:'0.35', textAlign:'left'}}>
                    가입한 아이디(이메일)를 입력하면 비밀번호를 확인할 수 있습니다.<br/>
                </h4>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="id">아이디(이메일):</label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={e => setId(e.target.value)}
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