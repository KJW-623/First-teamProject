import { Link } from "react-router-dom";

function CommunityInfoPanel({ projectInfo, creatorInfo }) {
    return (
        <div className="chat-info-panel">
            <div className="info-section">
                <h3>창작자 정보</h3>
                <div className="profile-info">
                    <div className="avatar">
                        <img src={creatorInfo.avatar || 'https://via.placeholder.com/60'} />
                    </div>
                    <div className="profile-text">
                        <span className="name">{creatorInfo.name}</span>
                        <span className="level">Lv.{creatorInfo.level} ({creatorInfo.rating})</span>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="profile-stat-item">
                        <strong>{creatorInfo.totalOrders}</strong>
                        <span>총 접수</span>
                    </div>
                    <div className="profile-stat-item">
                        <strong>{creatorInfo.completedOrders}</strong>
                        <span>완료</span>
                    </div>
                    <div className="profile-stat-item">
                        <strong>{creatorInfo.reviews}</strong>
                        <span>평가</span>
                    </div>
                    
                </div>
                <Link to='/Review'>
                <button className="review-btn">창작자 후기 보러가기</button></Link>
            </div>

            <div className="info-section">
                <h3>프로젝트 정보</h3>
                <div className="project-details">
                    <p><strong>남은 프로젝트 기간:</strong> {projectInfo.remainingTime}</p>
                    <p><strong>수수료 제외 정산 가능 금액:</strong> {projectInfo.payableAmount}</p>
                    <p>{projectInfo.note}</p>
                </div>
                <div className="action-buttons">
                    <button className="end-chat-button">채팅 종료하기</button>
                </div>
            </div>
        </div>
    );
}

export default CommunityInfoPanel;