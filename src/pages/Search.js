import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const searchResults = {
    users: [
      { id: 1, name: '김개발', username: '@kimdev', bio: '풀스택 개발자', avatar: '👨‍💻', followers: 1234 },
      { id: 2, name: '이디자인', username: '@leedesign', bio: 'UI/UX 디자이너', avatar: '👩‍🎨', followers: 890 },
      { id: 3, name: '박프론트', username: '@parkfront', bio: 'React 전문가', avatar: '👨‍💼', followers: 567 }
    ],
    posts: [
      { id: 1, title: 'React Hooks 완벽 가이드', author: '김개발', likes: 245, comments: 32, date: '2024-10-15' },
      { id: 2, title: 'CSS Grid vs Flexbox 비교', author: '이디자인', likes: 189, comments: 24, date: '2024-10-14' },
      { id: 3, title: 'TypeScript 시작하기', author: '박프론트', likes: 156, comments: 18, date: '2024-10-13' }
    ],
    projects: [
      { id: 1, name: 'E-commerce Platform', description: '완전한 온라인 쇼핑몰', tech: ['React', 'Node.js'], stars: 342 },
      { id: 2, name: 'Social Dashboard', description: '소셜 미디어 대시보드', tech: ['Vue', 'Firebase'], stars: 278 },
      { id: 3, name: 'Blog CMS', description: '블로그 관리 시스템', tech: ['Next.js', 'MongoDB'], stars: 195 }
    ],
    courses: [
      { id: 1, title: '프론트엔드 마스터 클래스', instructor: '김개발', students: 1234, rating: 4.9 },
      { id: 2, title: 'React 완벽 가이드', instructor: '박프론트', students: 890, rating: 4.8 },
      { id: 3, title: 'UI/UX 디자인 기초', instructor: '이디자인', students: 567, rating: 4.7 }
    ]
  };

  const filters = [
    { id: 'all', name: '전체', icon: '🔍' },
    { id: 'users', name: '사용자', icon: '👥' },
    { id: 'posts', name: '게시물', icon: '📝' },
    { id: 'projects', name: '프로젝트', icon: '🚀' },
    { id: 'courses', name: '강의', icon: '🎓' }
  ];

  const getResultCount = () => {
    if (activeFilter === 'all') {
      return Object.values(searchResults).reduce((acc, arr) => acc + arr.length, 0);
    }
    return searchResults[activeFilter]?.length || 0;
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="무엇을 찾고 계신가요?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>
        
        <div className="search-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        <div className="search-controls">
          <span className="result-count">{getResultCount()}개의 결과</span>
          <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">관련성순</option>
            <option value="recent">최신순</option>
            <option value="popular">인기순</option>
          </select>
        </div>
      </div>

      <div className="search-results">
        {(activeFilter === 'all' || activeFilter === 'users') && (
          <div className="results-section">
            <h2>👥 사용자</h2>
            <div className="users-grid">
              {searchResults.users.map(user => (
                <div key={user.id} className="user-card">
                  <div className="user-avatar">{user.avatar}</div>
                  <h3>{user.name}</h3>
                  <p className="username">{user.username}</p>
                  <p className="bio">{user.bio}</p>
                  <div className="user-stats">
                    <span>👥 {user.followers.toLocaleString()} 팔로워</span>
                  </div>
                  <button className="btn-follow">팔로우</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'posts') && (
          <div className="results-section">
            <h2>📝 게시물</h2>
            <div className="posts-list">
              {searchResults.posts.map(post => (
                <div key={post.id} className="post-card">
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <span className="author">작성자: {post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="post-stats">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'projects') && (
          <div className="results-section">
            <h2>🚀 프로젝트</h2>
            <div className="projects-grid">
              {searchResults.projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>⭐ {project.stars}</span>
                    <button className="btn-view">보기</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'courses') && (
          <div className="results-section">
            <h2>🎓 강의</h2>
            <div className="courses-list">
              {searchResults.courses.map(course => (
                <div key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p className="instructor">강사: {course.instructor}</p>
                  <div className="course-stats">
                    <span>👥 {course.students.toLocaleString()} 수강생</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                  <button className="btn-enroll">수강 신청</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
