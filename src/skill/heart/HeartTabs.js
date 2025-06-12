import './Heart.css';

const HeartTabs = ({ activeTab, onTabChange, likedCount, notifiedCount }) => {
    return (
        <div className="project-tabs">
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