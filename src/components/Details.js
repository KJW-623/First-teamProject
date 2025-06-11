import { useState } from "react";
import "./Details.css";
import { Link, useNavigate } from "react-router-dom";

const projectDetailData = {
  id: "summer_001",
  name: "여름나기 셔츠와 원피스, 반바지",
  price: 30000,
  images: [
    "../images/커버표지-1.png",
    "../images/커버표지-2.png", // 실제 이미지 경로에 맞게 수정
    "../images/커버표지-3.png",
    "../images/커버표지-4.png",
  ],
  currentFunding: 10617000, // 숫자 형태로 변경
  fundingGoal: 500000,   // 숫자 형태로 변경
  remainingDays: 12,
  backers: 58,
  fundingPeriod: "2025.06.02 ~ 2025.06.16",
  paymentDate: "2025.06.17",
  deliveryStartDate: "2025.07.07",
  likes: 429,
  comments: 22,
  creator: {
    name: "옷을 만드는 사람",
    profileImage: "../images/creator-profile.png", // 예시 프로필 이미지 경로
    bio: "지속 가능한 패션을 추구하는 옷 제작자입니다. 환경을 생각하며 편안하고 스타일리시한 옷을 만듭니다.",
    projectsCount: 3,
  },
  story: `
    <h2>안녕하세요, '옷을 만드는 사람'입니다.</h2>
    <p>이번 프로젝트는 다가오는 무더운 여름을 시원하고 스타일리시하게 보낼 수 있는 셔츠, 원피스, 반바지 컬렉션입니다.</p>
    <p>저희는 항상 편안함과 실용성을 최우선으로 생각하며, 자연에서 영감을 받은 색감과 소재를 사용합니다.</p>
    <h3>환경을 생각하는 소재</h3>
    <p>이번 컬렉션은 통기성이 뛰어난 린넨과 부드러운 오가닉 코튼 혼방 소재를 사용하여 제작되었습니다. 피부에 자극이 적고, 땀 흡수 및 건조가 빨라 한여름에도 쾌적함을 유지할 수 있습니다.</p>
    <img src="https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5Ijoic3RvcnkvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1LzdjMjFkYTJmLTBhYjEtNDEzMC04NjJhLWIxM2EyMDExOTEwYi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==" alt="스토리 이미지 1" style="max-width:100%; height:auto; margin: 20px 0; border-radius: 8px;">
    <h3>디자인 특징</h3>
    <ul>
      <li><strong>여름 셔츠:</strong> 여유로운 핏과 드롭 숄더 디자인으로 활동성을 높였으며, 다양한 하의와 매치하기 좋습니다.</li>
      <li><strong>데일리 원피스:</strong> 가볍고 통기성이 좋은 소재로 제작되어 일상복으로도, 휴가지에서도 활용하기 좋은 디자인입니다.</li>
      <li><strong>편안한 반바지:</strong> 허리 밴딩과 적절한 기장감으로 남녀노소 편안하게 입을 수 있습니다.</li>
    </ul>
    <img src="https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5Ijoic3RvcnkvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1LzgzYjNmNTdiLWEzNGUtNGJkNi1hNDk5LWMwOWQxZjM4ZmVhMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==" alt="스토리 이미지 2" style="max-width:100%; height:auto; margin: 20px 0; border-radius: 8px;">
    <h3>리워드 구성</h3>
    <p>각 리워드는 정성껏 준비한 여름 컬렉션 아이템으로 구성되어 있습니다. 자세한 내용은 리워드 탭에서 확인해주세요.</p>
    <p>여러분의 후원으로 저희의 환경 친화적인 패션이 더 많은 사람들에게 닿을 수 있기를 바랍니다.</p>
    <p>감사합니다.</p>
  `,
  reward: [
    { id: 1, name: "[얼리버드] 여름 린넨 셔츠 (단품)", price: 30000, description: "시원하고 가벼운 린넨 셔츠 한 벌. (정가 35,000원)", deliveryDate: "2025년 7월 7일 발송 예정", limit: 100, current: 85 },
    { id: 2, name: "[얼리버드] 여름 린넨 원피스 (단품)", price: 45000, description: "데일리로 입기 좋은 편안한 린넨 원피스. (정가 50,000원)", deliveryDate: "2025년 7월 7일 발송 예정", limit: 80, current: 60 },
    { id: 3, name: "[세트] 린넨 셔츠 + 반바지", price: 60000, description: "린넨 셔츠와 시원한 반바지 세트.", deliveryDate: "2025년 7월 7일 발송 예정", limit: 50, current: 30 },
    { id: 4, name: "[풀패키지] 셔츠 + 원피스 + 반바지", price: 100000, description: "여름 컬렉션 전 품목을 경험해보세요!", deliveryDate: "2025년 7월 7일 발송 예정", limit: 20, current: 5 },
    { id: 5, name: "자유 후원하기", price: 0, description: "응원하는 만큼 후원해주세요!", deliveryDate: "2025년 0월 0일 발송 예정", limit: 100, current: 100 }
  ],
  communityPosts: [
    { id: 1, author: "옷을 만드는 사람", date: "2025.06.05", content: "프로젝트 시작 후 많은 분들의 관심과 후원에 감사드립니다! 초기 목표를 달성했습니다!" },
    { id: 2, author: "후원자123", date: "2025.06.07", content: "원피스 디자인이 너무 예뻐요! 빨리 받아보고 싶습니다." },
    { id: 3, author: "옷을 만드는 사람", date: "2025.06.09", content: "추가 리워드에 대한 문의가 많아 내부 논의 후 곧 공지 예정입니다. 기대해주세요!" },
  ],
  backersList: [
    { id: 1, name: "익명 후원자", amount: 10000 },
    { id: 2, name: "김*수", amount: 30000 },
    { id: 3, name: "이*영", amount: 50000 },
    { id: 4, name: "박*민", amount: 30000 },
    { id: 5, name: "최*현", amount: 10000 },
  ],
  qnaList: [
    { id: 1, question: "세탁은 어떻게 해야 하나요?", answer: "찬물 손세탁 또는 드라이클리닝을 권장합니다. 건조기 사용은 피해주세요." },
    { id: 2, question: "사이즈 선택에 대한 가이드가 있을까요?", answer: "상세 페이지 하단의 사이즈 가이드를 참고해주시고, 궁금한 점은 문의하기를 통해 질문해주세요." },
  ]
};


