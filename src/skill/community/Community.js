import { useState, useEffect, useRef } from 'react';
import CommunityList from './CommunityList';
import CommunityInput from './CommunityInput';

function Community({ sponsorUserId, projectId, initialMessages = [] }) {
    const [messages, setMessages] = useState(initialMessages);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages(initialMessages);
    }, [initialMessages]);

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
            <div className="chat-header">
                <h2>{projectId}</h2>
            </div>
            <div className="message-list-container">
                <CommunityList messages={messages} sponsorUserId={sponsorUserId} />
                <div ref={messagesEndRef} />
            </div>
            <CommunityInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default Community;