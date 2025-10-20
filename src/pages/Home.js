import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const targets = {
      users: 50000,
      projects: 10000,
      countries: 150,
      satisfaction: 98
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        users: Math.floor(targets.users * progress),
        projects: Math.floor(targets.projects * progress),
        countries: Math.floor(targets.countries * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: '김민수',
      role: 'CEO, 테크스타트업',
      image: '👨‍💼',
      text: '이 플랫폼 덕분에 우리 비즈니스가 3배 성장했습니다. 정말 놀라운 도구입니다!',
      rating: 5
    },
    {
      name: '이지은',
      role: '프리랜서 디자이너',
      image: '👩‍🎨',
      text: '사용하기 쉽고 강력한 기능들이 가득합니다. 모든 프로젝트에 사용하고 있어요.',
      rating: 5
    },
    {
      name: '박준호',
      role: '마케팅 매니저',
      image: '👨‍💻',
      text: '고객 관리가 이렇게 쉬울 줄 몰랐습니다. 팀 전체가 만족하고 있습니다.',
      rating: 5
    },
    {
      name: '최서연',
      role: '스타트업 창업자',
      image: '👩‍💼',
      text: '비용 대비 최고의 가치를 제공합니다. 강력 추천합니다!',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Floating particles background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎉 새로운 기능이 출시되었습니다!</div>
          <h1 className="hero-title">
            <span className="gradient-text">혁신적인 솔루션</span>으로<br />
            비즈니스를 성장시키세요
          </h1>
          <p className="hero-subtitle">
            전 세계 50,000+ 사용자가 신뢰하는 플랫폼에서<br />
            더 나은 경험을 시작하세요
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary pulse">
              <span>무료로 시작하기</span>
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary">
              <span>데모 보기</span>
              <span className="btn-icon">▶</span>
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              <span className="avatar">👨</span>
              <span className="avatar">👩</span>
              <span className="avatar">👨‍💼</span>
              <span className="avatar">👩‍💻</span>
              <span className="avatar">👨‍🎨</span>
            </div>
            <p className="trust-text">
              <strong>2,500+</strong> 명이 이번 주에 가입했습니다
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{stats.users.toLocaleString()}+</div>
            <div className="stat-label">활성 사용자</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🚀</div>
            <div className="stat-number">{stats.projects.toLocaleString()}+</div>
            <div className="stat-label">완료된 프로젝트</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🌍</div>
            <div className="stat-number">{stats.countries}+</div>
            <div className="stat-label">서비스 국가</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">{stats.satisfaction}%</div>
            <div className="stat-label">고객 만족도</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">
          왜 <span className="highlight">우리를 선택</span>해야 할까요?
        </h2>
        <p className="section-subtitle">
          업계 최고의 기능으로 여러분의 성공을 지원합니다
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">⚡</div>
            </div>
            <h3>초고속 성능</h3>
            <p>최적화된 React 기반으로 빠르고 반응성 있는 사용자 경험을 제공합니다</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🎨</div>
            </div>
            <h3>모던한 디자인</h3>
            <p>직관적이고 세련된 UI/UX 디자인으로 사용하기 편리합니다</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🔒</div>
            </div>
            <h3>안전한 보안</h3>
            <p>최신 보안 기술을 적용하여 데이터를 안전하게 보호합니다</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">📱</div>
            </div>
            <h3>반응형 지원</h3>
            <p>모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동합니다</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🤝</div>
            </div>
            <h3>팀 협업</h3>
            <p>실시간 협업 도구로 팀 생산성을 극대화하세요</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">📊</div>
            </div>
            <h3>상세한 분석</h3>
            <p>강력한 분석 도구로 데이터 기반 의사결정을 내리세요</p>
            <a href="#" className="feature-link">자세히 보기 →</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">고객들의 <span className="highlight">생생한 후기</span></h2>
        <p className="section-subtitle">
          전 세계 수만 명의 사용자가 우리를 선택한 이유
        </p>
        
        <div className="testimonial-carousel">
          <div className="testimonial-card active">
            <div className="testimonial-stars">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonials[currentTestimonial].image}</div>
              <div className="author-info">
                <div className="author-name">{testimonials[currentTestimonial].name}</div>
                <div className="author-role">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className="mini-testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mini-testimonial">
              <div className="mini-avatar">{testimonial.image}</div>
              <div className="mini-content">
                <div className="mini-name">{testimonial.name}</div>
                <div className="mini-stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">지금 바로 시작하세요</h2>
          <p className="cta-text">
            14일 무료 체험 • 신용카드 불필요 • 언제든지 취소 가능
          </p>
          <button className="btn btn-large glow">
            무료로 시작하기
          </button>
          <div className="cta-features">
            <div className="cta-feature">✓ 즉시 사용 가능</div>
            <div className="cta-feature">✓ 24/7 고객 지원</div>
            <div className="cta-feature">✓ 30일 환불 보장</div>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className={`chat-widget ${chatOpen ? 'open' : ''}`}>
        {!chatOpen ? (
          <button className="chat-button" onClick={() => setChatOpen(true)}>
            <span className="chat-icon">💬</span>
            <span className="chat-badge">1</span>
          </button>
        ) : (
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">👨‍💼</div>
                <div>
                  <div className="chat-agent-name">고객 지원팀</div>
                  <div className="chat-status">
                    <span className="status-dot"></span> 온라인
                  </div>
                </div>
              </div>
              <button className="chat-close" onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div className="chat-body">
              <div className="chat-message bot">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <p>안녕하세요! 👋</p>
                  <p>무엇을 도와드릴까요?</p>
                  <div className="message-time">방금 전</div>
                </div>
              </div>
              <div className="quick-replies">
                <button className="quick-reply">💰 요금제 문의</button>
                <button className="quick-reply">🚀 시작하기</button>
                <button className="quick-reply">📞 상담 요청</button>
              </div>
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="메시지를 입력하세요..." />
              <button className="send-button">📤</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
