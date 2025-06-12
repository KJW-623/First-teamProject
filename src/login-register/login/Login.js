import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import whiteLogo from "../../images/화이트 로고.png";

function Login() {
    const [ userId, setUserId ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ error, setError ] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!userId || !password) {
            setError("아이디와 비밀번호를 모두 입력하세요.");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.userId === userId && u.password === password);
        if (user) {
            alert("로그인 성공!");
            navigate("/home");
        } else {
            setError("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div className="auth-bg"></div>
            <div className="Navbar">
                <img src={process.env.PUBLIC_URL + "/images/whiteLogo.png"} alt="FundFlow Logo" className="navbar-logo" />
                <h1 className="fundflow-title">FundFlow</h1>
            </div>
            <div className="Container">
                <h3>간편하게 로그인해보세요</h3>
                <form onSubmit={handleSubmit}>
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
                    {error && <div style={{ color: "red", marginTop: "8px" }}>{error}</div>}
                    <button type="submit">로그인</button>
                </form>
                {/* ...생략... */}
                <div style={{ marginTop: "16px" }}>
                    <span>계정이 없으신가요? </span>
                    <Link to="/register">회원가입</Link>
                </div>
                <br />
                <div className="divider"><span>다른 방법으로 시작하기</span></div>
                <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "16px 0" }}>
                    <img src="https://w7.pngwing.com/pngs/344/368/png-transparent-naver-round-logo-search-engines-thumbnail.png" alt="네이버 로그인" className="loginOtherWay" />
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-kakaotalk-3185087-2661829.png?f=webp" alt="카카오 로그인" className="loginOtherWay" />
                    <img src="https://img.icons8.com/fluent/512/meta.png" alt="메타 로그인" className="loginOtherWay" />
                    <img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?semt=ais_hybrid&w=740" alt=" 로그인" className="loginOtherWay" />
                </div>
                <br />
                <Link to="/FoundPW">아이디/비밀번호 찾기</Link>
            </div>
        </div>
    );
}
export default Login;