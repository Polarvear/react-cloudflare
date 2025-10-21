import React, { useState } from 'react';
import './Events.css';

function Events() {
  const [activeFilter, setActiveFilter] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'React 19 새로운 기능 완벽 가이드',
      date: '2024년 11월 5일',
      time: '오후 7:00 - 9:00',
      type: 'webinar',
      speaker: '김리액트',
      speakerAvatar: '👨‍💻',
      attendees: 234,
      maxAttendees: 500,
      level: 'intermediate',
      tags: ['React', 'Frontend', 'Live'],
      thumbnail: '⚛️',
      status: 'open'
    },
    {
      id: 2,
      title: 'AI와 함께하는 코딩의 미래',
      date: '2024년 11월 8일',
      time: '오후 8:00 - 10:00',
      type: 'conference',
      speaker: '박AI',
      speakerAvatar: '🤖',
      attendees: 456,
      maxAttendees: 1000,
      level: 'all',
      tags: ['AI', 'Future', 'Innovation'],
      thumbnail: '🚀',
      status: 'open'
    },
    {
      id: 3,
      title: 'TypeScript 마스터클래스',
      date: '2024년 11월 12일',
      time: '오후 6:00 - 8:00',
      type: 'workshop',
      speaker: '이타입',
      speakerAvatar: '👩‍💻',
      attendees: 89,
      maxAttendees: 100,
      level: 'advanced',
      tags: ['TypeScript', 'Workshop', 'Hands-on'],
      thumbnail: '📘',
      status: 'almost-full'
    },
    {
      id: 4,
      title: '웹 성능 최적화 실전 가이드',
      date: '2024년 11월 15일',
      time: '오후 7:30 - 9:30',
      type: 'webinar',
      speaker: '최성능',
      speakerAvatar: '⚡',
      attendees: 178,
      maxAttendees: 300,
      level: 'intermediate',
      tags: ['Performance', 'Optimization', 'Web'],
      thumbnail: '🎯',
      status: 'open'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Next.js 14 완벽 가이드',
      date: '2024년 10월 20일',
      views: 1234,
      recording: true,
      thumbnail: '▲'
    },
    {
      id: 6,
      title: 'CSS 애니메이션 마스터하기',
      date: '2024년 10월 15일',
      views: 2345,
      recording: true,
      thumbnail: '🎨'
    },
    {
      id: 7,
      title: '풀스택 개발자 되기',
      date: '2024년 10월 10일',
      views: 3456,
      recording: true,
      thumbnail: '💻'
    }
  ];

  const featuredSpeakers = [
    { name: '김리액트', role: 'React 전문가', avatar: '👨‍💻', events: 12 },
    { name: '박AI', role: 'AI 연구원', avatar: '🤖', events: 8 },
    { name: '이타입', role: 'TypeScript 전도사', avatar: '👩‍💻', events: 15 },
    { name: '최성능', role: '성능 최적화 전문가', avatar: '⚡', events: 10 }
  ];

  return (
    <div className="events">
      <div className="events-hero">
        <h1>🎪 이벤트 & 웨비나</h1>
        <p>전문가들과 함께 성장하는 라이브 세션</p>
        <div className="hero-buttons">
          <button className="btn-primary">다가오는 이벤트 보기</button>
          <button className="btn-secondary">녹화본 시청하기</button>
        </div>
      </div>

      <div className="events-stats">
        <div className="stat-box">
          <div className="stat-icon">📅</div>
          <div className="stat-number">48</div>
          <div className="stat-label">총 이벤트</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">👥</div>
          <div className="stat-number">12.5K</div>
          <div className="stat-label">참가자</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🎥</div>
          <div className="stat-number">32</div>
          <div className="stat-label">녹화본</div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⭐</div>
          <div className="stat-number">4.9</div>
          <div className="stat-label">평균 평점</div>
        </div>
      </div>

      <div className="events-filters">
        <button 
          className={`filter-btn ${activeFilter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveFilter('upcoming')}
        >
          📅 다가오는 이벤트
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'past' ? 'active' : ''}`}
          onClick={() => setActiveFilter('past')}
        >
          🎥 지난 이벤트
        </button>
      </div>

      <div className="events-content">
        <div className="events-main">
          {activeFilter === 'upcoming' && (
            <div className="upcoming-events">
              <h2>다가오는 이벤트</h2>
              <div className="events-grid">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-thumbnail">{event.thumbnail}</div>
                    <div className="event-content">
                      <div className="event-badges">
                        <span className={`type-badge ${event.type}`}>
                          {event.type === 'webinar' ? '웨비나' : 
                           event.type === 'workshop' ? '워크샵' : '컨퍼런스'}
                        </span>
                        <span className={`level-badge ${event.level}`}>
                          {event.level === 'all' ? '모든 레벨' :
                           event.level === 'beginner' ? '초급' :
                           event.level === 'intermediate' ? '중급' : '고급'}
                        </span>
                      </div>
                      <h3>{event.title}</h3>
                      <div className="event-meta">
                        <div className="meta-item">
                          <span className="meta-icon">📅</span>
                          <span>{event.date}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-icon">⏰</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="event-speaker">
                        <div className="speaker-avatar">{event.speakerAvatar}</div>
                        <div className="speaker-info">
                          <div className="speaker-name">{event.speaker}</div>
                          <div className="speaker-role">연사</div>
                        </div>
                      </div>
                      <div className="event-tags">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="tag">#{tag}</span>
                        ))}
                      </div>
                      <div className="event-footer">
                        <div className="attendees-info">
                          <span className="attendees-count">
                            👥 {event.attendees}/{event.maxAttendees}
                          </span>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                            />
                          </div>
                        </div>
                        <button className={`btn-register ${event.status}`}>
                          {event.status === 'open' ? '등록하기' : '대기 등록'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeFilter === 'past' && (
            <div className="past-events">
              <h2>지난 이벤트 녹화본</h2>
              <div className="past-events-grid">
                {pastEvents.map(event => (
                  <div key={event.id} className="past-event-card">
                    <div className="past-thumbnail">
                      <div className="thumbnail-icon">{event.thumbnail}</div>
                      <div className="play-overlay">▶️</div>
                    </div>
                    <div className="past-content">
                      <h3>{event.title}</h3>
                      <div className="past-meta">
                        <span>📅 {event.date}</span>
                        <span>👁️ {event.views.toLocaleString()} 조회</span>
                      </div>
                      <button className="btn-watch">녹화본 시청하기</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="events-sidebar">
          <div className="sidebar-card">
            <h3>🎤 주요 연사</h3>
            <div className="speakers-list">
              {featuredSpeakers.map((speaker, index) => (
                <div key={index} className="speaker-item">
                  <div className="speaker-avatar-large">{speaker.avatar}</div>
                  <div className="speaker-details">
                    <div className="speaker-name">{speaker.name}</div>
                    <div className="speaker-role">{speaker.role}</div>
                    <div className="speaker-events">{speaker.events}개 이벤트</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-card newsletter">
            <h3>📬 이벤트 알림 받기</h3>
            <p>새로운 이벤트 소식을 가장 먼저 받아보세요</p>
            <input type="email" placeholder="이메일 주소" />
            <button className="btn-subscribe">구독하기</button>
          </div>

          <div className="sidebar-card calendar">
            <h3>📆 이번 달 일정</h3>
            <div className="calendar-view">
              <div className="calendar-header">11월 2024</div>
              <div className="calendar-grid">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`calendar-day ${[4, 7, 11, 14].includes(i + 1) ? 'has-event' : ''}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events-cta">
        <h2>이벤트를 주최하고 싶으신가요?</h2>
        <p>여러분의 지식을 커뮤니티와 공유해보세요</p>
        <button className="btn-host">이벤트 제안하기 🎯</button>
      </div>
    </div>
  );
}

export default Events;
