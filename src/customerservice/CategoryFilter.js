import './CategoryFilter.css';

//categories, selectedCategory, onSelectCategory 받기
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="category-filter">
            <h2>자주 묻는 질문 FAQ</h2>

            {/* active요소 렌더링 */}
            {categories.map(category => (
                <button
                    key={category.id}
                    className={selectedCategory === category.id ? 'active' : ''}
                    onClick={() => onSelectCategory(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;