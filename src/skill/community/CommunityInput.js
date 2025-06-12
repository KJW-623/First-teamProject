import { useState } from "react";

//onSendMessage 받기
function CommunityInput({onSendMessage}) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지
        //안 비어있으면 메시지 전달
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        //전송 버튼으로 렌더링
        <form className="message-input" onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="메시지를 입력하세요." />
            <button type="submit">전송</button>
        </form>
    )

}

export default CommunityInput