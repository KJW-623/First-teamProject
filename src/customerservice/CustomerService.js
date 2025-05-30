import './CustomerService.css';
import FloatingButton from './floatingButton/FloatingButton';
import { Container, Row, Col } from 'react-bootstrap';

function CustomerService() {
    return (
        <div>
            <h2>고객상담 페이지입니다.</h2>
            <p>궁금한 점이 있다면 문의해주세요.</p>
            <Container>
                <Row>
                    <Col>
                        <p>펀드플로우 기본</p>
                    </Col>
                    <Col>
                        <p>후원자 질문</p>
                    </Col>
                    <Col>
                        <p>창작자 질문</p>
                    </Col>
                </Row>
            </Container>
            <h3>창작자를 위한 가이드</h3>
            <Container>
                <Row xs={2} md={4} lg={6}>
                    <Col>
                        <p>시작을 쉽게, 창작자 가이드</p>
                        <p>성공을 위한 펀딩 설계부터 홍보 방법까지</p>
                    </Col>
                    <Col>
                        <p>선물 배송 가이드</p>
                        <p>배송 전 준비부터 포장, 배송 후 관리까지</p>
                    </Col>
                </Row>
            </Container>
            <h3>약관 및 정책</h3>
            <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">프리오더 이용약관</a></li>
                <li><a href="#">광고서비스 이용약관</a></li>
                <li><a href="#">개인정보 처리방침</a></li>
                <li><a href="#">커뮤니티 운영정책</a></li>
                <li><a href="#">프로젝트 심사 기준</a></li>
            </ul>
            <FloatingButton />
        </div>
    )
}
export default CustomerService;