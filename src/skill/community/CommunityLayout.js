
import { useState } from 'react';
import CommunityListPanel from './CommunityListPanel';
import Community from './Community';
import CommunityInfoPanel from './CommunityInfoPanel';
import './Community.css';

//채팅방 데이터
const dummyChatRooms = [
    {
        id: 'room_min_eui',
        name: '옷을 만드는 사람들',
        avatar: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1Lzk2NzA1MmNkLWE1NzgtNDI2Yi04NDUyLTMzMzVjMGJlZjQxNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
        lastMessage: '[문의를 종료합니다.]',
        lastMessageDate: '25.06.03',
        projectId: '옷을 만드는 사람들의 프로젝트',
        messages: [
            { id: 1, senderId: 'user1', senderName: '나', content: '창작자님, 안녕하세요!', timestamp: '오전 09:00' },
            { id: 2, senderId: 'user2', senderName: '옷을 만드는 사람들(창작자)', content: '안녕하세요, 후원자님!', timestamp: '오전 09:01' },
            { id: 3, senderId: 'user1', senderName: '나', content: '프로젝트 최종 작업물 잘 받았습니다!', timestamp: '오전 10:00' },
            { id: 4, senderId: 'user2', senderName: '옷을 만드는 사람들(창작자)', content: '확인 감사합니다! 혹시 필요하신 부분 있으실까요?', timestamp: '오전 10:01' },
            { id: 5, senderId: 'user1', senderName: '나', content: '아니요, 완벽합니다! 정말 감사합니다!', timestamp: '오전 10:05' },
            { id: 6, senderId: 'user2', senderName: '옷을 만드는 사람들(창작자)', content: '[문의를 종료합니다.]', timestamp: '19:58' },
        ],
        projectInfo: {
            remainingTime: '제한 없음',
            payableAmount: '29962원',
            note: '여름나기 프로젝트 진행중',
        },
        creatorInfo: {
            name: '옷을 만드는 사람들',
            avatar: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1Lzk2NzA1MmNkLWE1NzgtNDI2Yi04NDUyLTMzMzVjMGJlZjQxNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
            level: 40,
            rating: '1521',
            totalOrders: '40개',
            completedOrders: '5개',
            reviews: '1521개',
        }
    },
    {
        id: 'room_na_ring',
        name: '나링',
        avatar: 'https://cdn.pixabay.com/photo/2025/04/12/06/48/rain-9529581_640.jpg',
        lastMessage: '[프로젝트 종료] 리부트 모션 결제 예정되었어요',
        lastMessageDate: '25.05.30',
        projectId: '나링 프로젝트',
        messages: [
            { id: 1, senderId: 'user1', senderName: '나 (후원자)', content: '나링님 안녕하세요!', timestamp: '오후 02:00' },
            { id: 2, senderId: 'user2', senderName: '나링', content: '네, 반갑습니다!', timestamp: '오후 02:01' },
            { id: 3, senderId: 'user2', senderName: '나링', content: '[프로젝트 종료] 리부트 모션 결제 예정되었어요', timestamp: '오후 02:05' },
        ],
        projectInfo: {
            remainingTime: '1일',
            payableAmount: '15000원',
            note: '리부트 모션 프로젝트 진행 중',
        },
        creatorInfo: {
            name: '나링',
            avatar: 'https://cdn.pixabay.com/photo/2025/04/12/06/48/rain-9529581_640.jpg',
            level: 10,
            rating: '500',
            totalOrders: '10',
            completedOrders: '8',
            reviews: '5',
        }
    },
    {
        id: 'room_kkyo',
        name: 'kkyo',
        avatar: 'https://cdn.pixabay.com/photo/2021/06/16/16/14/swans-6341698_640.jpg',
        lastMessage: '[최종 프로젝트 확인]',
        lastMessageDate: '25.05.28',
        projectId: 'kkyo 프로젝트',
        messages: [
            { id: 1, senderId: 'user1', senderName: '나 (후원자)', content: 'kkyo님 안녕하세요!', timestamp: '오전 11:00' },
            { id: 2, senderId: 'user2', senderName: 'kkyo', content: '네, 반갑습니다!', timestamp: '오전 11:01' },
            { id: 3, senderId: 'user2', senderName: 'kkyo', content: '[최종 프로젝트 확인]', timestamp: '오전 11:05' },
        ],
        projectInfo: {
            remainingTime: '제한 없음',
            payableAmount: '10000원',
            note: 'kkyo 프로젝트 진행 중',
        },
        creatorInfo: {
            name: 'kkyo',
            avatar: 'https://cdn.pixabay.com/photo/2021/06/16/16/14/swans-6341698_640.jpg',
            level: 5,
            rating: '300',
            totalOrders: '5',
            completedOrders: '4',
            reviews: '3',
        }
    },
]


function CommunityLayout() {


    const [activeChatRoomId, setActiveChatRoomId] = useState(dummyChatRooms[0].id);

    //해당하는 채팅방 데이터 찾기
    const activeChatRoom = dummyChatRooms.find(room => room.id === activeChatRoomId);

    //다른 채팅방 선택시 채팅방 업데이트(변경!)
    const handleSelectChatRoom = (id) => {
        setActiveChatRoomId(id);
    };

    return (
        <div className="chat-layout-container">

            {/* 좌측 표시 패널 */}
            <CommunityListPanel chatRooms={dummyChatRooms} activeChatRoomId={activeChatRoomId} onSelectChatRoom={handleSelectChatRoom} />
            {activeChatRoom && (
                <Community sponsorUserId="user1" projectId={activeChatRoom.projectId} initialMessages={activeChatRoom.messages} />
            )}
            {activeChatRoom && (
                //우측 표시 패널
                <CommunityInfoPanel projectInfo={activeChatRoom.projectInfo} creatorInfo={activeChatRoom.creatorInfo} />
            )}
        </div>
    );
}

export default CommunityLayout;