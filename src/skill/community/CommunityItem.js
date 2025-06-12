
//message, isMyMessage 전달 받기
function CommunityItem({ message, isMyMessage }) {
    // 내 메세지 : 상대방 메시지
    const messageClass = isMyMessage ? 'my-message' : 'other-message';

    return (
        <div className={`message-item ${messageClass}`}>
            <div className="message-header">
                {/* 보낸 사람 이름, 시간 */}
                <span className="sender-name">{message.senderName}</span>
                <span className="timestamp">{message.timestamp}</span>
            </div>
            {/* 메시지 내용 */}
            <div className="message-content">
                {message.content}
            </div>
        </div>
    );
}

export default CommunityItem;