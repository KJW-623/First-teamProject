
import { useState, useEffect, useMemo } from 'react';
import NotificationTabs from './NotificationTabs';
import NotificationList from './NotificationList';
import './Notification.css';

const NotificationPage = () => {
    //탭 전환
    const [activeTab, setActiveTab] = useState('all');
    //알림 목록
    const [notif, setNotifs] = useState([]);

    //알림상태 업데이트
    useEffect(() => {
        setNotifs(notif);
    }, []);

    //필터링된 알림
    const filteredNotifs = useMemo(() => {
        if (activeTab === 'all') {
            return notif;
        }
        return notif.filter(n => n.type === activeTab);
    }, [activeTab, notif]);

    //ActiveTab 업데이트
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    //삭제 기능
    const handleDeleteNotif = (id) => {
        setNotifs(prevNotifs => prevNotifs.filter(n => n.id !== id));
    };

    return (
        <div className="notification-page-container">
            <h1 className="page-title">알림</h1>
            <NotificationTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <NotificationList notifs={filteredNotifs} onDelete={handleDeleteNotif} />
        </div>
    );
};

export default NotificationPage;