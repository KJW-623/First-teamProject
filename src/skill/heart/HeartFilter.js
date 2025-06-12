import './Heart.css';

//sortOrder, onSortChange 받기
const HeartFilter = ({ sortOrder, onSortChange }) => {
    return (
        //최신순, 인기순 필터링
        <div className="Heart-filter">
            <div className="Heart-options">
                <select
                    className="Heart-dropdown"
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="latest">최신순</option>
                    <option value="popularity">인기순</option>
                </select>
            </div>
        </div>
    );
};

export default HeartFilter;