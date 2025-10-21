import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: 'other', text: '안녕하세요! React 질문 있어요', time: '10:30', avatar: '👨‍💻' },
      { id: 2, sender: 'me', text: '네, 무엇이 궁금하신가요?', time: '10:31', avatar: '👤' },
      { id: 3, sender: 'other', text: 'useState Hook 사용법 좀 알려주실 수 있나요?', time: '10:32', avatar: '👨‍💻' }
    ],
    2: [
      { id: 1, sender: 'other', text: '프로젝트 진행 어떻게 되고 있나요?', time: '09:15', avatar: '👩‍💼' },
      { id: 2, sender: 'me', text: '잘 진행되고 있습니다!', time: '09:20', avatar: '👤' }
    ]
  });

  const chats = [
    { id: 1, name: '김개발', avatar: '👨‍💻', lastMessage: 'useState Hook 사용법 좀...', time: '10:32', unread: 2, online: true },
    { id: 2, name: '이디자인', avatar: '👩‍💼', lastMessage: '프로젝트 진행 어떻게...', time: '09:20', unread: 0, online: true },
    { id: 3, name: '박프론트', avatar: '👨‍🎨', lastMessage: 'CSS 질문 있습니다', time: '어제', unread: 5, online: false },
    { id: 4, name: '최백엔드', avatar: '👩‍🔧', lastMessage: 'API 문서 확인했어요', time: '어제', unread: 0, online: false },
    { id: 5, name: '정풀스택', avatar: '👨‍💼', lastMessage: '회의 시간 조정 가능한가요?', time: '2일 전', unread: 1, online: true }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages[selectedChat].length + 1,
        sender: 'me',
        text: message,
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        avatar: '👤'
      };
      
      setMessages({
        ...messages,
        [selectedChat]: [...messages[selectedChat], newMessage]
      });
      setMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h2>💬 메시지</h2>
          <button className="btn-new-chat">+</button>
        </div>

        <div className="chat-search">
          <input type="text" placeholder="대화 검색..." />
        </div>

        <div className="chat-list">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="chat-avatar">
                {chat.avatar}
                {chat.online && <span className="online-indicator"></span>}
              </div>
              <div className="chat-info">
                <div className="chat-header">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-preview">
                  <span className="last-message">{chat.lastMessage}</span>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-main-header">
          <div className="chat-user-info">
            <div className="chat-avatar large">
              {chats.find(c => c.id === selectedChat)?.avatar}
              {chats.find(c => c.id === selectedChat)?.online && (
                <span className="online-indicator"></span>
              )}
            </div>
            <div>
              <h3>{chats.find(c => c.id === selectedChat)?.name}</h3>
              <span className="user-status">
                {chats.find(c => c.id === selectedChat)?.online ? '온라인' : '오프라인'}
              </span>
            </div>
          </div>
          <div className="chat-actions">
            <button className="btn-icon">📞</button>
            <button className="btn-icon">🎥</button>
            <button className="btn-icon">⚙️</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages[selectedChat]?.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-avatar">{msg.avatar}</div>
              <div className="message-content">
                <div className="message-bubble">{msg.text}</div>
                <span className="message-time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <button className="btn-icon">📎</button>
          <button className="btn-icon">😊</button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="메시지를 입력하세요..."
          />
          <button className="btn-send" onClick={sendMessage}>
            보내기 📤
          </button>
        </div>
      </div>

      <div className="chat-details">
        <div className="details-header">
          <div className="details-avatar">
            {chats.find(c => c.id === selectedChat)?.avatar}
          </div>
          <h3>{chats.find(c => c.id === selectedChat)?.name}</h3>
          <p>개발자</p>
        </div>

        <div className="details-section">
          <h4>📁 공유 파일</h4>
          <div className="shared-files">
            <div className="file-item">
              <span className="file-icon">📄</span>
              <span className="file-name">project-spec.pdf</span>
            </div>
            <div className="file-item">
              <span className="file-icon">🖼️</span>
              <span className="file-name">design-mockup.png</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h4>🔗 공유 링크</h4>
          <div className="shared-links">
            <button className="link-item">
              <span className="link-icon">🌐</span>
              <span className="link-text">GitHub Repository</span>
            </button>
            <button className="link-item">
              <span className="link-icon">📚</span>
              <span className="link-text">Documentation</span>
            </button>
          </div>
        </div>

        <div className="details-section">
          <h4>⚙️ 설정</h4>
          <div className="settings-list">
            <button className="setting-item">🔕 알림 끄기</button>
            <button className="setting-item">📌 상단 고정</button>
            <button className="setting-item">🚫 차단하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
