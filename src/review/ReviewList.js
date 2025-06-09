import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
    if (reviews.length === 0) {
        return <div className="no-reviews">표시할 후기가 없습니다.</div>;
    }

    return (
        <div className="review-list">
            {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
}

export default ReviewList;