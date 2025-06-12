import FAQItem from './FAQItem';

function FAQList({ faqs }) {
    return (
        <div className="faq-list">
            {/* 표시할 FAQ 항목들의 배열 */}
            {faqs.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQList;