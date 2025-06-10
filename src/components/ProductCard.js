import './ProductCard.css'


const ProductCard = ({item}) => {
    return (<div className="product-card">
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