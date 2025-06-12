import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import whiteLogo from "../../images/화이트 로고.png";

function Register() {
    const [ email, setEmail ] = React.useState("");
    const [ userId, setUserId ] = React.useState(""); // 추가
    const [ password, setPassword ] = React.useState("");
    const [ confirmPassword, setConfirmPassword ] = React.useState("");
    const [ error, setError ] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!email || !userId || !password || !confirmPassword) { // userId 체크 추가
            setError("모든 필드를 입력하세요.");
            return;
        }
        if (password !== confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find(u => u.email === email)) {
            setError("이미 등록된 이메일입니다.");
            return;
        }
        if (users.find(u => u.userId === userId)) {
            setError("이미 사용 중인 아이디입니다.");
            return;
        }
        users.push({ email, userId, password }); // userId 저장
        localStorage.setItem("users", JSON.stringify(users));
        alert("회원가입 성공!");
        navigate("/login");
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div className="auth-bg"></div>
            <div className="Navbar">
                <img src={whiteLogo} alt="FundFlow Logo" className="navbar-logo" />
                <h1 className="fundflow-title">FundFlow</h1>
            </div>
            <div className="Container">
                <h3>간편하게 회원가입하세요</h3>
                <form onSubmit={handleSubmit}>
                    <div className="inputEmail">
                        <label htmlFor="email">이메일:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputEmail">
                        <label htmlFor="userId">아이디:</label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputEmail">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputEmail">
                        <label htmlFor="confirmPassword">비밀번호 확인:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div style={{ color: "red", marginTop: "8px" }}>{error}</div>}
                    <button type="submit">회원가입</button>
                </form>
                {/* ...이하 생략... */}
            </div>
        </div>
    );
}

export default Register;