import './recopro.css';

const projects = [
    {
        title: "나만의 네버랜드를 기록하는 3개월 다이어리",
        desc: "2025년 7-9월, 즐기듯 기록하는 나만의 네버랜드 다이어리",
        date: "2025-06-15"
    },
    {
        title: "선택에 따라 스토리가 달라지는 짜릿한 모험",
        desc: "선택에 따라 스토리가 달라지는 짜릿한 모험",
        date: "2025-06-20"
    },
    {
        title: "소비맥락을 기록하는 가계부, 오늘의 숫자",
        desc: "매일의 소비 내용과 소비 맥락을 기록하도록 가계부와 일기를 결합한 가계부, 오늘의 숫자",
        date: "2025-06-25"
    },
    {
        title: "대기업 시니어가 알려주는 디자이너 100팁",
        desc: "인쇄, 후가공부터 별색, 인쇄사고, 떨리는 첫감리, 이직노하우까지! 한권에 다 들어있다고?",
        date: "2025-07-01"
    }
];

function Recopro() {
    return (
        <div className="recopro-root">
            <h1 className="recopro-title">에디터 추천 프로젝트</h1>
            <div className="recopro-list">
                {projects.map((p, idx) => (
                    <div className="recopro-card" key={idx}>
                        <div className="recopro-thumb">
                            <img
                                src={`https://picsum.photos/seed/editor${idx}/400/300`}
                                alt="프로젝트 썸네일"
                            />
                        </div>
                        <div className="recopro-info">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <span className="recopro-date">추천일: {p.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recopro;