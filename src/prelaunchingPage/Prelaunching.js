import React from "react";
import './Prelaunching.css';

const projects = [
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },

    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
    },
    {
        title: "프로젝트 제목",
        desc: "프로젝트 간단 소개 및 설명이 들어갑니다.",
        date: "2025-??-??"
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