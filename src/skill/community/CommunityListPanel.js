
import CommunityListItem from './CommunityListItem';

function CommunityListPanel({ chatRooms, activeChatRoomId, onSelectChatRoom }) {
    return (
        <div className="chat-list-panel">
            <div className="chat-list-header">
                메시지 목록
            </div>
            <ul className="chat-list">
                {chatRooms.map((room) => (
                    <CommunityListItem key={room.id} chatRoom={room} isActive={room.id === activeChatRoomId} onClick={onSelectChatRoom} />
                ))}
            </ul>
        </div>
    );
}

export default CommunityListPanel;