
import './Heart.css';

//project 받기 >> 이미지 주소, 창작자, 제목 등등 정보 가져옴
const HeartCard = ({ project }) => {
    const {imageUrl, title, creator, description, percentage, currentAmount, remainingDays, liked } = project;

    const formattedAmount = currentAmount.toLocaleString('ko-KR');

    return (
        <div className="Hproject-card">
            {/* 좋아요 여부 표시 */}
            <div className="card-thumbnail">
                <img src={imageUrl} alt={title} />
                <div className="heart-icon">
                    {liked ? '❤️' : '🤍'}
                </div>
            </div>
            {/* 카드 정보 표시 */}
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <p className="card-creator">{creator}</p>
                <p className="card-description">{description}</p>

                <div className="card-stats">
                    <span className="percentage">{percentage}%</span>
                    <span className="amount">{formattedAmount}원</span>
                    <span className="days-left">{remainingDays}일 남음</span>
                </div>
            </div>
        </div>
    );
};

export default HeartCard;