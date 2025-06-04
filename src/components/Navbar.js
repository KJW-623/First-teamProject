import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import whiteLogo from '../images/화이트 로고.png';


const Navbar = () => {
    const[isCateOpen, setIsCateOpen] = useState(false);
const menuList = [ "카테고리", "홈", "인기", "공개예정", "추천" ];
const menuList2= [ "전체", "디자인 문구", "푸드", "영화ㆍ비디오", "디지털 게임", "홈ㆍ리빙", "의류", "예술", "테크ㆍ가전","잡화", "사진", "반려동물", "주얼리", "음악"]

    return (<>
        <div className="headerLayout">
               {/* 상단 로고 + 로그인 영역 */}
                <div className="head">
                    <div className="logo"> 
                        <a href="#">
                        <img width={110} src={whiteLogo}/>
                        </a>
                    </div>
                    <div className="login-botton">
                        <div className="project"><a href="" >프로젝트 올리기</a></div>
                        <div className="login">
                            <FontAwesomeIcon icon={faUser} /> 
                            <a href="">로그인/회원가입</a>
                        </div>                
                    </div>
                </div>

                {/* 카테고리 및 검색창 */}
                <div className="head-category" >
                    <div className="nav-category">
                        <ul className="menu-list">
                            <li
                            onClick={()=>
                                setIsCateOpen(!isCateOpen)}
                                style={{ cursor: "pointer" }}
                            >
                            <FontAwesomeIcon icon={faBars} />
                            </li>

                            {menuList.map((menu, index)=>{                        
                                <li key={index}>{menu}</li>
                            })}
                        </ul>
                    </div>  

                    <div>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input size= "20" className="mainsearch" type="text" placeholder="검색어를 입력해주세요.">
                    </input>
                    
                    </div>
                </div>
                    {isCateOpen && (
                        <div className="cate-dropdown">
                            <ul>
                                {menuList2.map((menu2, index)=>(
                                    <li key={index}>{menu2}</li>
                                ))}
                            </ul>
                            </div>
                    )}

        
        

        

        </div>
        
        </>
    )
};

export default Navbar;