import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import productsData from "../assets/data/products.json"; 

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(productsData); 
    }, []);

    return (
        <>
            <br />
            <div className="select-box">
                <select className="select-percentbox">
                    <option>전체보기</option>
                    <option>75% 이하</option>
                    <option>75% ~ 100%</option>
                    <option>100% 이상</option>
                </select>
                <button style={{ marginLeft: "10px" }}>에디터 추천</button>
            </div>

            <br /><br /><br /><br />
            <Container>
                <Row className="g-4">
                    {productList.map((menu) => (
                        <Col lg={3} md={4} sm={6} xs={6} key={menu.id}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ProductAll;
