import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import whiteLogo from "../../images/화이트 로고.png";

function Register() {
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ confirmPassword, setConfirmPassword ] = React.useState("");
    const [ error, setError ] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!email || !password || !confirmPassword) {
            setError("모든 필드를 입력하세요.");
            return;
        }
        if (password !== confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }
        // 유저 id 저장 로직
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find(u => u.email === email)) {
            setError("이미 등록된 이메일입니다.");
            return;
        }
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("회원가입 성공!");
        navigate("/login");
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div className="auth-bg"></div>
            <div className="Navbar">
                <img
                    src={whiteLogo}
                    alt="FundFlow Logo"
                    className="navbar-logo"
                />
                <h1 className="fundflow-title">FundFlow</h1>
            </div>
            <div className="Container">
                <h3>간편하게 회원가입하세요</h3>
                <br></br>
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
                <div className="divider"><span>다른 방법으로 회원가입</span></div>
                <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: "12px" }}>
                    <img className="loginOtherWay" src="https://cdn-icons-png.flaticon.com/512/4494/4494622.png" alt="카카오톡" />
                    <img className="loginOtherWay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCa8rUxSS0puzXCVlrgyANkgQfSJZUss4fw&s" alt="페이스북" />
                    <img className="loginOtherWay" src="data:image/jpeg;base64,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" alt="이메일" />
                    <img className="loginOtherWay" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD///8lJSW1tbXy8vL8/PykpKTGxsbs7Oz29vZgYGDp6empqamwsLDZ2dne3t6ampqJiYl5eXnT09NWVlY4ODjNzc1lZWVRUVG+vr6QkJBISEhvb289PT1JSUlqamp/f38MDAyOjo4bGxszMzMsLCwiIiKP/YGqAAADhUlEQVR4nO3c6VbiQBCGYRqSsBMWBRGQxdH7v8QJKEowC5CKVcT3+Ts5x/qGkO6u7lCrAQAAAAAAAAAAAAAAAAAAAADwt9TXD9ollGncbDvX0K6iNNue7/YqmzBwn/ralZTjoX0M6ALtWkrx9QFGRtrFlKF5EtA9aldTgulpQKddTQkasYBN7XLkbWIB3Vi7HnFv8YAVvEkH8YA97XrELSv/EbbiAas33M/iAT3teuTFh0L3pF2PvHjAoXY58uJj4Vy7nBI0qh4wNhhW8BaNfK8K/Y52LeX4CljZ1sUx35t2IaXx/HbYWGpXgUvVZ5vn4W68Sr1guwyaoee1BvPh+hfrkrEdTb8em/5k9/rzilUQxkb/cFj//TJv9nA2+3RucraSf+6eXxGZ3kt/fzFIqN75/cXxglkz6YLDf8Q/zcIv1Ugr33WD2Xt92W+nXuDuYaKz8rLqv8BEO0GOdcF8ka52hkyb/AD5WtopMowlAkYDh3aOVE8yAQ1Py/2qJ5xIBbS6chT6EjrP7OxN6B61+yQdygQ03CKWCejM3qK1nUzAmXaOdEmroesZ7qA+igT0tWNkCPLLv8CzdowMYX75+Sx/hDJPUssb3h2RhJZbGCLDvd3ZTC2rN3MFqyuKg8Tu2rVMn+Br5defz+qi6UBkXWF3SloTGiy0Q2QiIQkPLA/4MgkNrw2FEu60U2TJ3E66lOk5jcgK33ATSqoZbPkISl8koeXTtDLN0rZ2jAwCG6N7G+0c6V5lElp+1sgktPxN/HGA5kaL/D+lRKZfavlh8yKU0PBJDLEdbrPHFFIPcl2tu9XOkkzkJM0HqyfA5RJaXWWIncTY8y32TgVv0z2LL+nLJrR4mFZk7+LI5Mi/kExoc4Iqsg/8yeaYeP6GbwFW39EX2YE6eNGOkkLq7J4baCdJJfUhWhwqPgi1aywf1xfZ7Xbpb0rpEzn8ZXPefdQrHtD0yahI0VdmnLP+/mXhhs1UO0Gugl036/foXrGdNtMbwZ/qRQLafo4eFZiB2+2Wxt2+m2j6WNSpW7tSRtuISW5bDG+0y75G6gPVTz+2YbGDmCFhDh4GnffDv60284Rtjrv7ZbqzGao3jP/qwPpsx9Gzu3OY6unkyzhN+FWIt973B+nbf0k9UWceLfr9VnOU1jnr9CatthfO7+4GBQAAAAAAAAAAAAAAAAAAAAAAAAAAAIA/7j8xviXsgcMNmQAAAABJRU5ErkJggg==" alt="애플" />
                </div>
                <div style={{ marginTop: "16px" }}>
                    <span>이미 계정이 있으신가요? </span>
                    <Link to="/login">로그인</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;