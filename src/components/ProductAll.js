import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ProductAll = () => {

    const [sortOrder, setSortOrder] = useState('all');
    const handleSortChange = (newSortValue) => {
        setSortOrder(newSortValue);
    };

    const allProjects = [
        {
            creater: 'fund',
            title: "나만의 네버랜드를 기록하는 3개월 다이어리",
            desc: "2025년 7-9월, 즐기듯 기록하는 나만의 네버랜드 다이어리",
            percent: 787,
            currentAmount: '95,613,543',
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        ,
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        ,
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        ,
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
        {
            creater: 'fund',
            title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
            percent: 78,
            currentAmount: '191,000',
        },
        {
            creater: 'fund',
            title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
            desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
            percent: 150,
            currentAmount: '169,400',
        },
        {
            creater: 'fund',
            title: "대기업 시니어가 알려주는 디자이너 100팁",
            desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
            percent: 14,
            currentAmount: '148,000'
        },
    ];

    const displayedProjects = useMemo(() => {
        let tempProjects = [...allProjects];

        tempProjects = tempProjects.filter(Boolean);

        if (sortOrder === 'bottom') {
            tempProjects = tempProjects.filter(p => p.percent <= 75);
        } else if (sortOrder === 'middle') {
            tempProjects = tempProjects.filter(p => p.percent > 75 && p.percent <= 100);
        } else if (sortOrder === 'top') {
            tempProjects = tempProjects.filter(p => p.percent > 100);
        }
        return tempProjects;
    }, [sortOrder]);

    return (
        <>
            <div>
                <h1 className="recopro-title" style={{
                    margin:'50px'
                }}>인기 프로젝트</h1>
            </div>

            <div className="slect-box">
                <select className="slect-percentbox" style={{
                    marginLeft: '30px',
                    marginBottom: '30px',
                    padding: "5px"
                }}
                    value={sortOrder}
                    onChange={(e) => handleSortChange(e.target.value)}
                >
                    <option value="all">전체보기</option>
                    <option value="bottom">75% 이하</option>
                    <option value="middle">75% ~ 100%</option>
                    <option value="top">100% 이상</option>
                </select>
                <br></br>
            </div>

            <div className="recopro-list" style={{
                marginBottom: '30px'
            }}>
            <Link to="/details" style={{
                textDecorationLine: 'none',
                color: 'balck'
            }}>
                <div className="recopro-card">
                    <div className="recopro-thumb">
                        <img
                            src={`https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1Lzk2NzA1MmNkLWE1NzgtNDI2Yi04NDUyLTMzMzVjMGJlZjQxNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==`}
                        />
                    </div>
                    <div className="recopro-info">
                        <p style={{ fontSize: '10px' }}>fund</p>
                        <h3>여름나기 셔츠와 원피스, 반바지</h3>
                        <p style={{ fontSize: '12px' }}>원피스, 셔츠, 팬츠로 한복스런 여름나기</p>
                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                            color: 'black'
                        }}> 10,617,000원</span>
                        <span className="recopro-date"> 2123%</span>
                    </div>
                </div>
            </Link >
            {displayedProjects.map((p, idx) => (
                <div className="recopro-card" key={idx}>
                    <div className="recopro-thumb">
                        <img
                            src={`https://picsum.photos/seed/editor${idx}/400/300`}
                        />
                    </div>
                    <div className="recopro-info">
                        <p style={{ fontSize: '10px' }}>{p.creater}</p>
                        <h3>{p.title}</h3>
                        <p style={{ fontSize: '12px' }}>{p.desc}</p>
                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '18px'
                        }}>{p.currentAmount}원</span>
                        <span className="recopro-date"> {p.percent}%</span>
                    </div>
                </div>
            ))}
        </div >
        </>


    );
};

export default ProductAll;
