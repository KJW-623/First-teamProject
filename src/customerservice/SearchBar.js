import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="궁금한 내용을 검색해보세요!"
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">검색</button>
        </form>
    );
}

export default SearchBar;