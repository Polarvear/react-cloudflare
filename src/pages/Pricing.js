import React, { useState } from 'react';
import './Pricing.css';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      id: 1,
      name: '스타터',
      description: '개인 사용자와 소규모 프로젝트에 적합',
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: '🚀',
      popular: false,
      features: [
        { text: '기본 기능 사용', included: true },
        { text: '5GB 저장공간', included: true },
        { text: '커뮤니티 지원', included: true },
        { text: '월 100회 API 호출', included: true },
        { text: '기본 분석 도구', included: true },
        { text: '우선 지원', included: false },
        { text: '고급 기능', included: false },
        { text: '사용자 정의 도메인', included: false }
      ]
    },
    {
      id: 2,
      name: '프로',
      description: '전문가와 성장하는 팀을 위한 플랜',
      monthlyPrice: 29000,
      yearlyPrice: 290000,
      icon: '⭐',
      popular: true,
      features: [
        { text: '모든 기본 기능', included: true },
        { text: '100GB 저장공간', included: true },
        { text: '우선 이메일 지원', included: true },
        { text: '월 10,000회 API 호출', included: true },
        { text: '고급 분석 및 리포트', included: true },
        { text: '팀 협업 도구', included: true },
        { text: '사용자 정의 도메인', included: true },
        { text: '화이트 라벨링', included: false }
      ]
    },
    {
      id: 3,
      name: '엔터프라이즈',
      description: '대규모 조직을 위한 맞춤형 솔루션',
      monthlyPrice: 99000,
      yearlyPrice: 990000,
      icon: '💎',
      popular: false,
      features: [
        { text: '모든 프로 기능', included: true },
        { text: '무제한 저장공간', included: true },
        { text: '24/7 전화 지원', included: true },
        { text: '무제한 API 호출', included: true },
        { text: '전용 계정 관리자', included: true },
        { text: 'SLA 보장', included: true },
        { text: '화이트 라벨링', included: true },
        { text: '맞춤형 통합', included: true }
      ]
    }
  ];

  const formatPrice = (price) => {
    return price.toLocaleString('ko-KR');
  };

  const getPrice = (plan) => {
    if (plan.monthlyPrice === 0) return '무료';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12;
    return `₩${formatPrice(Math.floor(price))}`;
  };

  const getSavings = (plan) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    return savings;
  };

  return (
    <div className="pricing">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-title">요금제</h1>
          <p className="pricing-hero-subtitle">
            비즈니스에 맞는 완벽한 플랜을 선택하세요
          </p>
          
          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>월간</span>
            <button 
              className="toggle-switch"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <span className={`toggle-slider ${billingCycle === 'yearly' ? 'yearly' : ''}`}></span>
            </button>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              연간 <span className="save-badge">20% 절약</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-content">
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">인기</div>}
              
              <div className="pricing-card-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="pricing-card-price">
                <div className="price">
                  {getPrice(plan)}
                  {plan.monthlyPrice !== 0 && <span className="price-period">/월</span>}
                </div>
                {billingCycle === 'yearly' && getSavings(plan) && (
                  <div className="savings">
                    연간 ₩{formatPrice(getSavings(plan))} 절약
                  </div>
                )}
              </div>

              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.included ? 'included' : 'not-included'}>
                    <span className="feature-icon">
                      {feature.included ? '✓' : '✗'}
                    </span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.monthlyPrice === 0 ? '무료로 시작하기' : '시작하기'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <h2 className="faq-title">자주 묻는 질문</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3 className="faq-question">언제든지 플랜을 변경할 수 있나요?</h3>
            <p className="faq-answer">
              네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 
              변경 사항은 즉시 적용되며, 요금은 일할 계산됩니다.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">무료 체험 기간이 있나요?</h3>
            <p className="faq-answer">
              모든 유료 플랜에 대해 14일 무료 체험을 제공합니다. 
              신용카드 등록 없이 모든 기능을 체험해보실 수 있습니다.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">결제 수단은 무엇이 있나요?</h3>
            <p className="faq-answer">
              신용카드, 체크카드, 계좌이체, PayPal 등 다양한 결제 수단을 지원합니다. 
              기업 고객의 경우 세금계산서 발행도 가능합니다.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">환불 정책은 어떻게 되나요?</h3>
            <p className="faq-answer">
              구매 후 30일 이내에 만족하지 못하신 경우 전액 환불해드립니다. 
              별도의 위약금이나 수수료는 없습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="pricing-cta-content">
          <h2 className="pricing-cta-title">아직 고민 중이신가요?</h2>
          <p className="pricing-cta-text">
            전문가와 상담하여 비즈니스에 가장 적합한 플랜을 찾아보세요
          </p>
          <button className="pricing-cta-btn">영업팀에 문의하기</button>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
