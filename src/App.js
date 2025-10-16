import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">My React App에 오신 것을 환영합니다</h1>
          <p className="hero-subtitle">
            혁신적인 웹 애플리케이션으로 더 나은 경험을 제공합니다
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">시작하기</button>
            <button className="btn btn-secondary">더 알아보기</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">주요 기능</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>빠른 성능</h3>
            <p>최적화된 React 기반으로 빠르고 반응성 있는 사용자 경험을 제공합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>모던한 디자인</h3>
            <p>직관적이고 세련된 UI/UX 디자인으로 사용하기 편리합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>안전한 보안</h3>
            <p>최신 보안 기술을 적용하여 데이터를 안전하게 보호합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>반응형 지원</h3>
            <p>모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동합니다</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="section-title">소개</h2>
          <p className="about-text">
            이 애플리케이션은 React를 기반으로 구축된 현대적인 웹 플랫폼입니다.
            사용자 중심의 설계와 최신 웹 기술을 활용하여 최고의 경험을 제공합니다.
          </p>
          <p className="about-text">
            지속적인 업데이트와 개선을 통해 더 나은 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta-title">지금 바로 시작하세요</h2>
        <p className="cta-text">무료로 시작하고 모든 기능을 경험해보세요</p>
        <button className="btn btn-large">무료로 시작하기</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
