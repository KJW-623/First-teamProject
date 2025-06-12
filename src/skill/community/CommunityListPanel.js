
import CommunityListItem from './CommunityListItem';

//chatRooms, activeChatRoomId, onSelectChatRoom 받기
function CommunityListPanel({ chatRooms, activeChatRoomId, onSelectChatRoom }) {
    return (
        <div className="chat-list-panel">
            <div className="chat-list-header">
                메시지 목록
            </div>
            <ul className="chat-list">
                {/* chatRooms배열 매핑 후 CommunityListItem 렌더링 */}
                {chatRooms.map((room) => (
                    <CommunityListItem key={room.id} chatRoom={room} isActive={room.id === activeChatRoomId} onClick={onSelectChatRoom} />
                ))}
            </ul>
        </div>
    );
}

export default CommunityListPanel;