function Details() {
  const [mainImage, setMainImage] = useState(projectDetailData.images[0]);
  const [activeTab, setActiveTab] = useState("story");
  const [showRewardDropdown, setShowRewardDropdown] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const navigate = useNavigate();

  const fundingPercentage = (projectDetailData.currentFunding / projectDetailData.fundingGoal) * 100;

  const formatCurrency = (amount) => amount.toLocaleString("ko-KR");

  const handleGoToPayment = () => {
    if (!selectedReward) return;

    navigate("/Payment", {
      state: {
        reward: {
          id: selectedReward.id,
          name: selectedReward.name,
          price: selectedReward.price,
          description: selectedReward.description,
          deliveryDate: selectedReward.deliveryDate
        },
        project: {
          id: projectDetailData.id,
          name: projectDetailData.name,
          image: mainImage,
        }
      },
    });
  };

  const handleRewardSelect = (reward) => {
    setSelectedReward(reward);
    setShowRewardDropdown(false);
  };

  return (
    <div className="container">
      <div className="layout">
        <div className="image-section">
          <img src={mainImage} className="main-image" alt={projectDetailData.name} />
          <div className="thumbnails">
            {projectDetailData.images.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                className={`thumbnail ${mainImage === imagePath ? "active" : ""}`}
                onClick={() => setMainImage(imagePath)}
                alt={`${projectDetailData.name} 썸네일 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <span className="tag">🎁펀딩</span>
          <h1 className="title">{projectDetailData.name}</h1>

          <div className="funding-info">
            <div className="detail-item">
              <p className="detail-label">모인 금액</p>
              <p className="detail-value">
                <span className="amount">{formatCurrency(projectDetailData.currentFunding)} 원</span>
                <span className="percentage"> {fundingPercentage.toFixed(0)}%</span>
              </p>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${Math.min(100, fundingPercentage)}%` }}></div>
            </div>
          </div>

          <div className="details">
            <DetailItem label="남은 시간" value={`${projectDetailData.remainingDays}일`} />
            <DetailItem label="후원자" value={`${projectDetailData.backers}명`} />
            <DetailItem label="목표금액" value={`₩${formatCurrency(projectDetailData.fundingGoal)}`} />
            <DetailItem label="펀딩 기간" value={projectDetailData.fundingPeriod} />
            <DetailItem label="결제" value={projectDetailData.paymentDate} />
            <DetailItem label="예상 발송 시작일" value={projectDetailData.deliveryStartDate} />
          </div>

          <div className="reward-section">
            <button onClick={() => setShowRewardDropdown((prev) => !prev)} className="select-btn">
              {selectedReward ? `선택된 리워드: ${selectedReward.name}` : "리워드를 선택하세요"}
            </button>

            {showRewardDropdown && (
              <div className="reward-dropdown">
                {projectDetailData.reward.map((reward) => (
                  <div key={reward.id} className="reward-item" onClick={() => handleRewardSelect(reward)}>
                    <h4>{reward.name}</h4>
                    <p className="reward-price">{formatCurrency(reward.price)}원</p>
                    <p className="reward-description">{reward.description}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              className="proceed-to-payment-btn"
              onClick={handleGoToPayment}
              disabled={!selectedReward}
            >
              후원하기
            </button>
          </div>
        </div>
      </div>

      <div className="content-tabs-section">
        <div className="tabs-nav">
          <button
            className={`tab-button ${activeTab === "story" ? "active" : ""}`}
            onClick={() => setActiveTab("story")}
          >
            스토리
          </button>
          <button
            className={`tab-button ${activeTab === "community" ? "active" : ""}`}
            onClick={() => setActiveTab("community")}
          >
            커뮤니티 ({projectDetailData.communityPosts.length})
          </button>
          <button
            className={`tab-button ${activeTab === "backers" ? "active" : ""}`}
            onClick={() => setActiveTab("backers")}
          >
            후원자 ({projectDetailData.backersList.length})
          </button>
          <button
            className={`tab-button ${activeTab === "qna" ? "active" : ""}`}
            onClick={() => setActiveTab("qna")}
          >
            Q&A ({projectDetailData.qnaList.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "story" && (
            <div className="story-content">
              <h3>프로젝트 스토리</h3>
              <div dangerouslySetInnerHTML={{ __html: projectDetailData.story }} />
            </div>
          )}

          {activeTab === "community" && (
            <div className="community-content">
              <h3>커뮤니티</h3>
              {projectDetailData.communityPosts.length > 0 ? (
                <ul className="community-list">
                  {projectDetailData.communityPosts.map((post) => (
                    <li key={post.id} className="community-post">
                      <p className="post-author">{post.author} <span className="post-date">{post.date}</span></p>
                      <p className="post-content">{post.content}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-content">아직 작성된 커뮤니티 글이 없습니다.</p>
              )}
              <div className="new-post-form">
                <textarea placeholder="새로운 글을 작성해주세요."></textarea>
                <button>작성</button>
              </div>
            </div>
          )}

          {activeTab === "backers" && (
            <div className="backers-content">
              <h3>후원자 목록</h3>
              {projectDetailData.backersList.length > 0 ? (
                <ul className="backers-list">
                  {projectDetailData.backersList.map((backer) => (
                    <li key={backer.id} className="backer-item">
                      <span className="backer-name">{backer.name}</span>
                      <span className="backer-amount">{formatCurrency(backer.amount)}원</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-content">아직 후원자가 없습니다.</p>
              )}
            </div>
          )}

          {activeTab === "qna" && (
            <div className="qna-content">
              <h3>Q&A</h3>
              {projectDetailData.qnaList.length > 0 ? (
                <ul className="qna-list">
                  {projectDetailData.qnaList.map((item) => (
                    <li key={item.id} className="qna-item">
                      <p className="qna-question"><strong>Q:</strong> {item.question}</p>
                      <p className="qna-answer"><strong>A:</strong> {item.answer}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-content">아직 질문이 없습니다.</p>
              )}
              <div className="new-qna-form">
                <textarea placeholder="질문을 작성해주세요."></textarea>
                <button>질문하기</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="creator-section">
        <h3>프로젝트 창작자</h3>
        <div className="creator-info">
          <img src='../images/커버표지-1.png' alt="창작자 프로필" className="creator-profile-img" />
          <div className="creator-details">
            <p className="creator-name">{projectDetailData.creator.name}</p>
            <p className="creator-bio">{projectDetailData.creator.bio}</p>
            <p className="creator-projects">진행한 프로젝트: {projectDetailData.creator.projectsCount}개</p>
          </div>
          <Link to='/Community'>
            <button className="contact-creator-btn">창작자에게 문의하기</button></Link>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ label, value }) => (
  <div className="detail-item">
    <p className="detail-label">{label}</p>
    <p className="detail-value">{value}</p>
  </div>
);

export default Details;
