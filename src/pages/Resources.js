import React, { useState } from 'react';
import './Resources.css';

function Resources() {
  const [activeTab, setActiveTab] = useState('tutorials');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const tutorials = [
    {
      id: 1,
      title: 'React 완벽 가이드: 기초부터 고급까지',
      description: 'React의 모든 것을 배우는 완벽한 가이드입니다. Hook, Context, 성능 최적화까지 다룹니다.',
      level: 'beginner',
      duration: '8시간',
      lessons: 45,
      students: 12500,
      rating: 4.9,
      thumbnail: '⚛️',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'TypeScript 마스터하기',
      description: 'TypeScript의 핵심 개념과 실전 활용법을 배웁니다.',
      level: 'intermediate',
      duration: '6시간',
      lessons: 32,
      students: 8900,
      rating: 4.8,
      thumbnail: '📘',
      tags: ['TypeScript', 'JavaScript']
    },
    {
      id: 3,
      title: 'Next.js로 풀스택 앱 만들기',
      description: 'Next.js를 사용한 서버사이드 렌더링과 API 구축을 배웁니다.',
      level: 'advanced',
      duration: '10시간',
      lessons: 56,
      students: 6700,
      rating: 4.9,
      thumbnail: '▲',
      tags: ['Next.js', 'React', 'SSR']
    },
    {
      id: 4,
      title: 'CSS 애니메이션 완벽 가이드',
      description: '멋진 CSS 애니메이션과 트랜지션을 만드는 방법을 배웁니다.',
      level: 'beginner',
      duration: '4시간',
      lessons: 28,
      students: 15200,
      rating: 4.7,
      thumbnail: '🎨',
      tags: ['CSS', 'Animation', 'Design']
    },
    {
      id: 5,
      title: 'Node.js 백엔드 개발',
      description: 'Express와 MongoDB를 사용한 RESTful API 개발을 배웁니다.',
      level: 'intermediate',
      duration: '12시간',
      lessons: 68,
      students: 9800,
      rating: 4.8,
      thumbnail: '🟢',
      tags: ['Node.js', 'Backend', 'API']
    },
    {
      id: 6,
      title: '웹 성능 최적화 기법',
      description: '웹사이트 성능을 극대화하는 다양한 최적화 기법을 배웁니다.',
      level: 'advanced',
      duration: '5시간',
      lessons: 35,
      students: 5400,
      rating: 4.9,
      thumbnail: '⚡',
      tags: ['Performance', 'Optimization']
    }
  ];

  const articles = [
    {
      id: 1,
      title: '2024년 프론트엔드 개발 트렌드',
      author: '김개발',
      date: '2024-10-15',
      readTime: '8분',
      views: 12400,
      category: 'Trends',
      thumbnail: '📊'
    },
    {
      id: 2,
      title: 'React Server Components 완벽 이해하기',
      author: '이리액트',
      date: '2024-10-12',
      readTime: '12분',
      views: 8900,
      category: 'Tutorial',
      thumbnail: '⚛️'
    },
    {
      id: 3,
      title: 'AI를 활용한 코드 자동화',
      author: '박AI',
      date: '2024-10-10',
      readTime: '6분',
      views: 15600,
      category: 'AI',
      thumbnail: '🤖'
    },
    {
      id: 4,
      title: '웹 접근성을 위한 필수 가이드',
      author: '최접근성',
      date: '2024-10-08',
      readTime: '10분',
      views: 6700,
      category: 'Accessibility',
      thumbnail: '♿'
    }
  ];

  const tools = [
    {
      name: 'VS Code',
      description: '가장 인기있는 코드 에디터',
      icon: '💻',
      category: 'Editor',
      link: '#'
    },
    {
      name: 'Figma',
      description: '협업 디자인 도구',
      icon: '🎨',
      category: 'Design',
      link: '#'
    },
    {
      name: 'GitHub',
      description: '코드 버전 관리',
      icon: '🐙',
      category: 'Version Control',
      link: '#'
    },
    {
      name: 'Postman',
      description: 'API 테스팅 도구',
      icon: '📮',
      category: 'Testing',
      link: '#'
    },
    {
      name: 'Vercel',
      description: '빠른 배포 플랫폼',
      icon: '▲',
      category: 'Deployment',
      link: '#'
    },
    {
      name: 'Chrome DevTools',
      description: '브라우저 개발자 도구',
      icon: '🔧',
      category: 'Debugging',
      link: '#'
    }
  ];

  const cheatsheets = [
    { name: 'React Hooks', icon: '⚛️', downloads: 8900 },
    { name: 'CSS Flexbox', icon: '📐', downloads: 12400 },
    { name: 'Git Commands', icon: '🔀', downloads: 15600 },
    { name: 'JavaScript ES6+', icon: '📜', downloads: 18900 },
    { name: 'TypeScript', icon: '📘', downloads: 7800 },
    { name: 'Tailwind CSS', icon: '🎨', downloads: 9200 }
  ];

  const filteredTutorials = selectedLevel === 'all' 
    ? tutorials 
    : tutorials.filter(t => t.level === selectedLevel);

  return (
    <div className="resources">
      <div className="resources-hero">
        <h1>📚 학습 리소스</h1>
        <p>개발자 성장을 위한 모든 자료가 여기에</p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">튜토리얼</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">아티클</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">도구</span>
          </div>
        </div>
      </div>

      <div className="resources-tabs">
        <button 
          className={`tab-btn ${activeTab === 'tutorials' ? 'active' : ''}`}
          onClick={() => setActiveTab('tutorials')}
        >
          🎓 튜토리얼
        </button>
        <button 
          className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          📝 아티클
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          🛠️ 도구
        </button>
        <button 
          className={`tab-btn ${activeTab === 'cheatsheets' ? 'active' : ''}`}
          onClick={() => setActiveTab('cheatsheets')}
        >
          📋 치트시트
        </button>
      </div>

      <div className="resources-content">
        {activeTab === 'tutorials' && (
          <div className="tutorials-section">
            <div className="section-header">
              <h2>인기 튜토리얼</h2>
              <div className="level-filters">
                <button 
                  className={selectedLevel === 'all' ? 'active' : ''}
                  onClick={() => setSelectedLevel('all')}
                >
                  전체
                </button>
                <button 
                  className={selectedLevel === 'beginner' ? 'active' : ''}
                  onClick={() => setSelectedLevel('beginner')}
                >
                  초급
                </button>
                <button 
                  className={selectedLevel === 'intermediate' ? 'active' : ''}
                  onClick={() => setSelectedLevel('intermediate')}
                >
                  중급
                </button>
                <button 
                  className={selectedLevel === 'advanced' ? 'active' : ''}
                  onClick={() => setSelectedLevel('advanced')}
                >
                  고급
                </button>
              </div>
            </div>

            <div className="tutorials-grid">
              {filteredTutorials.map(tutorial => (
                <div key={tutorial.id} className="tutorial-card">
                  <div className="tutorial-thumbnail">{tutorial.thumbnail}</div>
                  <div className="tutorial-content">
                    <div className="tutorial-header">
                      <span className={`level-badge ${tutorial.level}`}>
                        {tutorial.level === 'beginner' ? '초급' : 
                         tutorial.level === 'intermediate' ? '중급' : '고급'}
                      </span>
                      <span className="rating">⭐ {tutorial.rating}</span>
                    </div>
                    <h3>{tutorial.title}</h3>
                    <p>{tutorial.description}</p>
                    <div className="tutorial-tags">
                      {tutorial.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="tutorial-meta">
                      <span>📚 {tutorial.lessons} 레슨</span>
                      <span>⏱️ {tutorial.duration}</span>
                      <span>👥 {tutorial.students.toLocaleString()}</span>
                    </div>
                    <button className="btn-start">시작하기 →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="articles-section">
            <h2>최신 아티클</h2>
            <div className="articles-grid">
              {articles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-thumbnail">{article.thumbnail}</div>
                  <div className="article-content">
                    <span className="article-category">{article.category}</span>
                    <h3>{article.title}</h3>
                    <div className="article-meta">
                      <span>✍️ {article.author}</span>
                      <span>📅 {article.date}</span>
                    </div>
                    <div className="article-footer">
                      <span>📖 {article.readTime} 읽기</span>
                      <span>👁️ {article.views.toLocaleString()} 조회</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="tools-section">
            <h2>추천 개발 도구</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-category">{tool.category}</span>
                  <button className="btn-tool">자세히 보기 →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cheatsheets' && (
          <div className="cheatsheets-section">
            <h2>치트시트 다운로드</h2>
            <div className="cheatsheets-grid">
              {cheatsheets.map((sheet, index) => (
                <div key={index} className="cheatsheet-card">
                  <div className="cheatsheet-icon">{sheet.icon}</div>
                  <h3>{sheet.name}</h3>
                  <p className="download-count">
                    📥 {sheet.downloads.toLocaleString()} 다운로드
                  </p>
                  <button className="btn-download">PDF 다운로드</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="resources-cta">
        <h2>더 많은 리소스를 찾고 계신가요?</h2>
        <p>프리미엄 멤버십으로 모든 콘텐츠에 무제한 액세스하세요</p>
        <button className="btn-premium">프리미엄 가입하기 ✨</button>
      </div>
    </div>
  );
}

export default Resources;
