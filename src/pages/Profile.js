import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '김개발',
    username: '@kimdev',
    email: 'kimdev@example.com',
    bio: '풀스택 개발자 | React & Node.js 전문가 | 오픈소스 기여자',
    location: '서울, 대한민국',
    website: 'https://kimdev.com',
    company: '테크스타트업',
    avatar: '👨‍💻'
  });

  const [stats] = useState({
    followers: 1234,
    following: 567,
    posts: 89,
    projects: 45
  });

  const activities = [
    { id: 1, type: 'project', title: 'React Dashboard 프로젝트 완료', time: '2시간 전', icon: '🚀' },
    { id: 2, type: 'comment', title: 'Community 포스트에 댓글 작성', time: '5시간 전', icon: '💬' },
    { id: 3, type: 'like', title: 'Tutorial: Advanced React Hooks 좋아요', time: '1일 전', icon: '❤️' },
    { id: 4, type: 'achievement', title: '100일 연속 출석 달성!', time: '2일 전', icon: '🏆' },
    { id: 5, type: 'follow', title: '이디자인님을 팔로우하기 시작했습니다', time: '3일 전', icon: '👥' }
  ];

  const projects = [
    { id: 1, name: 'E-commerce Platform', status: 'active', progress: 75, tech: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, name: 'Social Media App', status: 'active', progress: 60, tech: ['React Native', 'Firebase'] },
    { id: 3, name: 'Portfolio Website', status: 'completed', progress: 100, tech: ['Next.js', 'TailwindCSS'] },
    { id: 4, name: 'Blog Platform', status: 'planning', progress: 20, tech: ['Gatsby', 'GraphQL'] }
  ];

  const skills = [
    { name: 'React', level: 95, color: '#61dafb' },
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'Node.js', level: 85, color: '#68a063' },
    { name: 'TypeScript', level: 80, color: '#3178c6' },
    { name: 'CSS/SCSS', level: 88, color: '#1572b6' },
    { name: 'Python', level: 75, color: '#3776ab' }
  ];

  const achievements = [
    { id: 1, name: '첫 프로젝트 완료', icon: '🎯', date: '2024-01-15', rarity: 'common' },
    { id: 2, name: '100일 연속 출석', icon: '🔥', date: '2024-09-20', rarity: 'rare' },
    { id: 3, name: '커뮤니티 히어로', icon: '⭐', date: '2024-08-10', rarity: 'epic' },
    { id: 4, name: '코드 마스터', icon: '💻', date: '2024-07-05', rarity: 'legendary' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    alert('프로필이 저장되었습니다!');
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info-container">
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">{profile.avatar}</div>
            <button className="btn-change-avatar">📷</button>
          </div>
          
          <div className="profile-main-info">
            {!isEditing ? (
              <>
                <h1>{profile.name}</h1>
                <p className="username">{profile.username}</p>
                <p className="bio">{profile.bio}</p>
                <div className="profile-meta">
                  <span>📍 {profile.location}</span>
                  <span>🏢 {profile.company}</span>
                  <span>🌐 <a href={profile.website} target="_blank" rel="noopener noreferrer">{profile.website}</a></span>
                </div>
              </>
            ) : (
              <div className="edit-form">
                <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} placeholder="이름" />
                <input type="text" value={profile.username} onChange={(e) => setProfile({...profile, username: e.target.value})} placeholder="사용자명" />
                <textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} placeholder="자기소개" rows="3" />
                <input type="text" value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})} placeholder="위치" />
                <input type="text" value={profile.company} onChange={(e) => setProfile({...profile, company: e.target.value})} placeholder="회사" />
                <input type="text" value={profile.website} onChange={(e) => setProfile({...profile, website: e.target.value})} placeholder="웹사이트" />
              </div>
            )}
          </div>

          <div className="profile-actions">
            {!isEditing ? (
              <>
                <button className="btn-edit" onClick={() => setIsEditing(true)}>프로필 수정</button>
                <button className="btn-share">공유하기</button>
              </>
            ) : (
              <>
                <button className="btn-save" onClick={handleSave}>저장</button>
                <button className="btn-cancel" onClick={() => setIsEditing(false)}>취소</button>
              </>
            )}
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">{stats.followers.toLocaleString()}</div>
            <div className="stat-label">팔로워</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.following.toLocaleString()}</div>
            <div className="stat-label">팔로잉</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.posts}</div>
            <div className="stat-label">포스트</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{stats.projects}</div>
            <div className="stat-label">프로젝트</div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>개요</button>
        <button className={`tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>프로젝트</button>
        <button className={`tab ${activeTab === 'activity' ? 'active' : ''}`} onClick={() => setActiveTab('activity')}>활동</button>
        <button className={`tab ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>스킬</button>
        <button className={`tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>업적</button>
      </div>

      <div className="profile-content">
        {activeTab === 'overview' && (
          <div className="overview-grid">
            <div className="overview-card">
              <h3>📊 최근 활동</h3>
              <div className="activity-list">
                {activities.slice(0, 5).map(activity => (
                  <div key={activity.id} className="activity-item">
                    <span className="activity-icon">{activity.icon}</span>
                    <div className="activity-info">
                      <p>{activity.title}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-card">
              <h3>🚀 진행 중인 프로젝트</h3>
              <div className="projects-preview">
                {projects.filter(p => p.status === 'active').map(project => (
                  <div key={project.id} className="project-preview-item">
                    <h4>{project.name}</h4>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${project.progress}%`}}></div>
                    </div>
                    <span className="progress-text">{project.progress}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-card">
              <h3>⭐ 최근 업적</h3>
              <div className="achievements-preview">
                {achievements.slice(0, 3).map(achievement => (
                  <div key={achievement.id} className={`achievement-preview ${achievement.rarity}`}>
                    <span className="achievement-icon">{achievement.icon}</span>
                    <div className="achievement-info">
                      <p>{achievement.name}</p>
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'active' ? '진행중' : project.status === 'completed' ? '완료' : '계획중'}
                  </span>
                </div>
                <div className="project-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${project.progress}%`}}></div>
                  </div>
                  <span>{project.progress}%</span>
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="btn-view">보기</button>
                  <button className="btn-edit-project">수정</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="activity-timeline">
            {activities.map(activity => (
              <div key={activity.id} className="timeline-item">
                <div className="timeline-icon">{activity.icon}</div>
                <div className="timeline-content">
                  <h4>{activity.title}</h4>
                  <span className="timeline-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h3>기술 스택</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: `${skill.level}%`, background: skill.color}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-grid">
            {achievements.map(achievement => (
              <div key={achievement.id} className={`achievement-card ${achievement.rarity}`}>
                <div className="achievement-icon-large">{achievement.icon}</div>
                <h3>{achievement.name}</h3>
                <p className="achievement-date">{achievement.date}</p>
                <span className="rarity-badge">{achievement.rarity}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
