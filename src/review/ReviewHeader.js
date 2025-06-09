
function ReviewHeader({ creatorInfo, activeTab }) {
    return (
        <div className="creator-profile-header">
            <div className="profile-summary">
                <img src={creatorInfo.avatar} alt={creatorInfo.name} className="profile-avatar" />
                <div className="profile-text">
                    <span className="profile-name">{creatorInfo.name}</span>
                    <span className="profile-level">Lv.{creatorInfo.level}</span>
                    <span className="profile-followers">팔로워 {creatorInfo.followers}</span>
                </div>
            </div>
            <nav className="profile-tabs">
                <a href="#" className={activeTab === 'posts' ? 'active' : ''}>게시물</a>
                <a href="#" className={activeTab === 'community' ? 'active' : ''}>커뮤니티</a>
                <a href="#" className={activeTab === 'reviews' ? 'active' : ''}>후기</a>
            </nav>
        </div>
    );
}

export default ReviewHeader;