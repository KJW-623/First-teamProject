import { useState } from "react";

function CommunityInput({onSendMessage}) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form className="message-input" onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력하세요." />
            <button type="submit">전송</button>
        </form>
    )

}

export default CommunityInput