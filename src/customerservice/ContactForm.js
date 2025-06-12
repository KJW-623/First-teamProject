import { useState } from 'react';
import './ContactForm.css';

//onSubmit 받기
function ContactForm({ onSubmit }) {
    //폼 제출 기본
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    //
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    //폼 제출
    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지
        onSubmit(formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        //폼 제출란
        <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="문의 내용을 입력하세요" value={formData.message} onChange={handleChange} rows="5" required ></textarea>
            <button type="submit">문의 제출</button>
        </form>
    );
}

export default ContactForm;