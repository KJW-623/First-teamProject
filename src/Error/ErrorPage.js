import { Link } from "react-router-dom";

function ErrorPage() {

    const status = 404;
    const message = "존재하지 않는 페이지입니다.";

    return (
        <div style={{ padding: "100px", textAlign: "center" }}>
            <h1>🚫 {status} 오류</h1>
            <p>{message}</p>
            <Link
                to="/home"
                style={{
                    color: "#20e9a5",
                    textDecoration: "underline",
                    fontWeight: "bold",
                }}
            >
                <button style={{
                    backgroundColor:'#20e9a5',
                    border:'none',
                    color: 'white',
                    fontSize:'15px',
                    padding: '10px 10px',
                    borderRadius:'15px'
                }}>홈으로 돌아가기</button>
            </Link>
        </div>
    );
}

export default ErrorPage;