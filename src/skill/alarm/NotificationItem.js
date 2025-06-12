//notif, onDelete 받기 >> 아이디, 이미지 링크 등등...
const NotificationItem = ({ notif, onDelete }) => {
    const { id, imageUrl, detailedContent, relatedProjectLink } = notif;

    return (
        <div className="notification-item">
            <div className="item-thumbnail">
                {imageUrl && <img src={imageUrl} />}
            </div>
            <div className="item-content">
                <p className="main-content"></p>
                {/* text면 텍스트 이미지면 이미지 */}
                {detailedContent && (
                    <div className="detailed-content">
                        {detailedContent.type === 'text' && <p>{detailedContent.value}</p>}
                        {detailedContent.type === 'image' && <img src={detailedContent.value} />}
                        {relatedProjectLink && (
                            <a href={relatedProjectLink} className="related-link">자세히 보기</a>
                        )}
                    </div>
                )}
            </div>

            {/* 알림 삭제 */}
            <button className="delete-button" onClick={() => onDelete(id)}>
                삭제
            </button>
        </div>
    );
};

export default NotificationItem;