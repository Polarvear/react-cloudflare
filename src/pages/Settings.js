import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [activeSection, setActiveSection] = useState('account');
  const [settings, setSettings] = useState({
    // Account
    email: 'user@example.com',
    username: 'kimdev',
    language: 'ko',
    timezone: 'Asia/Seoul',
    
    // Privacy
    profileVisibility: 'public',
    showEmail: false,
    showActivity: true,
    allowMessages: true,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    commentNotifications: true,
    likeNotifications: true,
    followNotifications: true,
    
    // Appearance
    theme: 'light',
    fontSize: 'medium',
    compactMode: false,
    
    // Security
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: 30
  });

  const handleChange = (key, value) => {
    setSettings({...settings, [key]: value});
  };

  const handleSave = () => {
    alert('설정이 저장되었습니다!');
  };

  const sections = [
    { id: 'account', name: '계정', icon: '👤' },
    { id: 'privacy', name: '개인정보', icon: '🔒' },
    { id: 'notifications', name: '알림', icon: '🔔' },
    { id: 'appearance', name: '모양', icon: '🎨' },
    { id: 'security', name: '보안', icon: '🛡️' },
    { id: 'advanced', name: '고급', icon: '⚙️' }
  ];

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>⚙️ 설정</h1>
        <p>계정 및 앱 설정을 관리하세요</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          {sections.map(section => (
            <button
              key={section.id}
              className={`settings-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span>{section.name}</span>
            </button>
          ))}
        </div>

        <div className="settings-content">
          {activeSection === 'account' && (
            <div className="settings-section">
              <h2>계정 설정</h2>
              
              <div className="setting-group">
                <label>이메일</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                <span className="setting-description">로그인 및 알림에 사용됩니다</span>
              </div>

              <div className="setting-group">
                <label>사용자명</label>
                <input
                  type="text"
                  value={settings.username}
                  onChange={(e) => handleChange('username', e.target.value)}
                />
                <span className="setting-description">프로필 URL에 표시됩니다</span>
              </div>

              <div className="setting-group">
                <label>언어</label>
                <select value={settings.language} onChange={(e) => handleChange('language', e.target.value)}>
                  <option value="ko">한국어</option>
                  <option value="en">English</option>
                  <option value="ja">日本語</option>
                  <option value="zh">中文</option>
                </select>
              </div>

              <div className="setting-group">
                <label>시간대</label>
                <select value={settings.timezone} onChange={(e) => handleChange('timezone', e.target.value)}>
                  <option value="Asia/Seoul">서울 (UTC+9)</option>
                  <option value="America/New_York">뉴욕 (UTC-5)</option>
                  <option value="Europe/London">런던 (UTC+0)</option>
                  <option value="Asia/Tokyo">도쿄 (UTC+9)</option>
                </select>
              </div>

              <div className="danger-zone">
                <h3>위험 구역</h3>
                <button className="btn-danger">계정 삭제</button>
                <span className="danger-description">계정을 영구적으로 삭제합니다. 이 작업은 되돌릴 수 없습니다.</span>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div className="settings-section">
              <h2>개인정보 설정</h2>

              <div className="setting-group">
                <label>프로필 공개 범위</label>
                <select value={settings.profileVisibility} onChange={(e) => handleChange('profileVisibility', e.target.value)}>
                  <option value="public">전체 공개</option>
                  <option value="friends">친구만</option>
                  <option value="private">비공개</option>
                </select>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>이메일 주소 공개</label>
                  <span>다른 사용자가 내 이메일을 볼 수 있습니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.showEmail}
                    onChange={(e) => handleChange('showEmail', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>활동 내역 공개</label>
                  <span>내 활동을 다른 사용자에게 표시합니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.showActivity}
                    onChange={(e) => handleChange('showActivity', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>메시지 수신 허용</label>
                  <span>다른 사용자가 메시지를 보낼 수 있습니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.allowMessages}
                    onChange={(e) => handleChange('allowMessages', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="settings-section">
              <h2>알림 설정</h2>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>이메일 알림</label>
                  <span>중요한 업데이트를 이메일로 받습니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>푸시 알림</label>
                  <span>브라우저 푸시 알림을 받습니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.pushNotifications}
                    onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <h3>알림 유형</h3>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>댓글 알림</label>
                  <span>내 게시물에 댓글이 달리면 알림</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.commentNotifications}
                    onChange={(e) => handleChange('commentNotifications', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>좋아요 알림</label>
                  <span>내 게시물에 좋아요가 눌리면 알림</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.likeNotifications}
                    onChange={(e) => handleChange('likeNotifications', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>팔로우 알림</label>
                  <span>새로운 팔로워가 생기면 알림</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.followNotifications}
                    onChange={(e) => handleChange('followNotifications', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="settings-section">
              <h2>모양 설정</h2>

              <div className="setting-group">
                <label>테마</label>
                <div className="theme-options">
                  <button
                    className={`theme-option ${settings.theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleChange('theme', 'light')}
                  >
                    <span className="theme-icon">☀️</span>
                    <span>라이트</span>
                  </button>
                  <button
                    className={`theme-option ${settings.theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleChange('theme', 'dark')}
                  >
                    <span className="theme-icon">🌙</span>
                    <span>다크</span>
                  </button>
                  <button
                    className={`theme-option ${settings.theme === 'auto' ? 'active' : ''}`}
                    onClick={() => handleChange('theme', 'auto')}
                  >
                    <span className="theme-icon">🔄</span>
                    <span>자동</span>
                  </button>
                </div>
              </div>

              <div className="setting-group">
                <label>글자 크기</label>
                <select value={settings.fontSize} onChange={(e) => handleChange('fontSize', e.target.value)}>
                  <option value="small">작게</option>
                  <option value="medium">보통</option>
                  <option value="large">크게</option>
                </select>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>컴팩트 모드</label>
                  <span>더 많은 콘텐츠를 화면에 표시합니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.compactMode}
                    onChange={(e) => handleChange('compactMode', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="settings-section">
              <h2>보안 설정</h2>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>2단계 인증</label>
                  <span>추가 보안 계층으로 계정을 보호합니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-toggle">
                <div className="toggle-info">
                  <label>로그인 알림</label>
                  <span>새로운 기기에서 로그인 시 알림을 받습니다</span>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={settings.loginAlerts}
                    onChange={(e) => handleChange('loginAlerts', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="setting-group">
                <label>세션 타임아웃 (분)</label>
                <input
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleChange('sessionTimeout', parseInt(e.target.value))}
                  min="5"
                  max="120"
                />
                <span className="setting-description">비활성 상태 후 자동 로그아웃 시간</span>
              </div>

              <div className="security-actions">
                <button className="btn-secondary">비밀번호 변경</button>
                <button className="btn-secondary">활성 세션 보기</button>
                <button className="btn-danger">모든 기기에서 로그아웃</button>
              </div>
            </div>
          )}

          {activeSection === 'advanced' && (
            <div className="settings-section">
              <h2>고급 설정</h2>

              <div className="setting-group">
                <label>데이터 내보내기</label>
                <button className="btn-secondary">내 데이터 다운로드</button>
                <span className="setting-description">모든 계정 데이터를 JSON 형식으로 다운로드합니다</span>
              </div>

              <div className="setting-group">
                <label>캐시 관리</label>
                <button className="btn-secondary">캐시 지우기</button>
                <span className="setting-description">저장된 임시 데이터를 삭제합니다</span>
              </div>

              <div className="setting-group">
                <label>개발자 모드</label>
                <button className="btn-secondary">API 키 관리</button>
                <span className="setting-description">개발자 API 액세스를 관리합니다</span>
              </div>
            </div>
          )}

          <div className="settings-footer">
            <button className="btn-cancel">취소</button>
            <button className="btn-save" onClick={handleSave}>변경사항 저장</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
