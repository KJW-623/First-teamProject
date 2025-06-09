import { useState } from 'react';
import ImageUpload from './ImageUpload';
import ProjectPreview from './ProjectPreview';
import './ProjectForm.css';

function ProjectForm() {
    const [project, setProject] = useState({
        title: '',
        category: '',
        targetAmount: '',
        description: '',
        mainImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value,
        });
    };

    const handleImageChange = (imageFile) => {
        setProject({
            ...project,
            mainImage: imageFile,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('프로젝트 제출:', project);
        alert('프로젝트가 성공적으로 제출되었습니다!');
        setProject({
            title: '',
            category: '',
            targetAmount: '',
            description: '',
            mainImage: null,
        });
    };

    return (
        <div className="project-form-container">
            <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                    <label htmlFor="title">프로젝트 제목:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={project.title}
                        onChange={handleChange}
                        placeholder="프로젝트의 제목을 입력하세요"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">카테고리:</label>
                    <select
                        id="category"
                        name="category"
                        value={project.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">카테고리 선택</option>
                        <option value="보드게임&TRPG">보드게임&TRPG</option>
                        <option value="디지털 게임">디지털 게임</option>
                        <option value="웹툰&만화">웹툰&만화</option>
                        <option value="웹툰 리소스">웹툰 리소스</option>
                        <option value="디자인 문구">디자인 문구</option>
                        <option value="캐릭터 & 굿즈">캐릭터&굿즈</option>
                        <option value="홈&리빙">홈&리빙</option>
                        <option value="테크&가전">테크&가전</option>
                        <option value="반려동물">반려동물</option>
                        <option value="푸드">푸드</option>
                        <option value="향수&뷰티">향수&뷰티</option>
                        <option value="의류">의류</option>
                        <option value="잡화">잡화</option>
                        <option value="주얼리">주얼리</option>
                        <option value="출판">출판</option>
                        <option value="디자인">디자인</option>
                        <option value="예술">예술</option>
                        <option value="사진">사진</option>
                        <option value="음악">음악</option>
                        <option value="영화&비디오">영화&비디오</option>
                        <option value="공연">공연</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="targetAmount">목표 금액 (원):</label>
                    <input
                        type="number"
                        id="targetAmount"
                        name="targetAmount"
                        value={project.targetAmount}
                        onChange={handleChange}
                        placeholder="펀딩 목표 금액을 입력하세요"
                        required
                        min="10000"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">프로젝트 설명:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={handleChange}
                        placeholder="프로젝트에 대한 자세한 설명을 입력하세요"
                        rows="10"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>메인 이미지:</label>
                    <ImageUpload onImageChange={handleImageChange} currentImage={project.mainImage} />
                </div>

                <button type="submit" className="submit-button">프로젝트 생성</button>
            </form>

            <div className="project-preview-section">
                <h2>프로젝트 미리보기</h2>
                <ProjectPreview project={project} />
            </div>
        </div>
    );
}

export default ProjectForm;