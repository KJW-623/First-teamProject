import CommunityItem from "./CommunityItem";
//여기서 가져오는 중

// messages, sponsorUserId 받기
function CommunityList({ messages, sponsorUserId }) {
    return (
        <div className="message-list">
            {/* 매핑 후 데이터 컴포넌트 렌더링 */}
            {messages.map((message) => (
                <CommunityItem key={message.id} message={message} isMyMessage={message.senderId === sponsorUserId} />
            ))}
        </div>
    );
}

export default CommunityList;