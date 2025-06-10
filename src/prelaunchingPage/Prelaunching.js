import './Prelaunching.css';

const projects = [
    {
        title: "클래식의 품격,매킨토시 13in1 멀티허브",
        desc: "1980년대 매키토시가 2025년 눈앞에, 하지만 성능은 디지털 끝판왕 멀티허브!",
        date: "2025-05-30"
    },

    {
        title: "완전 귀요미 납작복숭아",
        desc: "유럽에서 만났던 그 납작복숭아가 왔어요 알러지 걱정 FREE로 누구나 더 귀엽고 맛있게!",
        date: "2025-05-31"
    },
    {
        title: "나라도검 삼베에디션 블랙",
        desc: "나라도검 장식/수련/교육용 가검 우리나라 전통 삼베를 감싼 도검",
        date: "2025-06-01"
    },
    {
        title: "퇴마사의 1:1맞춤영물 <오행팔찌&목걸이>",
        desc: "당신의 팔자를 바꿔줄 세상에서 단 하나 뿐인 1:1 맞춤팔찌",
        date: "2025-06-02"
    },
    {
        title: "날개로 감싸안은 책 <윙커버 & 해달인형>",
        desc: "핸드메이드로 제작한 엔젤코어 북커버와 해달둥둥 인형",
        date: "2025-06-03"
    },
    {
        title: "<비밀의 정원> 잉가 무어 일러스트 완역판",
        desc: "아름다운 자연 속에서 발견한 희망의 메시지 잉가 무어 일러스트 스페셜북 + 한정판 굿즈.",
        date: "2025-06-04"
    },
    {
        title: "최상급 다이아몬드&십자가 반지&펜던트",
        desc: "아름다운 십자가. 십자가로 만들어진 펜던트와 반지",
        date: "2025-06-05"
    },
    {
        title: "일상에 꽃 핀 전통 색채 [매화매듭 팔찌]",
        desc: "여름에 즐기는 리뉴얼 매화매듭 팔찌(8색) & 스크런치(6색)을 소개합니다",
        date: "2025-06-06"
    },
    {
        title: "맑은피부 30일 챌린지! 진짜검정보리차",
        desc: "카페인0%! 아이스아메리카노 대신 흑누리보리 루이보스! 1티백에 블루베리 80알의 폴리페놀",
        date: "2025-06-07"
    },
    {
        title: "편안한 가성비. 가심비 좋은 쌍둥이크로스백",
        desc: "2017년 첫 프로젝트 이후 8년이 지나도 찾는 쌍둥이 크로스백",
        date: "2025-06-08"
    },
    {
        title: "[갑골영패] '신'이 새긴 문자",
        desc: "하늘의 뜻을 듣기 위한 가장 오래된 언어, 갑골문을 재해석한 갑골영패",
        date: "2025-06-09"
    },
    {
        title: "한복의 멋을 현대적 감각으로, 3피스 한복",
        desc: "전통의 실루엣은 살리고, 일상 속 활동성과 실용성을 더해 매일 입고 싶은 한복 3피스 셋업",
        date: "2025-06-10"
    },

];

function getImageUrlByIndex(idx) {
    return `https://picsum.photos/seed/project${idx}/400/300`;
}

function Prelaunching() {
    return (
        <div className="prelaunching-root">
            <h1 className="soon-title">공개예정 프로젝트</h1>
            <p className="soon-desc">
                곧 공개될 새로운 펀드플로우 프로젝트들을 미리 만나보세요!<br />
                다양한 아이디어와 창작물을 기대해 주세요.
            </p>
            <div className="soon-list-grid">
                {projects.map((p, idx) => (
                    <div className="soon-card" key={idx}>
                        <div className="soon-thumb">
                            <img
                                src={getImageUrlByIndex(idx)}
                                alt="프로젝트 썸네일"
                            />
                        </div>
                        <div className="soon-info">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <span className="soon-date">공개예정: {p.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prelaunching;