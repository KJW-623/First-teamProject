
import HeartCard from './HeartCard';
import './Heart.css';

const HeartList = ({ projects, activeTab }) => {
    if (projects.length === 0) {
        if (activeTab === 'notified') {
            return (
                <div className="no-projects-message">
                    <div className="info-box">
                        <span className="info-icon">ⓘ</span> 알림신청한 프로젝트가 공개된 이후에 좋아한 프로젝트 목록에서 확인할 수 있어요.
                        <button className="close-btn">×</button>
                    </div>
                    <p className="empty-text">발견된 프로젝트가 없습니다.</p>
                </div>
            );
        }
        return <p className="no-projects-message">관심 프로젝트가 없습니다.</p>;
    }

    return (
        <div className="project-list-grid">
            {projects.map((project) => (
                <HeartCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default HeartList;