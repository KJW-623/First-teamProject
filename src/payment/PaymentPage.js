import { useState, useEffect, useCallback } from 'react';
import './PaymentPage.css';


const PaymentPage = ({ product }) => {

    const [fundingAmount, setFundingAmount] = useState(1000);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
    const [rewardCode, setRewardCode] = useState('');
    const [finalPaymentAmount, setFinalPaymentAmount] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const basePrice = product ? product.price : 0;
        const calculatedAmount = basePrice + fundingAmount;
        setFinalPaymentAmount(calculatedAmount);
    }, [fundingAmount, product]);

    const handleFundingAmountChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setFundingAmount(isNaN(value) ? 0 : value);
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleRewardCodeChange = (e) => setRewardCode(e.target.value);
    const handleTermsChange = (e) => {
        setAgreedToTerms(e.target.checked);
    };
    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const validateForm = useCallback(() => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = '연락처 정보를 입력해주세요.';
        }
        if (!email.trim()) {
            newErrors.email = '이메일을 입력해주세요.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = '유효한 이메일 주소를 입력해주세요.';
        }
        if (!agreedToTerms) {
            newErrors.terms = '모든 약관에 동의해야 합니다.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [name, email, agreedToTerms]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('입력된 정보를 확인해주세요.');
            return;
        }

        setIsSubmitting(true);

        console.log("폼 데이터:", {
            fundingAmount,
            name,
            email,
            selectedPaymentMethod,
            rewardCode,
            finalPaymentAmount,
            agreedToTerms,
            receivedProduct: product
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        alert('결제가 성공적으로 요청되었습니다!');
        setIsSubmitting(false);
    };

    if (!product || !product.name || typeof product.price === 'undefined') {
        return (
            <div className="payment-page-container" style={{ textAlign: 'center', padding: '50px' }}>
                <h2>상품 정보를 불러올 수 없습니다.</h2>
                <p>상품 페이지를 통해 다시 접근해주세요.</p>
                <button onClick={() => window.location.href='/home'}>홈으로 돌아가기</button>
            </div>
        );
    }

    return (
        <div className="payment-page-container">
            <header className="payment-header">
                <h1>FundFlow</h1>
                <h2>프로젝트 후원하기</h2>
            </header>

            <form onSubmit={handleSubmit} className="payment-form">
                <section className="product-info-section">
                    <h3>상품 정보</h3>
                    <div className="product-details">
                        <img src={product.image || 'https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_640.jpg'} alt={product.name} className="product-image" />
                        <div className="product-text">
                            <h4>{product.name}</h4>
                            <p>
                                <strong>{product.price.toLocaleString()}원</strong>
                                {product.discount && <span className="discount">{product.discount.toLocaleString()}원</span>}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="funding-options-section">
                    <h3>선물 구성</h3>
                    <div className="form-group">
                        <label>선물 없이 후원하기</label>
                        <input type="checkbox" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fundingAmount">선물 금액</label>
                        <input
                            id="fundingAmount"
                            type="number"
                            value={fundingAmount}
                            onChange={handleFundingAmountChange}
                            min="0"
                            className="input-small"
                        /> 원
                    </div>
                    <div className="form-group">
                        <label htmlFor="additionalFunding">추가 후원금 (선택)</label>
                        <div className="flex-group">
                            <input
                                id="additionalFunding"
                                type="number"
                                value={0}
                                onChange={() => { }}
                                className="input-small"
                                disabled
                            /> 원
                            <p className="help-text">❤️ 후원 증가만으로도 프로젝트에 더 큰 힘이 될 수 있어요!</p>
                        </div>
                    </div>
                </section>

                <section className="supporter-info-section">
                    <h3>후원자 정보</h3>
                    <div className="form-group">
                        <label htmlFor="name">연락처</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="010-8493-8365"
                            className="input-full"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="이메일을 입력하세요."
                            className="input-full"
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <p className="help-text">
                        * 비회원인 경우에도 관련 소식이 전달됩니다.<br />
                        * 이메일은 메이커가 새 소식을 전할 때만 사용하며 비공개됩니다.
                    </p>
                </section>

                <section className="reward-section">
                    <h3>프로젝트 후원권</h3>
                    <div className="form-group flex-group space-between">
                        <label htmlFor="rewardCode">후원권 선택</label>
                        <div className="reward-input-group">
                            <input
                                id="rewardCode"
                                type="text"
                                value={rewardCode}
                                onChange={handleRewardCodeChange}
                                placeholder="사용 가능 0개 / 0원 수량"
                            />
                            <button type="button" className="secondary-button">등록/사용</button>
                        </div>
                    </div>
                </section>

                <section className="payment-method-section">
                    <h3>결제 수단</h3>
                    <div className="payment-options">
                        <button
                            type="button"
                            className={`payment-option-button ${selectedPaymentMethod === 'creditCard' ? 'active' : ''}`}
                            onClick={() => handlePaymentMethodChange('creditCard')}
                        >
                            신용카드 간편결제
                        </button>
                        <button
                            type="button"
                            className={`payment-option-button ${selectedPaymentMethod === 'naverPay' ? 'active' : ''}`}
                            onClick={() => handlePaymentMethodChange('naverPay')}
                        >
                            네이버페이
                        </button>
                        <button
                            type="button"
                            className={`payment-option-button ${selectedPaymentMethod === 'kakaoPay' ? 'active' : ''}`}
                            onClick={() => handlePaymentMethodChange('kakaoPay')}
                        >
                            카카오페이
                        </button>
                    </div>
                    {selectedPaymentMethod === 'creditCard' && (
                        <div className="card-details-form">
                            <button type="button" className="link-button">+ 카드 등록</button>
                            <p className="help-text">등록된 카드가 없습니다.</p>
                        </div>
                    )}
                </section>

                <section className="final-payment-section">
                    <h3>최종 후원 금액</h3>
                    <p className="final-amount">{finalPaymentAmount.toLocaleString()}원</p>
                    <p className="info-text">
                        리워드는 등록된 날짜 (2025.06.13)에 배송됩니다. 프로젝트가 무산되거나 연기된 경우, 배송은 지연될 수 있습니다.
                    </p>

                    <div className="terms-checkbox">
                        <input
                            type="checkbox"
                            id="termsAgreement"
                            checked={agreedToTerms}
                            onChange={handleTermsChange}
                        />
                        <label htmlFor="termsAgreement">전체 동의</label>
                        {errors.terms && <p className="error-message">{errors.terms}</p>}
                    </div>
                    <ul className="terms-list">
                        <li>
                            <input type="checkbox" id="term1" checked={agreedToTerms} onChange={handleTermsChange} disabled />
                            <label htmlFor="term1">후원에 대한 비회원 개인정보 수집 및 이용 동의</label>
                            <span className="view-details">자세히 보기</span>
                        </li>
                        <li>
                            <input type="checkbox" id="term2" checked={agreedToTerms} onChange={handleTermsChange} disabled />
                            <label htmlFor="term2">펀드플로우는 플랫폼의 특성상 프로젝트의 진척이 늦어지거나 중단될 수 있으며, 배송은 예정보다 지연될 수 있음을 고지합니다.</label>
                            <span className="view-details">자세히 보기</span>
                        </li>
                        <li>
                            <input type="checkbox" id="term3" checked={agreedToTerms} onChange={handleTermsChange} disabled />
                            <label htmlFor="term3">프로젝트에 대한 결제 실행 및 수령 동의</label>
                            <span className="view-details">자세히 보기</span>
                        </li>
                    </ul>
                    <p className="help-text">
                        결제를 위해서는 위 모든 약관에 동의해야 합니다. 비동의시에는 선물 구성 변경을 통한 결제만 가능합니다.
                    </p>
                </section>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? '결제 진행 중...' : '후원하기'}
                </button>
            </form>

            <footer className="payment-footer">
                <p>이용약관 | 개인정보처리방침 | 고객센터</p>
                <p>펀드플로우에서는 취급하는 모든 개인정보는 서비스 이용 및 통신에만 사용되며, 비회원 가입, 선후원, 개인 취급 등을 위해 개인정보를 요청하지 않습니다.</p>
                <p>© 2025 FundFlow Inc.</p>
            </footer>
        </div>
    );
};

export default PaymentPage;