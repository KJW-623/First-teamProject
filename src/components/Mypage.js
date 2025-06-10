import React, { useState } from "react";
import "./Mypage.css";

function Mypage() {
    const profileCate = [
        "프로필",
        "작성한 후기",
        "창작생태계 기여도",
        "팔로워",
        "팔로잉",
    ];

    const [selectedCate, setSelectedCate] = useState("프로필");

    // 더미 유저 데이터
    const user = {
        name: "FundFlow",
        profileImg: "https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_640.jpg",
    };

    // 카테고리별 콘텐츠 정의
    const renderContent = () => {
        switch (selectedCate) {
            case "프로필":
                return <p>이곳에 사용자 프로필 정보를 보여줍니다.</p>;
            case "작성한 후기":
                return <p>작성한 후기가 여기에 표시됩니다.</p>;
            case "창작생태계 기여도":
                return <p>기여도 수치 또는 활동 내용이 나타납니다.</p>;
            case "팔로워":
                return <p>팔로워 목록이 여기에 보여집니다.</p>;
            case "팔로잉":
                return <p>사용자가 팔로우한 목록입니다.</p>;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="mypage-layout">
                {/* 왼쪽: 프로필 정보 */}
                <div className="layout-left">
                    <div className="name-profile">
                        <div className="profile-shot">
                            <img
                                src={user.profileImg || "/default-profile.png"}
                                width={120}
                            />
                        </div>
                        <div className="nickname">
                            <h3 color="#d5ebe3">{user.name}</h3>
                            <div className="profile-status">
                                <p>팔로잉 <a href="#">›</a></p>
                                <p>후원수 <a href="#">›</a></p>
                                <p>창작생태계 기여도 <a href="#">›</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="profile-cate">
                        <ul>
                            {profileCate.map((cate, index) => (
                                <li
                                    key={index}
                                    className={selectedCate === cate ? "active" : ""}
                                    onClick={() => setSelectedCate(cate)}
                                >
                                    {cate}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="profile-introduction">
                        <div className="selected-content">
                            {renderContent()}
                        </div>
                    </div>

                </div>

                {/* 오른쪽: 콘텐츠 표시 영역 */}
                <div className="layout-right">
                    <div className="profile-edit-button">
                        <button >프로필 편집</button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Mypage;
