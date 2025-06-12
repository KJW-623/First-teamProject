import { useState } from 'react';
import './SearchBar.css';

//onSearch 받기
function SearchBar({ onSearch }) {
    //searchTerm 상태 관리
    const [searchTerm, setSearchTerm] = useState('');

    //이벤트 호출해서 searchTerm 관리
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    //검색입력
    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지
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