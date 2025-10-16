import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>서비스</h1>
        <p>고객의 성공을 위한 맞춤형 솔루션을 제공합니다</p>
      </section>

      <section className="services-content">
        <div className="service-card-large">
          <div className="service-icon-large">💻</div>
          <h2>웹 개발</h2>
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
        </div>

        <div className="service-card-large">
          <div className="service-icon-large">📱</div>
          <h2>모바일 앱 개발</h2>
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
        </div>

        <div className="service-card-large">
          <div className="service-icon-large">☁️</div>
          <h2>클라우드 솔루션</h2>
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
        </div>

        <div className="service-card-large">
          <div className="service-icon-large">🎨</div>
          <h2>UI/UX 디자인</h2>
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
        </div>

        <div className="service-card-large">
          <div className="service-icon-large">🔧</div>
          <h2>유지보수 & 지원</h2>
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
        </div>

        <div className="service-card-large">
          <div className="service-icon-large">📊</div>
          <h2>컨설팅</h2>
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
        </div>
      </section>
    </div>
  );
}

export default Services;
