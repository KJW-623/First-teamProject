import './Header.css';

function Header() {
    return (
        <header className="help-center-header">
            <div className="header-left">
                <a href="/home" className="logo">
                    <img className="logo"  src={process.env.PUBLIC_URL + "/images/mintLogo.png"} />
                </a>
                <span className="separator"></span>
                <span className="help-center-title">헬프센터</span>
            </div>
        </header>
    );
}

export default Header;