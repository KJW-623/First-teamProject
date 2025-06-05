import CommunityItem from "./CommunityItem";

function CommunityList({ messages, sponsorUserId }) {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <CommunityItem key={message.id} message={message} isMyMessage={message.senderId === sponsorUserId} />
            ))}
        </div>
    );
}

export default CommunityList;