

function CommunityItem({ message, isMyMessage }) {
    const messageClass = isMyMessage ? 'my-message' : 'other-message';

    return (
        <div className={`message-item ${messageClass}`}>
            <div className="message-header">
                <span className="sender-name">{message.senderName}</span>
                <span className="timestamp">{message.timestamp}</span>
            </div>
            <div className="message-content">
                {message.content}
            </div>
        </div>
    );
}

export default CommunityItem;