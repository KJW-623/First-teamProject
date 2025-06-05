
function ReviewCard({ review }) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="review-card">
            <div className="review-header">
                <img src={review.reviewerAvatar} alt={review.reviewerName} className="reviewer-avatar" />
                <div className="reviewer-info">
                    <span className="reviewer-name">{review.reviewerName}</span>
                    <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                    {renderStars(review.rating)}
                </div>
            </div>
            <div className="review-content">
                <p>{review.content}</p>
                {review.images && review.images.length > 0 && (
                    <div className="review-images">
                        {review.images.map((image, index) => (
                            <img key={index} src={image} alt={`Review ${review.id} image ${index + 1}`} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReviewCard;