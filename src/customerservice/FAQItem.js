import { useState } from 'react';
import './FAQItem.css';


//question, answer 받기
function FAQItem({ question, answer }) {
    //isOpen 관리
    const [isOpen, setIsOpen] = useState(false);
    //토글
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            {/* 질문영역 */}
            <div className="faq-question" onClick={toggleOpen}>
                <h3>{question}</h3>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {/* 답변영역 */}
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FAQItem;