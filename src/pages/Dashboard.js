import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [chartData, setChartData] = useState([]);
  const [notifications] = useState([
    { id: 1, type: 'success', message: '새로운 프로젝트가 시작되었습니다!', time: '5분 전' },
    { id: 2, type: 'info', message: '시스템 업데이트가 예정되어 있습니다', time: '1시간 전' },
    { id: 3, type: 'warning', message: '결제 정보를 확인해주세요', time: '2시간 전' }
  ]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const newData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
      setChartData(newData);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const recentActivities = [
    { icon: '📝', action: '새 문서 생성', user: '김민수', time: '방금 전' },
    { icon: '✅', action: '작업 완료', user: '이지은', time: '5분 전' },
    { icon: '💬', action: '댓글 작성', user: '박준호', time: '10분 전' },
    { icon: '📊', action: '보고서 업로드', user: '최서연', time: '15분 전' },
    { icon: '🎯', action: '목표 달성', user: '정우진', time: '20분 전' }
  ];

  const projects = [
    { name: '웹사이트 리뉴얼', progress: 75, status: 'active', team: 5, deadline: '2024-12-31' },
    { name: '모바일 앱 개발', progress: 45, status: 'active', team: 8, deadline: '2025-01-15' },
    { name: '마케팅 캠페인', progress: 90, status: 'review', team: 3, deadline: '2024-11-30' },
    { name: 'UI/UX 개선', progress: 30, status: 'active', team: 4, deadline: '2025-02-01' }
  ];

  const teamMembers = [
    { name: '김민수', role: 'Project Manager', avatar: '👨‍💼', status: 'online' },
    { name: '이지은', role: 'Designer', avatar: '👩‍🎨', status: 'online' },
    { name: '박준호', role: 'Developer', avatar: '👨‍💻', status: 'away' },
    { name: '최서연', role: 'Marketing', avatar: '👩‍💼', status: 'offline' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <h1>대시보드</h1>
          <p className="dashboard-subtitle">실시간 프로젝트 현황을 확인하세요</p>
        </div>
        <div className="header-right">
          <button className="btn-icon">🔔 <span className="badge">3</span></button>
          <button className="btn-icon">⚙️</button>
          <div className="user-profile">
            <span className="profile-avatar">👤</span>
            <span className="profile-name">사용자</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-card">
          <div className="stat-icon blue">📊</div>
          <div className="stat-info">
            <div className="stat-value">24</div>
            <div className="stat-label">진행 중인 프로젝트</div>
            <div className="stat-change positive">+12% 이번 달</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">✅</div>
          <div className="stat-info">
            <div className="stat-value">156</div>
            <div className="stat-label">완료된 작업</div>
            <div className="stat-change positive">+8% 이번 주</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon purple">👥</div>
          <div className="stat-info">
            <div className="stat-value">48</div>
            <div className="stat-label">팀 멤버</div>
            <div className="stat-change positive">+4 신규</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange">⏱️</div>
          <div className="stat-info">
            <div className="stat-value">89%</div>
            <div className="stat-label">생산성</div>
            <div className="stat-change positive">+5% 증가</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="content-left">
          {/* Chart Section */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>📈 성과 분석</h3>
              <div className="tab-buttons">
                <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>주간</button>
                <button className={activeTab === 'monthly' ? 'active' : ''} onClick={() => setActiveTab('monthly')}>월간</button>
                <button className={activeTab === 'yearly' ? 'active' : ''} onClick={() => setActiveTab('yearly')}>연간</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="chart">
                {chartData.length > 0 ? (
                  <div className="bar-chart">
                    {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
                      <div key={day} className="bar-wrapper">
                        <div className="bar" style={{ height: `${chartData[index] || 50}%` }}>
                          <span className="bar-value">{chartData[index] || 50}</span>
                        </div>
                        <span className="bar-label">{day}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="chart-placeholder">데이터 로딩 중...</div>
                )}
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>🚀 프로젝트 현황</h3>
              <button className="btn-text">전체 보기 →</button>
            </div>
            <div className="projects-list">
              {projects.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="project-info">
                    <div className="project-header">
                      <h4>{project.name}</h4>
                      <span className={`project-status ${project.status}`}>
                        {project.status === 'active' ? '진행중' : '검토중'}
                      </span>
                    </div>
                    <div className="project-meta">
                      <span>👥 {project.team}명</span>
                      <span>📅 {project.deadline}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                      <span className="progress-text">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-right">
          {/* Notifications */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>🔔 알림</h3>
              <button className="btn-text">모두 읽음</button>
            </div>
            <div className="notifications-list">
              {notifications.map(notif => (
                <div key={notif.id} className={`notification-item ${notif.type}`}>
                  <div className="notif-icon">
                    {notif.type === 'success' ? '✅' : notif.type === 'warning' ? '⚠️' : 'ℹ️'}
                  </div>
                  <div className="notif-content">
                    <p>{notif.message}</p>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>⚡ 최근 활동</h3>
            </div>
            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <p><strong>{activity.user}</strong>님이 {activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>👥 팀 멤버</h3>
              <button className="btn-text">+ 초대</button>
            </div>
            <div className="team-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                  </div>
                  <span className={`status-indicator ${member.status}`}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
