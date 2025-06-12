import { useState } from 'react';
import './Home.css';

const heroSlides = [
    {
        id: 1,
        title: '여름나기 셔츠와 원피스, 반바지',
        subtitle: '원피스, 셔츠, 팬츠로 한복스런 여름나기',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1Lzk2NzA1MmNkLWE1NzgtNDI2Yi04NDUyLTMzMzVjMGJlZjQxNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
        link: '/details',
    },
    {
        id: 2,
        title: '하찮고 귀여운 동물 친구들',
        subtitle: '커들리 프렌즈 인형 4총사',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvNzA2ZGM1MGItMjZiNi00YzEyLWFmZTktNDg5ODM0NmMzZjUzL2Y1MzI2MTcxLTlhNWMtNGE0OC1iZGY2LTRjMzZhZjdiZjAyYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
        link: '#',
    },
    {
        id: 3,
        title: '가장 쉽게 가벼워지는 방법',
        subtitle: '최대 -31% 칼로리 저감 풀스텐 밥솥',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvYmY1ZTI2NjEtOGE3YS00MzFjLTlmZWYtZGNiNGZlNGNhNTEyLzk1Y2NhNzEwLTc4ZWItNDZjNi1hZmM4LTQ1MDA3NDkwYjliNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
        link: '#',
    },
];

const popularProjects = [
    {
        id: 1,
        title: '여름나기 셔츠와 원피스, 반바지',
        creator: '현대한복',
        fundingPercentage: 1009,
        amountPledged: 80000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1LzBhNmIzY2Y1LWRlYzItNDdjNy05NDdlLTg4ZmYyZjdjODdjZS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 2,
        title: '내 책상 위 작은 정원, 생화 플라워 문진',
        creator: 'Namy & Moody',
        fundingPercentage: 2693,
        amountPledged: 130000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZjEzODgxNmEtODViNi00MTQzLTk4ZmEtMzAzNzA0N2M2YzhhLzljZTZkNDliLWU5MWMtNDUxYS04YTY4LTdkMzY2MzIxZjBkMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
    },
    {
        id: 3,
        title: '더하루과일바스켓',
        creator: '일류',
        fundingPercentage: 2422,
        amountPledged: 240000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZGE2OGU3ODEtNTViYi00MTFkLWJjNmYtYzMxMWZkNWM1ZGIzLzMxMGY5ODRlLWQ3MjEtNDQ2Mi05NGNmLWE3MDFiOTY3NWFlNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
    },
    {
        id: 4,
        title: '비누를 입다, 비뉴',
        creator: '미드나잇',
        fundingPercentage: 398,
        amountPledged: 20000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvM2UzNDM5MWItNjIwNS00NGE5LWFhN2MtNzUzY2RlNzBiZjBmLzUzMTNiOGFmLTJmNDItNGZlOS04YjUyLTk4OGU5MGQ4ZmFhYS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
    },
    {
        id: 5,
        title: '먹지마세요, 젤리조명',
        creator: '어나더굿즈',
        fundingPercentage: 42,
        amountPledged: 260000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZGQ4MDI4YWYtYjYzMi00N2IwLTgxNTYtOGM5NWJmYmE1MGIxLzYzOGEyZTg5LTk5NmItNGQ5OC1iOWNiLTdmMzA4ZjA5ODhhNi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
    },
    {
        id: 6,
        title: '전통 매듭 스크런치',
        creator: '온당',
        fundingPercentage: 42,
        amountPledged: 260000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvYzA0YTE1MTAtMzAwMS00NjQ2LWEwOGEtYzc5YzBjMjc2YWM2L2ZiMWNmY2MwLTI0NGUtNDU0YS05YmQ5LTI5ZTAyYmQ1OTk0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsImhlaWdodCI6MTI0MCwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19',
    }
];

