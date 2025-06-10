import './infoBanner.css';
import { RiFacebookFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function infoBanner() {
    return (
        <div>
            <footer className="footer">
                <div className="footerWrapper">
                    <div className="subWrapLeft">
                        <img className="logo" src="../image/mintLogo.png" />
                        <div className="customerService">
                            <div className="csInfo">
                                <span className="csName">고객센터</span>
                                <span className="csNumber">041-561-1122</span>
                                <div className="csEmail">fundflow@project.co.kr</div>
                                <div className="csTime">
                                    <p>상담전화 09:00~17:30(평일)</p>
                                    <p className="talkOperationTime">상담톡 09:00~17:30(평일)</p>
                                </div>
                            </div>

                            <div className="snsIcon">
                                <div className="iconWrapper">
                                    <RiFacebookFill className="icon" />
                                </div>
                                <div className="iconWrapper">
                                    <FiInstagram className="icon" />
                                </div>
                                <div className="iconWrapper">
                                    <FaYoutube className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='contents'>
                        <div className="content-column">
                            <h4 className="column-title">펀드플로우</h4>
                            <ul>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">서비스 소개</a></li>
                                <li className="with-icon"><a href="#">채용</a> <span className="icon-new">N</span></li>
                                <li><a href="#">2025 펀드플로우 결산</a></li>
                                <li><a href="#">펀드플로우 광고센터</a></li>
                            </ul>
                        </div>

                        <div className="content-column">
                            <h4 className="column-title">이용안내</h4>
                            <ul>
                                <li><a href="#">헬프 센터</a></li>
                                <li><a href="#">첫 후원 가이드</a></li>
                                <li className="highlight-link"><a href="#">창작자 가이드</a></li>
                                <li><a href="#">수수료 안내</a></li>
                                <li><a href="#">제휴 협력</a></li>
                            </ul>
                        </div>
                        <div className="content-column">
                            <h4 className="column-title">정책</h4>
                            <ul>
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">개인정보처리방침</a></li>
                                <li><a href="#">프로젝트 심사 기준</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="subWrapRight">
                        <div className="customer-support-column">
                            <h4 className="column-title">고객지원</h4>
                            <div className="cs-time-image">
                                평일 9:00 - 17:30 (<span className="highlight-time">12:50 - 13:40 제외</span>)
                            </div>
                            <Link to="/HelpCenter"><button className="inquiry-button">펀드플로우에 문의</button></Link>
                        </div>

                        <div className="companyInfo">
                            <p className="address">
                                충청남도 천안시 동남구 대흥동 134 (백자빌딩) 7층 | 사이트 운영자
                                : 주식회사 펀드플로우 | 대표자 : 박상진
                            </p>
                            <p className="bizInfo">
                                사업자 등록번호 : 041-56-11122 사업자정보확인 | 크라우드펀딩
                                등록번호 : 제 50530 호 | 개인정보보호책임자 : 김지우
                            </p>
                        </div>
                        <div className="copyright">
                            Copyright © 2025. FundFlow Co. Ltd.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default infoBanner;