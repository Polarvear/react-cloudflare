import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '전자상거래 플랫폼',
      description: 'React와 Node.js를 활용한 풀스택 쇼핑몰 웹 애플리케이션',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      link: '#',
      year: '2025'
    },
    {
      id: 2,
      title: '모바일 피트니스 앱',
      description: '운동 추적 및 건강 관리를 위한 크로스 플랫폼 모바일 앱',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '💪',
      link: '#',
      year: '2025'
    },
    {
      id: 3,
      title: '기업 대시보드',
      description: '실시간 데이터 분석 및 시각화 대시보드 시스템',
      category: 'web',
      technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL'],
      image: '📊',
      link: '#',
      year: '2024'
    },
    {
      id: 4,
      title: 'AI 챗봇 서비스',
      description: '자연어 처리 기반 고객 지원 챗봇 플랫폼',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '🤖',
      link: '#',
      year: '2024'
    },
    {
      id: 5,
      title: '소셜 미디어 앱',
      description: '실시간 채팅과 미디어 공유 기능을 갖춘 SNS 플랫폼',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'WebRTC'],
      image: '📱',
      link: '#',
      year: '2024'
    },
    {
      id: 6,
      title: '블록체인 지갑',
      description: '안전한 암호화폐 관리를 위한 디지털 지갑 애플리케이션',
      category: 'blockchain',
      technologies: ['Web3.js', 'Ethereum', 'React', 'Solidity'],
      image: '🔐',
      link: '#',
      year: '2024'
    },
    {
      id: 7,
      title: '온라인 학습 플랫폼',
      description: '인터랙티브한 학습 경험을 제공하는 교육 플랫폼',
      category: 'web',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      image: '📚',
      link: '#',
      year: '2024'
    },
    {
      id: 8,
      title: 'IoT 스마트홈 시스템',
      description: '가정용 IoT 기기 통합 관리 시스템',
      category: 'iot',
      technologies: ['React', 'MQTT', 'Raspberry Pi', 'AWS IoT'],
      image: '🏠',
      link: '#',
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'web', name: '웹' },
    { id: 'mobile', name: '모바일' },
    { id: 'ai', name: 'AI' },
    { id: 'blockchain', name: '블록체인' },
    { id: 'iot', name: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">포트폴리오</h1>
          <p className="portfolio-hero-subtitle">
            혁신적인 프로젝트와 성공적인 결과물을 소개합니다
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">완료된 프로젝트</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">만족한 고객</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5년</div>
            <div className="stat-label">경력</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">수상 경력</div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="portfolio-content">
        {/* Category Filter */}
        <div className="portfolio-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-card-image">
                <span className="portfolio-emoji">{project.image}</span>
                <div className="portfolio-overlay">
                  <button className="view-project-btn">프로젝트 보기</button>
                </div>
              </div>
              <div className="portfolio-card-content">
                <div className="portfolio-card-header">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <span className="portfolio-year">{project.year}</span>
                </div>
                <p className="portfolio-card-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="portfolio-cta-content">
          <h2 className="portfolio-cta-title">함께 프로젝트를 시작하시겠습니까?</h2>
          <p className="portfolio-cta-text">
            여러분의 아이디어를 현실로 만들어드립니다
          </p>
          <button className="portfolio-cta-btn">프로젝트 문의하기</button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
