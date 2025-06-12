import './Heart.css';

const HeartFilter = ({ sortOrder, onSortChange }) => {
    return (
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