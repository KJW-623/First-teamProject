
import './Heart.css';

const HeartCard = ({ project }) => {
    const {imageUrl, title, creator, description, percentage, currentAmount, remainingDays, liked } = project;

    const formattedAmount = currentAmount.toLocaleString('ko-KR');

    return (
        <div className="Hproject-card">
            <div className="card-thumbnail">
                <img src={imageUrl} alt={title} />
                <div className="heart-icon">
                    {liked ? '❤️' : '🤍'}
                </div>
            </div>
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