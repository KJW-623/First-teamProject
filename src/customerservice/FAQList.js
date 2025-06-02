import FAQItem from './FAQItem';

function FAQList({ faqs }) {
    return (
        <div className="faq-list">
            {faqs.map((faq) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQList;