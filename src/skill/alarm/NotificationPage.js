
import { useState, useEffect, useMemo } from 'react';
import NotificationTabs from './NotificationTabs';
import NotificationList from './NotificationList';
import './Notification.css';

const NotificationPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [notif, setNotifs] = useState([]);

    useEffect(() => {
        setNotifs(notif);
    }, []);

    const filteredNotifs = useMemo(() => {
        if (activeTab === 'all') {
            return notif;
        }
        return notif.filter(n => n.type === activeTab);
    }, [activeTab, notif]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

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