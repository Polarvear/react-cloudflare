import React, { useState } from 'react';
import './Studio.css';

function Studio() {
  const [activeTab, setActiveTab] = useState('create');
  const [contentType, setContentType] = useState('tutorial');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const myContent = [
    { id: 1, type: 'tutorial', title: 'React Hooks 완벽 가이드', views: 12400, likes: 890, comments: 156, status: 'published', date: '2024-10-15' },
    { id: 2, type: 'video', title: 'CSS Grid 레이아웃 마스터하기', views: 8900, likes: 567, comments: 89, status: 'published', date: '2024-10-10' },
    { id: 3, type: 'code', title: 'TypeScript 유틸리티 함수 모음', views: 5600, likes: 234, comments: 45, status: 'draft', date: '2024-10-08' }
  ];

  const contentTypes = [
    { id: 'tutorial', name: '튜토리얼', icon: '📚', description: '단계별 가이드 작성' },
    { id: 'video', name: '비디오', icon: '🎥', description: '동영상 콘텐츠 업로드' },
    { id: 'code', name: '코드', icon: '💻', description: '코드 스니펫 공유' },
    { id: 'article', name: '아티클', icon: '📝', description: '기술 블로그 작성' }
  ];

  const stats = [
    { label: '총 조회수', value: '26.9K', icon: '👁️', color: '#667eea' },
    { label: '총 좋아요', value: '1.7K', icon: '❤️', color: '#f5576c' },
    { label: '총 댓글', value: '290', icon: '💬', color: '#4facfe' },
    { label: '팔로워', value: '456', icon: '👥', color: '#f093fb' }
  ];

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="studio">
      <div className="studio-header">
        <h1>🎨 크리에이터 스튜디오</h1>
        <p>당신의 지식을 세상과 공유하세요</p>
      </div>

      <div className="studio-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box" style={{ borderTop: `4px solid ${stat.color}` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="studio-tabs">
        <button className={`tab ${activeTab === 'create' ? 'active' : ''}`} onClick={() => setActiveTab('create')}>✍️ 새로 만들기</button>
        <button className={`tab ${activeTab === 'manage' ? 'active' : ''}`} onClick={() => setActiveTab('manage')}>📂 내 콘텐츠</button>
        <button className={`tab ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>📊 분석</button>
      </div>

      <div className="studio-content">
        {activeTab === 'create' && (
          <div className="create-section">
            <h2>콘텐츠 유형 선택</h2>
            <div className="type-grid">
              {contentTypes.map(type => (
                <div key={type.id} className={`type-card ${contentType === type.id ? 'selected' : ''}`} onClick={() => setContentType(type.id)}>
                  <div className="type-icon">{type.icon}</div>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>

            <div className="editor-section">
              <div className="form-group">
                <label>제목</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="매력적인 제목을 입력하세요..." className="title-input" />
              </div>

              <div className="form-group">
                <label>내용</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="여기에 내용을 작성하세요..." className="content-textarea" rows="15" />
              </div>

              <div className="form-group">
                <label>태그</label>
                <div className="tags-display">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag-item">#{tag}<button onClick={() => removeTag(tag)}>×</button></span>
                  ))}
                </div>
                <div className="tag-input-group">
                  <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTag()} placeholder="태그 입력 후 Enter" />
                  <button onClick={addTag} className="btn-add-tag">추가</button>
                </div>
              </div>

              <div className="editor-actions">
                <button className="btn-draft">임시저장</button>
                <button className="btn-publish">발행하기 🚀</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="manage-section">
            <h2>내 콘텐츠 관리</h2>
            <div className="content-list">
              {myContent.map(item => (
                <div key={item.id} className="content-item">
                  <div className="content-info">
                    <h3>{item.title}</h3>
                    <div className="content-meta">
                      <span>👁️ {item.views.toLocaleString()}</span>
                      <span>❤️ {item.likes}</span>
                      <span>💬 {item.comments}</span>
                    </div>
                  </div>
                  <div className="content-actions">
                    <span className={`status-badge ${item.status}`}>{item.status === 'published' ? '발행됨' : '임시저장'}</span>
                    <button className="btn-edit">수정</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-section">
            <h2>콘텐츠 분석</h2>
            <div className="analytics-card">
              <h3>📈 조회수 추이</h3>
              <div className="chart-placeholder">데이터 시각화 영역</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Studio;