const featuredProjects = [
    {
        id: 101,
        title: '궁궐사계를 담은, 전통 금박색칠 <글리팅>',
        creator: '글리팅',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvYjhhOTA3MDktNTE1YS00MDgwLWJmOTUtOTEwMzIxOTgxODU1LzNmMmY2NjdlLTYxZTQtNDhhNi04MWFhLWNhM2MzNmQ2N2M0Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 102,
        title: '어디에도 없을 타로카드 해석집',
        creator: '윤보',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvYWVhOTJmNzktYWY2OC00YzUyLWE0ODEtZDY0NmVlZTZhMGM1LzBiOTI1OGJhLTI0NTMtNDgzMS04NGI3LWVjNTI3YTUyMGE3Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 103,
        title: '옥춘과 저승을 담은 [여름 스트릿 11종]',
        creator: 'TM3',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvMWMyMjM0MDgtNzE1NC00MWNlLTk3NjUtZmQwZjFjMTdjNTg5L2Q5OTAxMWQ4LWNjNTUtNDE1NS05M2E3LTBiYjMyN2Y0MjdmNS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 104,
        title: '웹툰 원고꾸미기! 연출배경마스터 ver.2',
        creator: '마노',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvOWZlZDk0MWMtNTVmNi00MGYwLWJjZTQtNzE0OWE5Y2YzNzczLzkzZWI2M2FlLTU3ZGUtNDQwOS1hNWZiLWI5OTFiZTZhN2FjMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
];

const notableProjects = [
    {
        id: 201,
        title: '실존했던 마녀의 정체 <마녀재판의서>',
        creator: '지솔',
        fundingPercentage: 157,
        amountPledged: 20000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvNjdjMmI0MzQtZTFlZS00NzhjLWFiNmItOGExMDczMWNhZmVjLzlhY2JkNmU2LTdiNjQtNGQwNi04ZjQ0LTI1MzUxMzlhNDBhMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 202,
        title: '이건 세상에 없던 여행, 여행색칠기록세트',
        creator: '생활특별시',
        fundingPercentage: 100,
        amountPledged: 38000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvOTAxNTg2NGUtNmQ3NC00N2JmLWExYjEtYzdmYmNlZmJhNTBmLzFlMWVmMmZjLWYzZmQtNGZlNS1hM2YwLTJiZTBkNDhkYTA2OC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 203,
        title: '[푸른 자개함] 동양풍 문양브러쉬&프레임',
        creator: 'KOKI',
        fundingPercentage: 135,
        amountPledged: 130000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvNDMxY2NjMGItMGUxYS00NGYzLTkyNjQtYzY3NTkyZWRmZGQzLzNjYTA0M2VmLWEzZWEtNGM5ZC04NDFhLTdkMGQ5MmU2ODg3OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 204,
        title: '집에만 있고파<김집순 회사원&다이어트키링>',
        creator: '아이돌룩',
        fundingPercentage: 180,
        amountPledged: 40000,
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvOWRlYTk5NTktYmI5MC00MTIwLTgxNmYtZGM5YjUzMWM4NzllLzcxYTc0MTNmLTA5N2YtNGVhMi1hNzg2LTBiMGI1NTExZDY5OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    }
];

const editorsPickProjects = [
    {
        id: 301,
        title: '날개로 감싸안은 책 <윙커버 & 해달인형>',
        creator: '영원토록',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZWFmZTA1YTMtY2ZkYy00YTNiLWJiZTctMjgyZjE0ZDM4MTZiL2YxYTE0NTQ5LTY1YzEtNGE5ZS1iYjA2LTBmMGQ4M2ZjMzY4My5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 302,
        title: '꾸안꾸 끝판왕 하루종일 Chill 롱원피스',
        creator: '칠앤힐',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvN2RhZDQ2ZGQtODEwZS00NjNjLThlODMtZTgwYWNkYzU3Yzc4L2IwZmFiZDE1LWRhOGQtNGM0MS05YmU5LWEyNDJhYjJhMjY1Yi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 303,
        title: '이상한 나라의 열쇠 펜던트',
        creator: '루미노라',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZTkxZTkzNTgtMjk0ZS00ODcyLThiNWUtODUwMTU2ZmJkYTBhLzU3YmZmZTgwLWM0M2QtNGFlMi04YTg2LTUxMTlhOTZjM2MzZi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    },
    {
        id: 304,
        title: '아름다운 여백 브러시',
        creator: '반타',
        imageUrl: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvZWNiYTk2OWItNTk1Yy00YTRlLThiMmQtMzIzMGM1ODc5MWI4LzlkYWQ4ODNkLTg4MjctNDFhNi04ODI0LTEyMTlkMzhiOGMwNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2NSwiaGVpZ2h0Ijo0NjUsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    }
];


function HeroSection({ slides }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const currentSlide = slides[currentSlideIndex];

    return (
        <section className="hero-section">
            <div className="hero-slider">
                <img src={currentSlide.imageUrl} alt={currentSlide.title} className="hero-image" />
                <div className="hero-content">
                    <h2>{currentSlide.title}</h2>
                    <p>{currentSlide.subtitle}</p>
                    <a href={currentSlide.link} className="fund-button">펀딩 참여</a>
                </div>
                <button className="slider-nav prev" onClick={prevSlide}>&#10094;</button>
                <button className="slider-nav next" onClick={nextSlide}>&#10095;</button>
                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentSlideIndex ? 'active' : ''}`}
                            onClick={() => setCurrentSlideIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const formatAmount = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    };

    return (
        <div className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-info">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-creator">{project.creator}</p>
                    {project.fundingPercentage && (
                        <p className="project-funding-progress">
                            <span className="percentage">{project.fundingPercentage}% 달성</span>
                            <span className="amount">{formatAmount(project.amountPledged)}원</span>
                        </p>
                    )}
                </div>
        </div>
    );
}

function PopularProjects({ projects }) {
    return (
        <section className="popular-projects">
            <div className="section-header">
                <h2>인기 프로젝트</h2>
            </div>
            <div className="project-list">
                {projects.slice(0, 6).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function FeaturedProjects({ projects }) {
    return (
        <section className="featured-projects">
            <div className="section-header">
                <h2>주목할 만한 프로젝트</h2>
            </div>
            <div className="project-grid">
                {projects.slice(0, 4).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function NotableProjects({ projects }) {
    return (
        <section className="notable-projects">
            <div className="section-header">
                <h2>추천할 만한 프로젝트</h2>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function EditorsPick({ projects }) {
    return (
        <section className="editors-pick">
            <div className="section-header">
                <h2>에디터의 PICK</h2>
            </div>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function Home() {
    return (
        <div className="main-page-container">
            <HeroSection slides={heroSlides} />
            <div className="main-content-wrapper">
                <PopularProjects projects={popularProjects} />
                <FeaturedProjects projects={featuredProjects} />
            </div>
            <div className="sub-content-wrapper">
            <NotableProjects projects={notableProjects} />
            <EditorsPick projects={editorsPickProjects} />
            </div>
        </div>
    );
}

export default Home;