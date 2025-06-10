import React from "react";
import './recopro.css';

const projects = [
    {
        title: "에디터 추천 프로젝트 1",
        desc: "이 프로젝트는 에디터가 직접 선정한 추천작입니다.",
        date: "2025-06-15"
    },
    {
        title: "에디터 추천 프로젝트 2",
        desc: "창의적인 아이디어가 돋보이는 프로젝트입니다.",
        date: "2025-06-20"
    },
    {
        title: "에디터 추천 프로젝트 3",
        desc: "새로운 트렌드를 이끄는 프로젝트입니다.",
        date: "2025-06-25"
    },
    {
        title: "에디터 추천 프로젝트 4",
        desc: "많은 기대를 받고 있는 프로젝트입니다.",
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