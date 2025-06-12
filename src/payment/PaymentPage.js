import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    //없으면 빈 객체
    const location = useLocation();
    const { project, selectedReward } = location.state || {};

    const initialFundingAmount = selectedReward ? selectedReward.price : 0;

    //후원할 금액
    const [fundingAmount, setFundingAmount] = useState(initialFundingAmount);
    //약관 동의
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    //후원자 이름
    const [name, setName] = useState('');
    //후원자 이메일
    const [email, setEmail] = useState('');
    //선택 결제 수단
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditCard');
    //후원권 코드
    const [rewardCode, setRewardCode] = useState('');
    //최종 결제 금액
    const [finalPaymentAmount, setFinalPaymentAmount] = useState(0);
    //제출했는지 판단
    const [isSubmitting, setIsSubmitting] = useState(false);
    //검사 오류
    const [errors, setErrors] = useState({});

    //fundingAmount 상태 변경시
    useEffect(() => {
        setFinalPaymentAmount(fundingAmount);
    }, [fundingAmount]);

    // 이름, 이메일, 후원코드, 약관동의, 결제수단 상태 업데이트
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleRewardCodeChange = (e) => setRewardCode(e.target.value);
    const handleTermsChange = (e) => {
        setAgreedToTerms(e.target.checked);
    };
    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    //폼 오류 확인
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

    //기본 제출 방지
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert('입력된 정보를 확인해주세요.');
            return;
        }

        //제출중
        setIsSubmitting(true);

        console.log("폼 데이터:", {
            fundingAmount,
            name,
            email,
            selectedPaymentMethod,
            rewardCode,
            finalPaymentAmount,
            agreedToTerms,
            receivedProject: project,
            receivedReward: selectedReward
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        //제출 완료
        alert('결제가 성공적으로 요청되었습니다!');
        setIsSubmitting(false);
    };

    return (
        <div className="payment-page-container">
            {/* 프로젝트 후원 상단 */}
            <header className="payment-header">
                <h1>FundFlow</h1>
                <h2>프로젝트 후원하기</h2>
            </header>

            {/* 상품 확인란 */}
            <form onSubmit={handleSubmit} className="payment-form">
                <section className="product-info-section">
                    <h3>선택한 리워드 정보</h3>
                    <div className="product-details">
                        <img src={project?.images?.[0] || 'https://img.tumblbug.com/eyJidWNrZXQiOiJ0dW1ibGJ1Zy1pbWctYXNzZXRzIiwia2V5Ijoic3RvcnkvODVlYmI1YTYtMWIzZS00M2IzLWEyMDEtMTJiNjIyOTlhOGU1LzQzMzQxN2RiLTUyYTEtNDRiNS04NmRlLWY1MjE4MjQ4YzAzMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEyNDAsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ=='} alt={selectedReward?.name || '기본 상품 이미지'} className="product-image" />
                        <div className="product-text">
                            <h4>{selectedReward?.name || '자유 후원하기'}</h4>
                            <p>
                                <strong>{(selectedReward?.price || 0).toLocaleString()}원</strong>
                                {selectedReward?.discount && <span className="discount">{selectedReward.discount.toLocaleString()}원</span>}
                            </p>
                            <p>{selectedReward?.description || '자유 후원하기.'}</p>
                        </div>
                    </div>
                </section>

                <section className="funding-options-section">
                    <h3>선물 구성</h3>
                    <div className="form-group">
                        <label htmlFor="fundingAmount">선택한 리워드 금액</label>
                        <input
                            id="fundingAmount"
                            type="number"
                            value={fundingAmount}
                            min="0"
                            className="Pinput-small"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="additionalFunding">추가 후원금 (선택)</label>
                        <div className="flex-group">
                            <input
                                id="additionalFunding"
                                type="number"
                                value={0}
                                onChange={() => { }}
                                className="Pinput-small"
                                disabled
                            />
                        </div>
                    </div>
                </section>

                {/* 후원자 정보 입력란 */}
                <section className="supporter-info-section">
                    <h3>후원자 정보</h3>
                    <div className="form-group">
                        <label htmlFor="name">연락처</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="연락처를 입력하세요."
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

                {/* 결제수단 active탭 */}
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
                        <p htmlFor="termsAgreement">전체 동의</p>
                        {errors.terms && <p className="error-message">{errors.terms}</p>}
                    </div>
                    <ul className="terms-list">
                        <li>
                            <input type="checkbox" id="term1" checked={agreedToTerms} onChange={handleTermsChange}/>
                            <p htmlFor="term1">후원에 대한 비회원 개인정보 수집 및 이용 동의</p>
                            <span className="view-details">자세히 보기</span>
                        </li>
                        <li>
                            <input type="checkbox" id="term2" checked={agreedToTerms} onChange={handleTermsChange}/>
                            <p htmlFor="term2">펀드플로우는 프로젝트의 진척이 늦어지거나 중단될 수 있으며 배송은 지연될 수 있습니다.</p>
                            <span className="view-details">자세히 보기</span>
                        </li>
                        <li>
                            <input type="checkbox" id="term3" checked={agreedToTerms} onChange={handleTermsChange} />
                            <p htmlFor="term3">프로젝트에 대한 결제 실행 및 수령 동의</p>
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
        </div>
    );
};

export default PaymentPage;