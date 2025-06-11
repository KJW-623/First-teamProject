import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${item.id}`);
    };

    return (
        <div className="product-card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img
                src={item?.imgSrc}
                alt={item?.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="Brand-style">Brand</div>
            <div>{item?.title}</div>
            <div className="percent-style">{item?.percent}% 달성</div>
        </div>
    );
};

export default ProductCard;
