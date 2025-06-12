//창작자 정보
function ReviewHeader({ creatorInfo }) {
    return (
        <div className="creator-profile-header">
            <div className="profile-summary">
                    {/* 창작자 이미지 */}
                <img src={creatorInfo.avatar} className="profile-avatar" />
                <div className="profile-text">
                    <span className="profile-name">{creatorInfo.name}</span>
                    <span className="profile-level">Lv.{creatorInfo.level}</span>
                    <span className="profile-followers">팔로워 {creatorInfo.followers}</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewHeader;