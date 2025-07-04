
// /chatRoom, isActive, onClick 받기
function CommunityListItem({ chatRoom, isActive, onClick }) {
    return (

        //active >> 강조
        <li className={`chat-list-item ${isActive ? 'active' : ''}`} onClick={() => onClick(chatRoom.id)}>
            <div className="list-item-avatar">
                <img src={chatRoom.avatar || 'https://via.placeholder.com/45'} />
            </div>
            <div className="list-item-content">
                <div className="list-item-header">
                    {/* 이름, 날짜, 메시지 내용 표시 */}
                    <span className="list-item-name">{chatRoom.name}</span>
                    <span className="list-item-date">{chatRoom.lastMessageDate}</span>
                </div>
                <p className="list-item-message">{chatRoom.lastMessage}</p>
            </div>
        </li>
    );
}

export default CommunityListItem;