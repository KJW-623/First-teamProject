import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductAll =() => {
const[productList, setProductList] = useState([]);

    const getProducts = async()=>{
        let url='http://localhost:5000/products'
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(()=>{
        getProducts();
    },[]);

    return (

        <>

        <br/>
        <div className="slect-box">
            <select className="slect-percentbox">
                <option>전체보기</option>
                <option>75% 이하</option>
                <option>75% ~ 100%</option>
                <option>100% 이상</option>
            </select>
            <selct>
                <botton> 에디터 추천</botton>
            </selct>
        </div>

        

        <br/><br/><br/><br/>
        <Container >
            <Row className="g-4">
                {productList.map((menu)=>(
                    <Col lg={3} md={4} sm={6} xs={6} key={menu.id}>
                <ProductCard item={menu}/>
                </Col>
                ))}
                
            </Row>
        </Container>
        </>
        
    
    );
};

export default ProductAll;