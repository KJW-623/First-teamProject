import React, {useState} from "react";
import "../App.css";
import "../Details.css";

function Details () {

    const [mainImage, setMainImage] = useState("../images/커버표지-1.png")
  return (
    <div className="container">
      {/* 좌우 레이아웃 */}
      <div className="layout">
        {/* 이미지 영역 */}
        <div className="image-section">
          <img
            src={mainImage}
            alt="메인 이미지"
            className="main-image"
          />
          <div className="thumbnails">
            {[1, 2, 3, 4].map((num) => {
                const imagePath = `../images/커버표지-${num}.png`;
                return(
              <img
                key={num}
                src={imagePath} 
                alt={`썸네일 ${num}`}
                className={`thumbnail ${mainImage === imagePath ? "active" : ""}`}
                onClick={()=>setMainImage(imagePath)}
              />
                );
            })}
          </div>
        </div>
      

        {/* 정보 영역 */}
        <div className="info-section">
          <span className="tag">펀딩</span>
          <h1 className="title">신:서울 여름나기 셔츠와 원피스, 반바지</h1>

          <div className="funding-info">
            <p className="amount">₩10,617,000 원</p>
            <p className="percentage">2123%</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }}></div>
            </div>
          </div>

          <div className="details">
            <DetailItem label="남은 시간" value="12일" />
            <DetailItem label="후원자" value="58명" />
            <DetailItem label="목표금액" value="₩500,000" />
            <DetailItem label="펀딩 기간" value="2025.06.02 ~ 2025.06.16" />
            <DetailItem label="결제" value="2025.06.17" />
            <DetailItem label="예상 발송 시작일" value="2025.07.07" />
          </div>

          <button className="support-btn">후원하기</button>

          <div className="likes-comments">❤️ 429 &nbsp; 💬 22</div>
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
