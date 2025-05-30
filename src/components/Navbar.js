import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import whiteLogo from '../images/화이트 로고.png';


const Navbar = () => {
const menuList = [ "카테고리", "홈", "인기", "공개예정", "추천" ];
const menuList2= [ "전체", "디자인 문구", "푸드", "영화ㆍ비디오", "디지털 게임", "홈ㆍ리빙", "의류", "예술", "테크ㆍ가전","잡화", "사진", "반려동물", "주얼리", "음악"]

    return (<>
        <div className="headerLayout">

                <div className="head">
                    <div className="logo" a href="#">
                        <img width={110} src={whiteLogo}/>
                    </div>
                    <div className="login-botton">
                        <div className="project" a href="" >프로젝트 올리기</div>
                        <div className="login">
                            <FontAwesomeIcon icon={faUser} /> 
                            <a>로그인/회원가입</a>
                        </div>                
                    </div>
                </div>

                <div className="head-category" >
                    <div className="nav-category">
                        <ul className="menu-list">
                        <div onClick={()=>{
                            {menuList2.map((menu2)=>{
                                return <li>{menu2}</li>
                            })}
                        }} className="category-bars">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                            {menuList.map((menu)=>{                        
                            return <li>{menu}</li>
                            })}
                        </ul>
                    </div>  

                    <FontAwesomeIcon icon={faSearch}/>
                    <input size= "20" className="mainsearch" type="text">
                    </input>
                    
                    
                </div>
        

        
        

        

        </div>
        
        </>
    )
};

export default Navbar;