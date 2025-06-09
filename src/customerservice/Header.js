import './Header.css';

function Header() {
    return (
        <header className="help-center-header">
            <div className="header-left">
                <a href="/" className="logo">
                    <img className="logo" src="../image/mintLogo.png" alt="Mint Logo" />
                </a>
                <span className="separator"></span>
                <span className="help-center-title">헬프센터</span>
            </div>
            <div className="header-right">
                <a href="#" className="header-link">헬프센터 둘러보기</a>
                <a href="#" className="header-link primary-button">문의하기</a>
            </div>
        </header>
    );
}

export default Header;