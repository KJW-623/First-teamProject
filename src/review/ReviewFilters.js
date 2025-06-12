

//최신, 추천, 별 개수로 필터링 하기
function ReviewFilters({ sortBy, setSortBy, minRating, setMinRating }) {
    const handleRatingChange = (e) => {
        setMinRating(Number(e.target.value));
    };

    return (
        <div className="review-filters">
            <div className="filter-group">
                <label htmlFor="sort-by">정렬:</label>
                <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="latest">최신순</option>
                    <option value="recommended">추천순</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="min-rating">별점:</label>
                <select id="min-rating" value={minRating} onChange={handleRatingChange}>
                    <option value={0}>모든 별점</option>
                    <option value={5}>⭐⭐⭐⭐⭐ (5점)</option>
                    <option value={4}>⭐⭐⭐⭐ (4점)</option>
                    <option value={3}>⭐⭐⭐ (3점)</option>
                    <option value={2}>⭐⭐ (2점)</option>
                    <option value={1}>⭐ (1점)</option>
                </select>
            </div>
        </div>
    );
}

export default ReviewFilters;