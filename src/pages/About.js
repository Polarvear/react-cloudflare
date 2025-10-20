import React, { useState } from 'react';
import './About.css';

function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    { year: '2020', title: '회사 설립', description: '혁신적인 비전으로 시작' },
    { year: '2021', title: '첫 100명 고객 달성', description: '빠른 성장과 신뢰 구축' },
    { year: '2022', title: '글로벌 확장', description: '해외 시장 진출 성공' },
    { year: '2023', title: '혁신상 수상', description: '업계 최고 기술력 인정' },
    { year: '2024', title: 'AI 서비스 출시', description: '차세대 기술 선도' },
    { year: '2025', title: '50,000+ 사용자', description: '지속적인 성장과 발전' }
  ];

  const team = [
    {
      name: '김태현',
      role: 'CEO & 창업자',
      image: '👨‍💼',
      description: '15년 경력의 기술 리더',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: '이서연',
      role: 'CTO',
      image: '👩‍💻',
      description: '풀스택 개발 전문가',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: '박준호',
      role: '디자인 총괄',
      image: '👨‍🎨',
      description: 'UX/UI 디자인 마스터',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: '최지우',
      role: '마케팅 이사',
      image: '👩‍💼',
      description: '성장 전략 전문가',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-background"></div>
        <div className="hero-content-about">
          <h1 className="about-title">우리의 이야기</h1>
          <p className="about-subtitle">혁신적인 기술로 더 나은 미래를 만들어갑니다</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section vision-section">
          <div className="section-badge">💫 Vision</div>
          <h2>우리의 비전</h2>
          <p className="vision-text">
            최첨단 기술과 창의적인 아이디어를 결합하여 사용자에게 최고의 경험을 제공하는 것이 우리의 목표입니다.
            지속적인 혁신과 발전을 통해 업계를 선도하는 기업이 되고자 합니다.
          </p>
          <div className="vision-highlights">
            <div className="highlight-item">
              <div className="highlight-number">01</div>
              <h4>사용자 중심</h4>
              <p>모든 결정의 중심에 사용자를 둡니다</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">02</div>
              <h4>지속 가능성</h4>
              <p>장기적 관점의 성장을 추구합니다</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">03</div>
              <h4>글로벌 리더십</h4>
              <p>세계 시장을 선도하는 기업이 됩니다</p>
            </div>
          </div>
        </div>

        <div className="about-section values-section">
          <div className="section-badge">⭐ Values</div>
          <h2>우리의 가치</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>혁신</h3>
              <p>끊임없는 도전과 창의적 사고로 새로운 가치를 창출합니다</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>신뢰</h3>
              <p>투명하고 정직한 소통으로 고객과의 신뢰를 구축합니다</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h3>우수성</h3>
              <p>최고의 품질과 서비스를 제공하기 위해 노력합니다</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>창의성</h3>
              <p>독창적인 아이디어로 차별화된 솔루션을 제공합니다</p>
            </div>
          </div>
        </div>

        <div className="about-section timeline-section">
          <div className="section-badge">📅 Journey</div>
          <h2>우리의 여정</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index === activeTimeline ? 'active' : ''}`}
                onMouseEnter={() => setActiveTimeline(index)}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section team-section">
          <div className="section-badge">👥 Team</div>
          <h2>우리의 팀</h2>
          <p className="team-intro">
            열정적이고 전문적인 팀원들이 함께 협력하여 최상의 결과를 만들어냅니다.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-description">{member.description}</p>
                <div className="team-social">
                  <a href={member.social.linkedin} className="social-link">💼</a>
                  <a href={member.social.twitter} className="social-link">🐦</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-icon">🚀</div>
            <h3>500+</h3>
            <p>프로젝트 완료</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <h3>1000+</h3>
            <p>만족한 고객</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👨‍💻</div>
            <h3>50+</h3>
            <p>전문 팀원</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <h3>10+</h3>
            <p>수상 경력</p>
          </div>
        </div>

        <div className="cta-section-about">
          <h2>함께 성장할 준비가 되셨나요?</h2>
          <p>우리 팀과 함께 혁신적인 프로젝트를 시작하세요</p>
          <div className="cta-buttons">
            <button className="btn-primary-about">팀 합류하기</button>
            <button className="btn-secondary-about">프로젝트 문의</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
