
import { useState, useEffect } from 'react';
import HeartTabs from './HeartTabs';
import HeartFilter from './HeartFilter';
import HeartList from './HeartList';
import './Heart.css';

import { HeartData } from './HeartData';

const HeartPage = () => {
    const [activeTab, setActiveTab] = useState('liked'); 
    const [allProjects, setAllProjects] = useState([]);
    const [displayProjects, setDisplayProjects] = useState([]); 
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        setAllProjects(HeartData);
    }, []);

    useEffect(() => {
        let currentProjects = [...allProjects];

        if (activeTab === 'liked') {
            currentProjects = currentProjects.filter(p => p.liked);
        } else if (activeTab === 'notified') {
            currentProjects = currentProjects.filter(p => p.notified);
        }

        currentProjects.sort((a, b) => {
            if (sortOrder === 'latest') {
                return new Date(b.startDate) - new Date(a.startDate);
            } else if (sortOrder === 'popularity') {
                return b.currentAmount - a.currentAmount;
            }
            return 0;
        });

        setDisplayProjects(currentProjects); 
    }, [activeTab, allProjects, sortOrder]); 
    const likedCount = allProjects.filter(p => p.liked).length;
    const notifiedCount = allProjects.filter(p => p.notified).length;


    return (
        <div className="interest-project-page-container">
            <h1 className="page-title">관심 프로젝트</h1>
            <HeartTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
                likedCount={likedCount}
                notifiedCount={notifiedCount}
            />
            <HeartFilter
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
            />
            <HeartList
                projects={displayProjects}
                activeTab={activeTab}
            />
        </div>
    );
};

export default HeartPage;