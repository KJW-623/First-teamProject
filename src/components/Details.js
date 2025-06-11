import { useState } from "react";
import "../Details.css";
import { Link } from "react-router-dom";

function Details() {

  const [mainImage, setMainImage] = useState("../images/커버표지-1.png")

  const productData = {
    id: "summer_001",
    name: "여름나기 셔츠와 원피스, 반바지",
    price: 30000,
    image: mainImage,
  };

  return (
    <div className="container">
      <div className="layout">
        <div className="image-section">
          <img
            src={mainImage}
            className="main-image"
          />
          <div className="thumbnails">
            {[1, 2, 3, 4].map((num) => {
              const imagePath = `../images/커버표지-${num}.png`;
              return (
                <img
                  key={num}
                  src={imagePath}
                  className={`thumbnail ${mainImage === imagePath ? "active" : ""}`}
                  onClick={() => setMainImage(imagePath)}
                />
              );
            })}
          </div>
        </div>

        <div className="info-section">
          <span className="tag">🎁펀딩</span>
          <h1 className="title">여름나기 셔츠와 원피스, 반바지</h1>

          <div className="funding-info">
            <DetailItem label="모인 금액" /><span className="amount">10,617,000 원</span><span className="percentage"> 2123%</span>
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

          <button className="likes-comments" style={{ fontSize: '15px', backgroundColor: 'white', border: 'none' }}>❤️ 429 &nbsp; 💬 22ㅤ</button>
            <Link to={`/Payment`}>
            <button className="support-btn" style={{ width: '75%' }}>후원하기</button></Link>
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
