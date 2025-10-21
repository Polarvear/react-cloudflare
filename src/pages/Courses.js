import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 1,
      title: '프론트엔드 개발자',
      icon: '🎨',
      level: 'beginner',
      duration: '6개월',
      students: 12400,
      rating: 4.9,
      courses: 8,
      description: 'HTML, CSS, JavaScript부터 React까지',
      color: '#667eea'
    },
    {
      id: 2,
      title: '백엔드 개발자',
      icon: '⚙️',
      level: 'intermediate',
      duration: '8개월',
      students: 8900,
      rating: 4.8,
      courses: 10,
      description: 'Node.js, Database, API 설계',
      color: '#f5576c'
    },
    {
      id: 3,
      title: '풀스택 개발자',
      icon: '🚀',
      level: 'advanced',
      duration: '12개월',
      students: 6700,
      rating: 4.9,
      courses: 15,
      description: '프론트엔드와 백엔드 모두 마스터',
      color: '#4facfe'
    },
    {
      id: 4,
      title: '모바일 앱 개발',
      icon: '📱',
      level: 'intermediate',
      duration: '7개월',
      students: 5600,
      rating: 4.7,
      courses: 9,
      description: 'React Native로 크로스 플랫폼 앱 개발',
      color: '#f093fb'
    }
  ];

  const courses = [
    {
      id: 1,
      pathId: 1,
      title: 'HTML & CSS 기초',
      progress: 100,
      status: 'completed',
      lessons: 24,
      duration: '4주'
    },
    {
      id: 2,
      pathId: 1,
      title: 'JavaScript 마스터',
      progress: 65,
      status: 'in-progress',
      lessons: 36,
      duration: '6주'
    },
    {
      id: 3,
      pathId: 1,
      title: 'React 완벽 가이드',
      progress: 0,
      status: 'locked',
      lessons: 42,
      duration: '8주'
    }
  ];

  return (
    <div className="courses">
      <div className="courses-header">
        <h1>🎓 학습 경로</h1>
        <p>체계적인 커리큘럼으로 전문가가 되세요</p>
      </div>

      <div className="courses-stats">
        <div className="stat-item">
          <div className="stat-icon">📚</div>
          <div className="stat-value">120+</div>
          <div className="stat-label">강의</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">👥</div>
          <div className="stat-value">35K+</div>
          <div className="stat-label">수강생</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">4.8</div>
          <div className="stat-label">평균 평점</div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">89%</div>
          <div className="stat-label">완료율</div>
        </div>
      </div>

      <div className="paths-grid">
        {learningPaths.map(path => (
          <div 
            key={path.id} 
            className="path-card"
            style={{ borderTop: `4px solid ${path.color}` }}
            onClick={() => setSelectedPath(path.id)}
          >
            <div className="path-icon" style={{ background: path.color }}>
              {path.icon}
            </div>
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <div className="path-meta">
              <span className={`level-badge ${path.level}`}>
                {path.level === 'beginner' ? '초급' : path.level === 'intermediate' ? '중급' : '고급'}
              </span>
              <span>⭐ {path.rating}</span>
            </div>
            <div className="path-stats">
              <div className="stat">
                <span className="stat-label">강의</span>
                <strong>{path.courses}개</strong>
              </div>
              <div className="stat">
                <span className="stat-label">기간</span>
                <strong>{path.duration}</strong>
              </div>
              <div className="stat">
                <span className="stat-label">수강생</span>
                <strong>{(path.students / 1000).toFixed(1)}K</strong>
              </div>
            </div>
            <button className="btn-start" style={{ background: path.color }}>
              시작하기 →
            </button>
          </div>
        ))}
      </div>

      {selectedPath && (
        <div className="course-detail">
          <h2>📚 강의 목록</h2>
          <div className="courses-list">
            {courses.filter(c => c.pathId === selectedPath).map(course => (
              <div key={course.id} className={`course-item ${course.status}`}>
                <div className="course-number">{course.id}</div>
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <div className="course-meta">
                    <span>📚 {course.lessons} 레슨</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  {course.status !== 'locked' && (
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                      <span className="progress-text">{course.progress}%</span>
                    </div>
                  )}
                </div>
                <div className="course-action">
                  {course.status === 'completed' && <span className="status-icon">✅</span>}
                  {course.status === 'in-progress' && <button className="btn-continue">계속하기</button>}
                  {course.status === 'locked' && <span className="status-icon">🔒</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="features-section">
        <h2>왜 우리의 학습 경로를 선택해야 할까요?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>체계적인 커리큘럼</h3>
            <p>초보자부터 전문가까지 단계별로 학습</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">👨‍🏫</div>
            <h3>전문가 멘토링</h3>
            <p>현직 개발자의 1:1 코드 리뷰</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💼</div>
            <h3>실전 프로젝트</h3>
            <p>포트폴리오에 추가할 수 있는 프로젝트</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <h3>수료증 발급</h3>
            <p>완료 시 공인 수료증 제공</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
