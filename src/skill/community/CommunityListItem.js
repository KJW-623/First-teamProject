

function CommunityListItem({ chatRoom, isActive, onClick }) {
    return (
        <li className={`chat-list-item ${isActive ? 'active' : ''}`} onClick={() => onClick(chatRoom.id)}>
            <div className="list-item-avatar">
                <img src={chatRoom.avatar || 'https://via.placeholder.com/45'} />
            </div>
            <div className="list-item-content">
                <div className="list-item-header">
                    <span className="list-item-name">{chatRoom.name}</span>
                    <span className="list-item-date">{chatRoom.lastMessageDate}</span>
                </div>
                <p className="list-item-message">{chatRoom.lastMessage}</p>
            </div>
        </li>
    );
}

export default CommunityListItem;