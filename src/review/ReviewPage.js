
import { useState } from 'react';
import ReviewHeader from './ReviewHeader';
import ReviewFilters from './ReviewFilters';
import ReviewList from './ReviewList';
import './Review.css';

//리뷰 데이터
const Reviews = [
    {
        id: 1,
        reviewerName: '신선한수박',
        reviewerAvatar: 'https://cdn.pixabay.com/photo/2019/10/27/07/37/watermelon-4580910_1280.png',
        date: '2025.05.28',
        rating: 5,
        content: '프로젝트 퀄리티가 너무 좋고, 소통도 원활하게 진행되었습니다. 대단해요!',
        images: ['https://cdn.pixabay.com/photo/2019/10/27/07/37/watermelon-4580910_1280.png']

    },
    {
        id: 2,
        reviewerName: '반짝이는별',
        reviewerAvatar: 'https://cdn.pixabay.com/photo/2025/01/01/15/55/baby-9304008_1280.jpg',
        date: '2025.05.31',
        rating: 4,
        content: '기대했던 것보다 훨씬 멋진 결과물이었어요. 다음에도 꼭 다시 이용하고 싶습니다!',
        images: []
    },
    {
        id: 3,
        reviewerName: '바람의언덕',
        reviewerAvatar: 'https://cdn.pixabay.com/photo/2023/01/14/15/33/sand-dunes-7718479_640.jpg',
        date: '2025.05.30',
        rating: 5,
        content: '프로젝트 작업 퀄리티도 좋고 피드백도 잘 반영해주셔서 만족스러운 결과가 나왔습니다.',
        images: ['https://cdn.pixabay.com/photo/2023/01/14/15/33/sand-dunes-7718479_640.jpg', 'https://cdn.pixabay.com/photo/2021/10/30/17/54/desert-6755127_1280.jpg']
    },
    {
        id: 4,
        reviewerName: '푸른하늘',
        reviewerAvatar: 'https://cdn.pixabay.com/photo/2023/01/15/06/46/sunrise-7719608_640.jpg',
        date: '2025.05.29',
        rating: 2,
        content: '프로젝트는 괜찮았지만, 소통이 조금 아쉬웠습니다.',
        images: []
    },
    {
        id: 5,
        reviewerName: '산속의샘',
        reviewerAvatar: 'https://cdn.pixabay.com/photo/2024/02/13/12/23/mountain-springs-8570914_640.png',
        date: '2025.05.28',
        rating: 5,
        content: '정말 꼼꼼한 프로젝트이고, 제 요구사항을 완벽하게 반영해주셨어요. 최고!',
        images: ['https://cdn.pixabay.com/photo/2024/02/13/12/23/mountain-springs-8570914_640.png']
    }
];

//창작자 정보
const creatorInfo = {
    avatar: 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5IjoiY292ZXIvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1Lzk2NzA1MmNkLWE1NzgtNDI2Yi04NDUyLTMzMzVjMGJlZjQxNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjQwLCJoZWlnaHQiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==',
    name: '옷을 만드는 사람들',
    level: 40,
    followers: 1234,
};

function ReviewPage() {

    //리뷰 상태 업데이트
    const [reviews, setReviews] = useState(Reviews);
    //최신순 필터링
    const [sortBy, setSortBy] = useState('latest');
    //별 필터링
    const [minRating, setMinRating] = useState(0);

    //
    const filteredAndSortedReviews = [...reviews]
        .filter(review => {
            return minRating === 0 || review.rating === minRating;
        })
        .sort((a, b) => {
            if (sortBy === 'latest') { //최신순
                return new Date(b.date) - new Date(a.date);
            }
            if (sortBy === 'recommended') { //추천순(별)
                if (b.rating !== a.rating) {
                    return b.rating - a.rating;
                }
                return new Date(b.date) - new Date(a.date);
            }
            return 0;
        });

    return (
        <div className="review-page-container">
            {/* 리뷰 상단 */}
            <h1 className="page-title">후기</h1>

            {/* 창작자 정보 */}
            <ReviewHeader creatorInfo={creatorInfo} activeTab="reviews" />

            {/* 리뷰 필터링 */}
            <ReviewFilters
                sortBy={sortBy}
                setSortBy={setSortBy}
                minRating={minRating}
                setMinRating={setMinRating}
            />

            {/* 리뷰 보여주기 */}
            <ReviewList reviews={filteredAndSortedReviews} />
        </div>
    );
}

export default ReviewPage;