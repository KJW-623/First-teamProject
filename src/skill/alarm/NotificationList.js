
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifs, onDelete }) => {
    //알림 데이터가 없는 경우
    if (notifs.length === 0) {
        return <p className="no-notifications">새로운 알림이 없습니다.</p>
    }

    //알림 목록 내보내기
    return (
        <div className="notification-list">
            {notifs.map((notif) => (
                <NotificationItem key={notif.id} notif={notif} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NotificationList;