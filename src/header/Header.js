import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const location = useLocation();
    const shouldHideHeader = location.pathname === '/login' || location.pathname === '/HelpCenter';

    if (shouldHideHeader) {
        return null;
    }
    return (
        <header className="main-header">
            <div className="header-top">
                <div className="header-logo">
                    <Link to="/"><img className="logo" src="../image/mintLogo.png" alt="Mint Logo" /></Link>
                </div>
                <div className="header-actions">
                    <Link to="/project-manage" className="action-link">프로젝트 생성</Link>
                    <button className="icon-button heart-icon">
                        <i className="fas fa-heart">❤️</i>
                    </button>
                    <button className="icon-button notification-icon">
                        <i className="fas fa-bell">🔔</i>
                    </button>
                    <div className="profile-dropdown">
                        <button className="profile-button">
                            <div className="profile-image-container">
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_640.jpg"
                                    alt="프로필 사진"
                                    className="profile-image"
                                />
                            </div>FundFlow
                        </button>
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                <ul className="nav-links">
                    <li>
                        <button className="category-button">
                            <i className="fas fa-bars"></i>
                            카테고리
                        </button>
                    </li>
                    <li><Link to="/popular">인기</Link></li>
                    <li><Link to="/new">신규</Link></li>
                    <li><Link to="/ending-soon">공개예정</Link></li>
                    <li><Link to="/editors-choice">에디터의 추천</Link></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="검색어를 입력해주세요." />
                    <button className="search-button">
                        <i className="fas fa-search">검색</i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;