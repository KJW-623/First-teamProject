import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {

    const location = useLocation();
    const shouldHideHeader = location.pathname === '/login' || location.pathname === '/HelpCenter' || location.pathname === '/register'
        || location.pathname === '/FoundID' || location.pathname === '/FoundPW';

    const [isCateOpen, setIsCateOpen] = useState(false);
    const [isMyOpen, setIsMyOpen] = useState(false);

    if (shouldHideHeader) {
        return null;
    }
    return (
        <header className="main-header">
            <div className="header-top">
                <div className="header-logo">
                    <Link to="/home"><img className="logo" src="/images/mintLogo.png" alt="Mint Logo" /></Link>
                </div>
                <div className="header-actions">
                    <Link to="/ProjectCreate" className="action-link">프로젝트 생성</Link>
                    <button className="icon-button">
                        <Link to="/Like" className="action-link">❤️</Link>
                    </button>
                    <button className="icon-button">
                        <Link to="/Notification" className="action-link">🔔</Link>
                    </button>
                    <button className="icon-button">
                        <Link to="/Community" className="action-link">💬</Link>
                    </button>
                    <div className="profile-dropdown">
                        <button className="profile-button" onClick={() => setIsMyOpen(!isMyOpen)}>
                            <div className="profile-image-container">
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_640.jpg"
                                    alt="프로필 사진"
                                    className="profile-image"
                                />
                            </div>FundFlow
                        </button>
                        {isMyOpen && (
                            <div className="Mypage-dropdown">
                                <ul>
                                    <Link to="/MyPage" className="action-link"><li>마이페이지</li></Link>
                                    <Link to="/login" className="action-link"><li>로그아웃</li></Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                <ul className="nav-links">
                    <li>
                        <button className="category-button">
                            <i className="fas" onClick={() => setIsCateOpen(!isCateOpen)}>카테고리</i>
                        </button>
                        {isCateOpen && (
                            <div className="cate-dropdown">
                                <ul>
                                    <li>전체</li>
                                    <li>디자인 문구</li>
                                    <li>푸드</li>
                                    <li>영화ㆍ비디오</li>
                                    <li>디지털 게임</li>
                                    <li>홈ㆍ리빙</li>
                                    <li>의류</li>
                                    <li>예술</li>
                                    <li>테크ㆍ가전</li>
                                    <li>잡화</li>
                                    <li>사진</li>
                                    <li>반려동물</li>
                                    <li>주얼리</li>
                                    <li>음악</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><Link to="/home">홈</Link></li>
                    <li><Link to="/popular">인기</Link></li>
                    <li><Link to="/open-soon">공개예정</Link></li>
                    <li><Link to="/RecommandProjects">MD 추천</Link></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="검색어를 입력해주세요." />
                    <button className="search-button">
                        검색
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;