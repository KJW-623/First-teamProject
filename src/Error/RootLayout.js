import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            {/* 공통 레이아웃 영역 */}
            <header></header>

            {/* 자식 라우트를 렌더링하는 자리입니다 */}
            <main>
                <Outlet />
            </main>

            <footer></footer>
        </div>
    );
}

export default RootLayout;
