import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Navbar.css';
import whiteLogo from '../images/화이트 로고.png';


function Navbar() {
    const menuList = [ "카테고리", "홈", "인기", "공개예정", "추천" ];


    return (
        <>

            <div className="headerLayout">
                <div className="nav-logo">
                    <img width={100} src={whiteLogo} />
                </div>
                <div className="login-botton">
                    <div className="project" >프로젝트 올리기</div>
                    <div className="login">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        로그인/회원가입
                    </div>
                </div>
            </div>

            <div className="category">
                <ul className="menu-list">
                    {menuList.map((menu, idx) => (
                        <li key={idx}>{menu}</li>
                    ))}
                </ul>
            </div>


        </>
    )
};

export default Navbar;