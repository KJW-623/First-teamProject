import './Heart.css';

// activeTab, onTabChange, likedCount, notifiedCount  받기
const HeartTabs = ({ activeTab, onTabChange, likedCount, notifiedCount }) => {
    return (
        <div className="project-tabs">
            {/* activeTab로 탭전환 (좋아한, 알림신청) */}
            <button
                className={`tab-button ${activeTab === 'liked' ? 'active' : ''}`}
                onClick={() => onTabChange('liked')}
            >
                좋아한 <span className="count">{likedCount}</span>
            </button>
            <button
                className={`tab-button ${activeTab === 'notified' ? 'active' : ''}`}
                onClick={() => onTabChange('notified')}
            >
                알림신청 <span className="count">{notifiedCount}</span>
            </button>
        </div>
    );
};

export default HeartTabs;