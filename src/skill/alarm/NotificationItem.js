
const NotificationItem = ({ notif, onDelete }) => {
    const { id, imageUrl, detailedContent, relatedProjectLink } = notif;

    return (
        <div className="notification-item">
            <div className="item-thumbnail">
                {imageUrl && <img src={imageUrl} />}
            </div>
            <div className="item-content">
                <p className="main-content"></p>
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
            <button className="delete-button" onClick={() => onDelete(id)}>
                삭제
            </button>
        </div>
    );
};

export default NotificationItem;