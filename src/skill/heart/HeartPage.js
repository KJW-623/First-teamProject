
import { useState, useEffect } from 'react';
import HeartTabs from './HeartTabs';
import HeartFilter from './HeartFilter';
import HeartList from './HeartList';
import './Heart.css';

import { HeartData } from './HeartData';

const HeartPage = () => {
    // 활성화된 탭
    const [activeTab, setActiveTab] = useState('liked'); 

    //모든 관심 프로젝트 데이터
    const [allProjects, setAllProjects] = useState([]);

    //화면 표시 목록
    const [displayProjects, setDisplayProjects] = useState([]); 

    //정렬기준
    const [sortOrder, setSortOrder] = useState('latest');


    //HeartData 초기화
    useEffect(() => {
        setAllProjects(HeartData);
    }, []);

    //
    useEffect(() => {
        let currentProjects = [...allProjects];

        //좋아한, 알림 신청 탭 전환
        if (activeTab === 'liked') {
            currentProjects = currentProjects.filter(p => p.liked);
        } else if (activeTab === 'notified') {
            currentProjects = currentProjects.filter(p => p.notified);
        }

        //최신순 인기순 정렬
        currentProjects.sort((a, b) => {
            if (sortOrder === 'latest') {
                return new Date(b.startDate) - new Date(a.startDate);
            } else if (sortOrder === 'popularity') {
                return b.currentAmount - a.currentAmount;
            }
            return 0;
        });

        //displayProjects  표시
        setDisplayProjects(currentProjects); 
    }, [activeTab, allProjects, sortOrder]); 
    //좋아한 수
    const likedCount = allProjects.filter(p => p.liked).length;
    //알림 신청 수
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