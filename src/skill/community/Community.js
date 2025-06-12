import { useState, useEffect, useRef } from 'react';
import CommunityList from './CommunityList';
import CommunityInput from './CommunityInput';


//sponsorUserId, projectId, initialMessages 받기
function Community({ sponsorUserId, projectId, initialMessages = [] }) {
    const [messages, setMessages] = useState(initialMessages);
    //메시지 스크롤
    const messagesEndRef = useRef(null);

    //메시지 상태 업데이트
    useEffect(() => {
        setMessages(initialMessages);
    }, [initialMessages]);

    //새로운 메시지 전송
    const handleSendMessage = (messageContent) => {
        const newMessage = {
            id: messages.length + 1,
            senderId: sponsorUserId,
            senderName: sponsorUserId === 'user1' ? '나 (후원자)' : '상대방 (창작자)',
            content: messageContent,
            timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <div className="chat-room">
            {/* 채팅방 제목 */}
            <div className="chat-header">
                <h2>{projectId}</h2>
            </div>
            {/* 커뮤니티 리스트 렌더링 후 목록 표시 */}
            <div className="message-list-container">
                <CommunityList messages={messages} sponsorUserId={sponsorUserId} />
                {/* 자동 스크롤 */}
                <div ref={messagesEndRef} />
            </div>
            {/* 전송 기능 */}
            <CommunityInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default Community;