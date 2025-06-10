
import NotificationItem from './NotificationItem';

const NotificationList = ({ notifs, onDelete }) => {
    if (notifs.length === 0) {
        return <p className="no-notifications">새로운 알림이 없습니다.</p>
    }

    return (
        <div className="notification-list">
            {notifs.map((notif) => (
                <NotificationItem key={notif.id} notif={notif} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NotificationList;