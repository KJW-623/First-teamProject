
//알림 탭 전환
const NotificationTabs = ({ activeTab, onTabChange }) => {
    return (
        <div className="notification-tabs">
            <button
                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => onTabChange('all')}
            >
                전체
            </button>
            <button
                className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`}
                onClick={() => onTabChange('activity')}
            >
                활동
            </button>
            <button
                className={`tab-button ${activeTab === 'project' ? 'active' : ''}`}
                onClick={() => onTabChange('project')}
            >
                프로젝트
            </button>
        </div>
    );
};

export default NotificationTabs;