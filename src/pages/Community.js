import React, { useState } from 'react';
import './Community.css';

function Community() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '전체', icon: '🌐', count: 245 },
    { id: 'questions', name: '질문', icon: '❓', count: 89 },
    { id: 'discussions', name: '토론', icon: '💬', count: 67 },
    { id: 'showcase', name: '쇼케이스', icon: '🎨', count: 45 },
    { id: 'tips', name: '팁&트릭', icon: '💡', count: 44 }
  ];

  const posts = [
    {
      id: 1,
      category: 'questions',
      title: 'React Hook을 사용할 때 주의할 점이 있나요?',
      author: '김개발',
      avatar: '👨‍💻',
      time: '5분 전',
      replies: 12,
      likes: 24,
      views: 156,
      tags: ['React', 'Hooks', '초보'],
      solved: false,
      hot: true
    },
    {
      id: 2,
      category: 'showcase',
      title: '제가 만든 포트폴리오 사이트 피드백 부탁드립니다!',
      author: '디자이너이',
      avatar: '👩‍🎨',
      time: '1시간 전',
      replies: 28,
      likes: 89,
      views: 342,
      tags: ['포트폴리오', 'UI/UX', '피드백'],
      solved: false,
      hot: true
    },
    {
      id: 3,
      category: 'discussions',
      title: '2024년 웹 개발 트렌드에 대해 이야기해봐요',
      author: '박트렌드',
      avatar: '👨‍💼',
      time: '3시간 전',
      replies: 45,
      likes: 67,
      views: 523,
      tags: ['트렌드', '웹개발', '2024'],
      solved: false,
      hot: true
    },
    {
      id: 4,
      category: 'tips',
      title: 'CSS Grid를 활용한 레이아웃 팁 10가지',
      author: '최프론트',
      avatar: '👩‍💻',
      time: '5시간 전',
      replies: 18,
      likes: 156,
      views: 892,
      tags: ['CSS', 'Grid', '레이아웃'],
      solved: false,
      hot: false
    },
    {
      id: 5,
      category: 'questions',
      title: 'API 연동 시 CORS 에러 해결 방법',
      author: '이백엔드',
      avatar: '👨‍🔧',
      time: '8시간 전',
      replies: 34,
      likes: 78,
      views: 445,
      tags: ['API', 'CORS', '에러'],
      solved: true,
      hot: false
    },
    {
      id: 6,
      category: 'showcase',
      title: 'React + Three.js로 만든 3D 웹사이트',
      author: '정3D',
      avatar: '🎮',
      time: '12시간 전',
      replies: 56,
      likes: 234,
      views: 1203,
      tags: ['React', 'Three.js', '3D'],
      solved: false,
      hot: true
    }
  ];

  const trendingTopics = [
    { name: 'React 19', count: 234, trend: 'up' },
    { name: 'TypeScript', count: 189, trend: 'up' },
    { name: 'Next.js', count: 156, trend: 'up' },
    { name: 'Tailwind CSS', count: 134, trend: 'same' },
    { name: 'AI 통합', count: 98, trend: 'up' }
  ];

  const topContributors = [
    { name: '김개발', avatar: '👨‍💻', posts: 145, reputation: 2340 },
    { name: '이디자인', avatar: '👩‍🎨', posts: 123, reputation: 1890 },
    { name: '박풀스택', avatar: '👨‍💼', posts: 98, reputation: 1567 },
    { name: '최프론트', avatar: '👩‍💻', posts: 87, reputation: 1234 }
  ];

  const filteredPosts = posts.filter(post => 
    (activeCategory === 'all' || post.category === activeCategory) &&
    (searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="community">
      <div className="community-header">
        <div className="header-content">
          <h1>💬 커뮤니티</h1>
          <p>개발자들과 함께 성장하는 공간</p>
        </div>
        <button className="btn-new-post">✍️ 새 글 작성</button>
      </div>

      <div className="community-search">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="궁금한 것을 검색해보세요..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="community-content">
        <div className="content-main">
          <div className="categories-bar">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            ))}
          </div>

          <div className="posts-list">
            {filteredPosts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-author">
                  <div className="author-avatar">{post.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{post.author}</div>
                    <div className="post-time">{post.time}</div>
                  </div>
                  {post.hot && <span className="hot-badge">🔥 HOT</span>}
                  {post.solved && <span className="solved-badge">✅ 해결됨</span>}
                </div>
                
                <h3 className="post-title">{post.title}</h3>
                
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
                
                <div className="post-stats">
                  <div className="stat">
                    <span className="stat-icon">💬</span>
                    <span>{post.replies}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">❤️</span>
                    <span>{post.likes}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">👁️</span>
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-sidebar">
          <div className="sidebar-card">
            <h3>🔥 트렌딩 토픽</h3>
            <div className="trending-list">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="trending-item">
                  <div className="trending-info">
                    <span className="trending-name">{topic.name}</span>
                    <span className="trending-count">{topic.count} 게시물</span>
                  </div>
                  <span className={`trend-indicator ${topic.trend}`}>
                    {topic.trend === 'up' ? '📈' : '➡️'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <h3>🏆 주간 TOP 기여자</h3>
            <div className="contributors-list">
              {topContributors.map((contributor, index) => (
                <div key={index} className="contributor-item">
                  <div className="contributor-rank">#{index + 1}</div>
                  <div className="contributor-avatar">{contributor.avatar}</div>
                  <div className="contributor-info">
                    <div className="contributor-name">{contributor.name}</div>
                    <div className="contributor-stats">
                      <span>📝 {contributor.posts}</span>
                      <span>⭐ {contributor.reputation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-card community-stats">
            <h3>📊 커뮤니티 통계</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">12.5K</div>
                <div className="stat-label">총 회원</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3.2K</div>
                <div className="stat-label">이번 주 활동</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">245</div>
                <div className="stat-label">오늘 게시물</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1.8K</div>
                <div className="stat-label">답변 대기</div>
              </div>
            </div>
          </div>

          <div className="sidebar-card guidelines">
            <h3>📋 커뮤니티 가이드</h3>
            <ul>
              <li>✅ 존중하는 태도로 소통하기</li>
              <li>✅ 구체적이고 명확한 질문하기</li>
              <li>✅ 코드는 포맷팅해서 공유하기</li>
              <li>✅ 도움받았다면 감사 표시하기</li>
              <li>❌ 스팸이나 광고 금지</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
