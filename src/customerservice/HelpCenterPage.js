import { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import FAQList from './FAQList.js';
import { faqData, categories } from './faqData';
import ContactForm from './ContactForm.js';
import CategoryFilter from './CategoryFilter.js';
import './HelpCenterPage.css';
import Header from './Header.js';

function HelpCenterPage() {

    //현재 FAQ 저장 
    const [currentFaqs, setCurrentFaqs] = useState([]);
    //카테고리 상태 관리
    const [selectedCategory, setSelectedCategory] = useState('all');

    //선택에 따라 표시될 FAQ 목록 업데이트
    useEffect(() => {
        if (selectedCategory === 'all') {
            setCurrentFaqs(faqData);
        } else {
            setCurrentFaqs(faqData.filter(faq => faq.categoryId === selectedCategory));
        }
    }, [selectedCategory]);

    //검색입력 버튼 클릭 호출
    const handleSearch = (searchTerm) => {
        const filteredFaqs = faqData.filter(
            (faq) =>
                //대소문자 구분 무시
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCurrentFaqs(filteredFaqs);
    };

    //카테고리 필터링
    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    //폼 제출
    const handleContactSubmit = (formData) => {
        console.log('문의 제출됨:', formData);
        alert('문의가 성공적으로 접수되었습니다!');
    };

    return (
        <div className="help-center-page">
            <Header />
            <main>
                <section className="search-section">
                    <h2>무엇을 도와드릴까요?</h2>
                    <SearchBar onSearch={handleSearch} />
                </section>

                <section className="faq-section">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleCategoryChange}
                    />
                    <FAQList faqs={currentFaqs} />
                </section>

                <section className="contact-section">
                    <h2>궁금증이 해결되지 않았나요?</h2>
                    <p>여전히 궁금한 점이 있다면 문의를 남겨주세요.</p>
                    <ContactForm onSubmit={handleContactSubmit} />
                </section>
            </main>
        </div>
    );
}

export default HelpCenterPage;