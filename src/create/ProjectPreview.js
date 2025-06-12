import './ProjectPreview.css';

//project 받기
function ProjectPreview({ project }) {

    //프로젝트 메인 이미지 URL 결정
    //직접 열면 임시 주소 생성, 미리 볼 수 있음
    const imageUrl = project.mainImage instanceof File
        ? URL.createObjectURL(project.mainImage)
        : (typeof project.mainImage === 'string' && project.mainImage.startsWith('http')
            ? project.mainImage
            : '/images/default-thumbnail.png');

    return (
        <div className="project-preview-card">
            {project.mainImage && (
                <div className="preview-image-wrapper">
                    <img src={imageUrl} alt="프로젝트 메인 이미지" className="preview-image" />
                </div>
            )}

            {/* 미리보기 */}
            <div className="preview-content">
                <h3 className="preview-title">{project.title || '제목을 입력해주세요'}</h3>
                <p className="preview-category">카테고리: {project.category || '선택 안됨'}</p>
                <p className="preview-amount">목표 금액: {project.targetAmount ? `${project.targetAmount.toLocaleString()}원` : '입력 안됨'}</p>
                <div className="preview-description">
                    <h4>프로젝트 설명:</h4>
                    <p>{project.description || '설명을 입력해주세요'}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPreview;