import React, { useState } from 'react';
import './Notifications.css';

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'like', user: '김개발', action: '님이 회원님의 게시물을 좋아합니다', time: '5분 전', read: false, avatar: '👨‍💻' },
    { id: 2, type: 'comment', user: '이디자인', action: '님이 댓글을 남겼습니다: "정말 유용한 정보네요!"', time: '15분 전', read: false, avatar: '👩‍🎨' },
    { id: 3, type: 'follow', user: '박프론트', action: '님이 회원님을 팔로우하기 시작했습니다', time: '1시간 전', read: false, avatar: '👨‍💼' },
    { id: 4, type: 'mention', user: '최백엔드', action: '님이 회원님을 언급했습니다', time: '2시간 전', read: true, avatar: '👩‍💻' },
    { id: 5, type: 'system', user: 'System', action: '새로운 업데이트가 출시되었습니다', time: '3시간 전', read: true, avatar: '⚙️' },
    { id: 6, type: 'achievement', user: 'Achievement', action: '새로운 업적을 달성했습니다: "100일 연속 출석"', time: '5시간 전', read: true, avatar: '🏆' },
    { id: 7, type: 'like', user: '정풀스택', action: '님이 회원님의 댓글을 좋아합니다', time: '1일 전', read: true, avatar: '👨‍🔧' },
    { id: 8, type: 'comment', user: '강리액트', action: '님이 댓글을 남겼습니다: "감사합니다!"', time: '1일 전', read: true, avatar: '⚛️' }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({...n, read: true})));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !n.read;
    return n.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type) => {
    const icons = {
      like: '❤️',
      comment: '💬',
      follow: '👥',
      mention: '@',
      system: '⚙️',
      achievement: '🏆'
    };
    return icons[type] || '📢';
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <div className="header-content">
          <h1>🔔 알림</h1>
          <span className="unread-count">{unreadCount}개의 읽지 않은 알림</span>
        </div>
        <button className="btn-mark-all" onClick={markAllAsRead}>
          모두 읽음으로 표시
        </button>
      </div>

      <div className="notifications-filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          전체 ({notifications.length})
        </button>
        <button className={`filter-btn ${filter === 'unread' ? 'active' : ''}`} onClick={() => setFilter('unread')}>
          읽지 않음 ({unreadCount})
        </button>
        <button className={`filter-btn ${filter === 'like' ? 'active' : ''}`} onClick={() => setFilter('like')}>
          좋아요
        </button>
        <button className={`filter-btn ${filter === 'comment' ? 'active' : ''}`} onClick={() => setFilter('comment')}>
          댓글
        </button>
        <button className={`filter-btn ${filter === 'follow' ? 'active' : ''}`} onClick={() => setFilter('follow')}>
          팔로우
        </button>
        <button className={`filter-btn ${filter === 'mention' ? 'active' : ''}`} onClick={() => setFilter('mention')}>
          멘션
        </button>
      </div>

      <div className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`}>
              <div className="notification-icon-wrapper">
                <span className="notification-avatar">{notification.avatar}</span>
                <span className="notification-type-icon">{getIcon(notification.type)}</span>
              </div>
              
              <div className="notification-content">
                <p>
                  <strong>{notification.user}</strong> {notification.action}
                </p>
                <span className="notification-time">{notification.time}</span>
              </div>

              <div className="notification-actions">
                {!notification.read && (
                  <button className="btn-read" onClick={() => markAsRead(notification.id)} title="읽음으로 표시">
                    ✓
                  </button>
                )}
                <button className="btn-delete" onClick={() => deleteNotification(notification.id)} title="삭제">
                  ×
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>알림이 없습니다</h3>
            <p>새로운 알림이 도착하면 여기에 표시됩니다</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
