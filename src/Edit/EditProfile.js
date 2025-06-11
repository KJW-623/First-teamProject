import './EditProfile.css'
import { useState, useEffect } from 'react';

const EditProfile = () => {
    const [profile, setProfile] = useState({
        profileImage: '',
        nickname: '',
        email: '',
        bio: '',
        website: '',
        instagram: '',
        twitter: '',
        facebook: '',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        } else {
            setProfile({
                profileImage: 'https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_640.jpg',
                nickname: 'fundflow',
                email: 'fundflow@gmail.com',
                bio: '안녕하세요! 펀드플로우에서 프로젝트를 진행하고 있는 사용자입니다.',
                website: 'https://www.mywebsite.com',
                instagram: 'my_instagram',
                twitter: 'my_twitter',
                facebook: 'my_facebook',
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevProfile => ({
                    ...prevProfile,
                    profileImage: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        setMessage('프로필 정보가 성공적으로 저장되었습니다!');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="profile-edit-container">
            <h1 className="profile-edit-title">프로필 편집</h1>
            <p className="profile-edit-subtitle">내 정보를 최신 상태로 유지하세요.</p>

            <form onSubmit={handleSubmit} className="profile-edit-form">
                <section className="profile-image-section">
                    <h2>프로필 이미지</h2>
                    <div className="profile-image-wrapper">
                        <img
                            src={profile.profileImage || 'https://via.placeholder.com/150'}
                            alt="프로필 이미지"
                            className="profile-preview-image"
                        />
                        <label htmlFor="profileImageInput" className="change-image-button">
                            이미지 변경
                            <input
                                id="profileImageInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                </section>

                <section className="profile-info-section">
                    <h2>기본 정보</h2>
                    <div className="form-group">
                        <label htmlFor="nickname">닉네임</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            value={profile.nickname}
                            onChange={handleChange}
                            placeholder="닉네임을 입력하세요"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">자기소개</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            placeholder="자신을 자유롭게 소개해주세요 (최대 100자)"
                            maxLength="100"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">배송지</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            placeholder="배송지를 입력하세요"
                        />
                    </div>
                </section>

                <section className="profile-social-section">
                    <h2>소셜 미디어 및 웹사이트</h2>
                    <div className="form-group">
                        <label htmlFor="website">웹사이트</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={profile.website}
                            onChange={handleChange}
                            placeholder="http:// 또는 https://"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="instagram">인스타그램 아이디</label>
                        <input
                            type="text"
                            id="instagram"
                            name="instagram"
                            value={profile.instagram}
                            onChange={handleChange}
                            placeholder="@ 포함하여 입력해주세요"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">트위터 아이디</label>
                        <input
                            type="text"
                            id="twitter"
                            name="twitter"
                            value={profile.twitter}
                            onChange={handleChange}
                            placeholder="@ 포함하여 입력해주세요"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebook">페이스북 URL</label>
                        <input
                            type="url"
                            id="facebook"
                            name="facebook"
                            value={profile.facebook}
                            onChange={handleChange}
                            placeholder="https://www.facebook.com/yourprofile"
                        />
                    </div>
                </section>

                {message && <p className="success-message">{message}</p>}

                <div className="form-actions">
                    <button className="Esave-button">
                        변경 사항 저장
                    </button>
                    <button className="cancel-button" onClick={() => window.history.back()}>
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;