import React, { useState } from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [timePeriod, setTimePeriod] = useState('weekly');

  const categories = [
    { id: 'overall', name: '종합', icon: '🏆' },
    { id: 'quiz', name: '퀴즈', icon: '🧠' },
    { id: 'coding', name: '코딩', icon: '💻' },
    { id: 'contributions', name: '기여도', icon: '⭐' }
  ];

  const leaderboardData = {
    overall: [
      { rank: 1, name: '김코딩', avatar: '👨‍💻', score: 15420, level: 45, streak: 89, badge: '🥇' },
      { rank: 2, name: '이개발', avatar: '👩‍💻', score: 14890, level: 43, streak: 76, badge: '🥈' },
      { rank: 3, name: '박프론트', avatar: '👨‍🎨', score: 13560, level: 41, streak: 65, badge: '🥉' },
      { rank: 4, name: '최백엔드', avatar: '👩‍🔧', score: 12340, level: 39, streak: 54, badge: '' },
      { rank: 5, name: '정풀스택', avatar: '👨‍💼', score: 11890, level: 38, streak: 48, badge: '' },
      { rank: 6, name: '강리액트', avatar: '⚛️', score: 10560, level: 36, streak: 42, badge: '' },
      { rank: 7, name: '조타입', avatar: '📘', score: 9870, level: 34, streak: 38, badge: '' },
      { rank: 8, name: '윤디자인', avatar: '🎨', score: 9120, level: 32, streak: 35, badge: '' },
      { rank: 9, name: '한노드', avatar: '🟢', score: 8540, level: 30, streak: 31, badge: '' },
      { rank: 10, name: '송파이썬', avatar: '🐍', score: 7980, level: 28, streak: 28, badge: '' }
    ],
    quiz: [
      { rank: 1, name: '퀴즈왕', avatar: '🧠', score: 9850, level: 42, streak: 67, badge: '🥇' },
      { rank: 2, name: '지식인', avatar: '📚', score: 8920, level: 39, streak: 58, badge: '🥈' },
      { rank: 3, name: '문제풀이', avatar: '✏️', score: 8340, level: 37, streak: 52, badge: '🥉' }
    ],
    coding: [
      { rank: 1, name: '코드마스터', avatar: '💻', score: 12450, level: 48, streak: 92, badge: '🥇' },
      { rank: 2, name: '알고리즘', avatar: '🔢', score: 11230, level: 45, streak: 84, badge: '🥈' },
      { rank: 3, name: '디버거', avatar: '🐛', score: 10120, level: 42, streak: 76, badge: '🥉' }
    ],
    contributions: [
      { rank: 1, name: '기여왕', avatar: '⭐', score: 8920, level: 40, streak: 71, badge: '🥇' },
      { rank: 2, name: '헬퍼', avatar: '🤝', score: 7840, level: 37, streak: 63, badge: '🥈' },
      { rank: 3, name: '멘토', avatar: '👨‍🏫', score: 6950, level: 35, streak: 55, badge: '🥉' }
    ]
  };

  const currentUser = {
    rank: 156,
    name: '나',
    avatar: '👤',
    score: 3450,
    level: 18,
    streak: 12
  };

  const achievements = [
    { icon: '🔥', name: '연속 7일', count: 234 },
    { icon: '💯', name: '만점 달성', count: 89 },
    { icon: '🎯', name: '목표 완료', count: 156 },
    { icon: '⚡', name: '빠른 응답', count: 67 }
  ];

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h1>🏆 리더보드</h1>
        <p>최고의 개발자들과 경쟁하세요</p>
      </div>

      <div className="leaderboard-controls">
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="time-filters">
          <button 
            className={`time-btn ${timePeriod === 'daily' ? 'active' : ''}`}
            onClick={() => setTimePeriod('daily')}
          >
            일간
          </button>
          <button 
            className={`time-btn ${timePeriod === 'weekly' ? 'active' : ''}`}
            onClick={() => setTimePeriod('weekly')}
          >
            주간
          </button>
          <button 
            className={`time-btn ${timePeriod === 'monthly' ? 'active' : ''}`}
            onClick={() => setTimePeriod('monthly')}
          >
            월간
          </button>
          <button 
            className={`time-btn ${timePeriod === 'alltime' ? 'active' : ''}`}
            onClick={() => setTimePeriod('alltime')}
          >
            전체
          </button>
        </div>
      </div>

      <div className="leaderboard-content">
        <div className="rankings-main">
          {/* Top 3 Podium */}
          <div className="podium">
            <div className="podium-item second">
              <div className="podium-avatar">{leaderboardData[activeCategory][1].avatar}</div>
              <div className="podium-badge">🥈</div>
              <div className="podium-name">{leaderboardData[activeCategory][1].name}</div>
              <div className="podium-score">{leaderboardData[activeCategory][1].score.toLocaleString()}</div>
              <div className="podium-stand">
                <div className="stand-rank">2</div>
              </div>
            </div>

            <div className="podium-item first">
              <div className="podium-crown">👑</div>
              <div className="podium-avatar large">{leaderboardData[activeCategory][0].avatar}</div>
              <div className="podium-badge">🥇</div>
              <div className="podium-name">{leaderboardData[activeCategory][0].name}</div>
              <div className="podium-score">{leaderboardData[activeCategory][0].score.toLocaleString()}</div>
              <div className="podium-stand first-stand">
                <div className="stand-rank">1</div>
              </div>
            </div>

            <div className="podium-item third">
              <div className="podium-avatar">{leaderboardData[activeCategory][2].avatar}</div>
              <div className="podium-badge">🥉</div>
              <div className="podium-name">{leaderboardData[activeCategory][2].name}</div>
              <div className="podium-score">{leaderboardData[activeCategory][2].score.toLocaleString()}</div>
              <div className="podium-stand">
                <div className="stand-rank">3</div>
              </div>
            </div>
          </div>

          {/* Rankings List */}
          <div className="rankings-list">
            <div className="list-header">
              <div className="col-rank">순위</div>
              <div className="col-user">사용자</div>
              <div className="col-level">레벨</div>
              <div className="col-streak">연속</div>
              <div className="col-score">점수</div>
            </div>

            {leaderboardData[activeCategory].slice(3).map((user) => (
              <div key={user.rank} className="ranking-row">
                <div className="col-rank">
                  <span className="rank-number">#{user.rank}</span>
                </div>
                <div className="col-user">
                  <div className="user-avatar">{user.avatar}</div>
                  <div className="user-name">{user.name}</div>
                </div>
                <div className="col-level">
                  <div className="level-badge">Lv.{user.level}</div>
                </div>
                <div className="col-streak">
                  <span className="streak-badge">🔥 {user.streak}일</span>
                </div>
                <div className="col-score">
                  <span className="score-value">{user.score.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Current User Position */}
          <div className="current-user-position">
            <div className="position-header">내 순위</div>
            <div className="ranking-row highlighted">
              <div className="col-rank">
                <span className="rank-number">#{currentUser.rank}</span>
              </div>
              <div className="col-user">
                <div className="user-avatar">{currentUser.avatar}</div>
                <div className="user-name">{currentUser.name}</div>
              </div>
              <div className="col-level">
                <div className="level-badge">Lv.{currentUser.level}</div>
              </div>
              <div className="col-streak">
                <span className="streak-badge">🔥 {currentUser.streak}일</span>
              </div>
              <div className="col-score">
                <span className="score-value">{currentUser.score.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="leaderboard-sidebar">
          <div className="sidebar-card">
            <h3>🎯 이번 주 목표</h3>
            <div className="weekly-goal">
              <div className="goal-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '68%' }}></div>
                </div>
                <span className="progress-text">68% 완료</span>
              </div>
              <div className="goal-details">
                <div className="goal-item">
                  <span>퀴즈 완료</span>
                  <strong>17 / 25</strong>
                </div>
                <div className="goal-item">
                  <span>코드 제출</span>
                  <strong>8 / 10</strong>
                </div>
                <div className="goal-item">
                  <span>커뮤니티 활동</span>
                  <strong>12 / 15</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>🏅 인기 업적</h3>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <div className="achievement-name">{achievement.name}</div>
                    <div className="achievement-count">{achievement.count}명 달성</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-card rewards">
            <h3>🎁 이번 주 보상</h3>
            <div className="rewards-list">
              <div className="reward-item">
                <span className="reward-rank">1위</span>
                <span className="reward-prize">🏆 프리미엄 1개월</span>
              </div>
              <div className="reward-item">
                <span className="reward-rank">2-5위</span>
                <span className="reward-prize">💎 1000 포인트</span>
              </div>
              <div className="reward-item">
                <span className="reward-rank">6-10위</span>
                <span className="reward-prize">⭐ 500 포인트</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card stats">
            <h3>📊 전체 통계</h3>
            <div className="global-stats">
              <div className="stat-row">
                <span>총 플레이어</span>
                <strong>15,234</strong>
              </div>
              <div className="stat-row">
                <span>활성 사용자</span>
                <strong>8,567</strong>
              </div>
              <div className="stat-row">
                <span>완료된 퀴즈</span>
                <strong>234,567</strong>
              </div>
              <div className="stat-row">
                <span>획득 배지</span>
                <strong>89,234</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
