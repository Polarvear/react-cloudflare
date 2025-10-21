import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setShowModal(true);
  };
  
  // Prevent unused variable warning
  if (selectedService && showModal) {
    console.log('Service selected:', selectedService);
  }

  return (
    <div className="services-page">
      {/* 프로모션 배너 */}
      <div className="promo-banner">
        <div className="promo-content">
          <span className="promo-badge">🎁 특별 이벤트</span>
          <h3>지금 상담 신청 시 <span className="promo-highlight">첫 프로젝트 20% 할인!</span></h3>
          <p>선착순 10명 한정 • 이번 주까지만</p>
        </div>
      </div>

      <section className="services-hero">
        <h1>🚀 프리미엄 서비스</h1>
        <p>고객의 성공을 위한 맞춤형 솔루션을 제공합니다</p>
        <div className="hero-badges">
          <div className="hero-badge-item">✓ 100% 만족 보장</div>
          <div className="hero-badge-item">✓ 무제한 수정</div>
          <div className="hero-badge-item">✓ 30일 환불 보장</div>
        </div>
      </section>

      <section className="services-content">
        <div className="service-card-large interactive" onClick={() => handleServiceClick('web')}>
          <div className="popular-tag">인기</div>
          <div className="service-icon-large">💻</div>
          <h2>웹 개발</h2>
          <div className="service-price">
            <span className="price-from">시작가</span>
            <span className="price-amount">300만원~</span>
          </div>
          <p>
            최신 기술 스택을 활용한 반응형 웹 애플리케이션 개발 서비스를 제공합니다.
            React, Vue, Angular 등 다양한 프레임워크를 활용하여 최적의 솔루션을 구현합니다.
          </p>
          <ul className="service-features">
            <li>✓ 반응형 웹 디자인</li>
            <li>✓ SPA (Single Page Application)</li>
            <li>✓ PWA (Progressive Web App)</li>
            <li>✓ 성능 최적화</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 4.9/5</span>
            <span>📦 200+ 프로젝트</span>
          </div>
        </div>

        <div className="service-card-large interactive" onClick={() => handleServiceClick('mobile')}>
          <div className="service-icon-large">📱</div>
          <h2>모바일 앱 개발</h2>
          <div className="service-price">
            <span className="price-from">시작가</span>
            <span className="price-amount">500만원~</span>
          </div>
          <p>
            iOS와 Android 플랫폼을 위한 네이티브 및 크로스 플랫폼 모바일 앱 개발 서비스를 제공합니다.
            사용자 경험을 최우선으로 고려한 직관적인 인터페이스를 구현합니다.
          </p>
          <ul className="service-features">
            <li>✓ React Native 개발</li>
            <li>✓ Flutter 개발</li>
            <li>✓ 네이티브 앱 개발</li>
            <li>✓ 앱 스토어 배포</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 4.8/5</span>
            <span>📦 150+ 프로젝트</span>
          </div>
        </div>

        <div className="service-card-large interactive" onClick={() => handleServiceClick('cloud')}>
          <div className="service-icon-large">☁️</div>
          <h2>클라우드 솔루션</h2>
          <div className="service-price">
            <span className="price-from">시작가</span>
            <span className="price-amount">200만원~</span>
          </div>
          <p>
            AWS, Azure, GCP 등 주요 클라우드 플랫폼을 활용한 확장 가능하고 안정적인 인프라 구축 서비스를 제공합니다.
            비용 효율적이고 안전한 클라우드 환경을 구성합니다.
          </p>
          <ul className="service-features">
            <li>✓ 클라우드 마이그레이션</li>
            <li>✓ 서버리스 아키텍처</li>
            <li>✓ 자동화 및 DevOps</li>
            <li>✓ 보안 및 모니터링</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 5.0/5</span>
            <span>📦 100+ 프로젝트</span>
          </div>
        </div>

        <div className="service-card-large interactive" onClick={() => handleServiceClick('design')}>
          <div className="service-icon-large">🎨</div>
          <h2>UI/UX 디자인</h2>
          <div className="service-price">
            <span className="price-from">시작가</span>
            <span className="price-amount">150만원~</span>
          </div>
          <p>
            사용자 중심의 디자인 철학을 바탕으로 직관적이고 매력적인 인터페이스를 설계합니다.
            사용성 테스트와 데이터 분석을 통해 최적의 사용자 경험을 제공합니다.
          </p>
          <ul className="service-features">
            <li>✓ 사용자 리서치</li>
            <li>✓ 와이어프레임 & 프로토타입</li>
            <li>✓ 비주얼 디자인</li>
            <li>✓ 사용성 테스트</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 4.9/5</span>
            <span>📦 180+ 프로젝트</span>
          </div>
        </div>

        <div className="service-card-large interactive" onClick={() => handleServiceClick('maintenance')}>
          <div className="service-icon-large">🔧</div>
          <h2>유지보수 & 지원</h2>
          <div className="service-price">
            <span className="price-from">월</span>
            <span className="price-amount">50만원~</span>
          </div>
          <p>
            프로젝트 완료 후에도 지속적인 유지보수와 기술 지원을 제공합니다.
            신속한 대응과 정기적인 업데이트로 안정적인 서비스 운영을 보장합니다.
          </p>
          <ul className="service-features">
            <li>✓ 24/7 기술 지원</li>
            <li>✓ 정기 업데이트</li>
            <li>✓ 버그 수정</li>
            <li>✓ 성능 모니터링</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 5.0/5</span>
            <span>📦 300+ 고객</span>
          </div>
        </div>

        <div className="service-card-large interactive" onClick={() => handleServiceClick('consulting')}>
          <div className="service-icon-large">📊</div>
          <h2>컨설팅</h2>
          <div className="service-price">
            <span className="price-from">시작가</span>
            <span className="price-amount">100만원~</span>
          </div>
          <p>
            비즈니스 목표 달성을 위한 전략적 IT 컨설팅 서비스를 제공합니다.
            기술 선택부터 프로젝트 관리까지 전 과정을 지원합니다.
          </p>
          <ul className="service-features">
            <li>✓ 기술 컨설팅</li>
            <li>✓ 프로젝트 관리</li>
            <li>✓ 아키텍처 설계</li>
            <li>✓ 비즈니스 분석</li>
          </ul>
          <button className="service-btn">무료 상담 신청 →</button>
          <div className="service-stats">
            <span>⭐ 4.9/5</span>
            <span>📦 120+ 프로젝트</span>
          </div>
        </div>
      </section>

      {/* 성공 사례 섹션 */}
      <section className="success-stories">
        <h2>🏆 성공 사례</h2>
        <p className="section-subtitle">고객과 함께한 성공의 순간들</p>
        <div className="stories-grid">
          <div className="story-card">
            <div className="story-number">300%</div>
            <p className="story-label">매출 증가</p>
            <span className="story-client">A 쇼핑몰</span>
          </div>
          <div className="story-card">
            <div className="story-number">500K+</div>
            <p className="story-label">앱 다운로드</p>
            <span className="story-client">B 스타트업</span>
          </div>
          <div className="story-card">
            <div className="story-number">50%</div>
            <p className="story-label">비용 절감</p>
            <span className="story-client">C 기업</span>
          </div>
          <div className="story-card">
            <div className="story-number">98%</div>
            <p className="story-label">고객 만족도</p>
            <span className="story-client">전체 평균</span>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="services-cta">
        <div className="cta-content-services">
          <h2>프로젝트를 시작할 준비가 되셨나요?</h2>
          <p>전문가와 무료 상담을 통해 최적의 솔루션을 찾아보세요</p>
          <div className="cta-buttons-services">
            <button className="cta-btn primary">무료 상담 신청</button>
            <button className="cta-btn secondary">포트폴리오 보기</button>
          </div>
          <div className="cta-guarantee">
            <span>✓ 30분 내 응답</span>
            <span>✓ 무료 견적</span>
            <span>✓ 100% 만족 보장</span>
          </div>
        </div>
      </section>

      {/* 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h3>🎉 무료 상담 신청</h3>
            <p>선택하신 서비스에 대해 전문가가 상담해드립니다</p>
            <form className="modal-form">
              <input type="text" placeholder="이름" required />
              <input type="email" placeholder="이메일" required />
              <input type="tel" placeholder="연락처" required />
              <textarea placeholder="프로젝트 설명" rows="4"></textarea>
              <button type="submit" className="modal-submit">상담 신청하기</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
