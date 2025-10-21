import React, { useState, useEffect } from 'react';
import './Games.css';

function Games() {
  const [activeGame, setActiveGame] = useState('quiz');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  
  // Memory Game State
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  
  // Typing Game State
  const [typingText, setTypingText] = useState('');
  const [targetText, setTargetText] = useState('const greeting = "Hello World";');
  const [typingStartTime, setTypingStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  
  // Snake Game State
  const [snakeScore] = useState(0);

  const quizQuestions = [
    {
      question: 'React에서 상태를 관리하는 Hook은?',
      options: ['useEffect', 'useState', 'useContext', 'useReducer'],
      correct: 1,
      explanation: 'useState는 컴포넌트의 상태를 관리하는 가장 기본적인 Hook입니다.'
    },
    {
      question: 'JavaScript에서 배열의 마지막 요소를 제거하는 메서드는?',
      options: ['shift()', 'pop()', 'slice()', 'splice()'],
      correct: 1,
      explanation: 'pop()은 배열의 마지막 요소를 제거하고 반환합니다.'
    },
    {
      question: 'CSS에서 요소를 가운데 정렬하는 Flexbox 속성은?',
      options: ['align-items: center', 'justify-content: center', 'text-align: center', 'margin: auto'],
      correct: 1,
      explanation: 'justify-content: center는 주축(main axis)을 따라 요소를 가운데 정렬합니다.'
    },
    {
      question: 'Git에서 변경사항을 저장하는 명령어는?',
      options: ['git push', 'git commit', 'git add', 'git save'],
      correct: 1,
      explanation: 'git commit은 스테이징된 변경사항을 로컬 저장소에 저장합니다.'
    },
    {
      question: 'HTTP 상태 코드 404는 무엇을 의미하나요?',
      options: ['서버 에러', '찾을 수 없음', '성공', '권한 없음'],
      correct: 1,
      explanation: '404는 요청한 리소스를 찾을 수 없음을 의미합니다.'
    }
  ];

  const games = [
    { id: 'quiz', name: '코딩 퀴즈', icon: '🧠', description: '지식을 테스트하세요' },
    { id: 'memory', name: '메모리 게임', icon: '🎴', description: '카드 짝 맞추기' },
    { id: 'typing', name: '타이핑 게임', icon: '⌨️', description: '코드 타이핑 속도' },
    { id: 'snake', name: '스네이크 게임', icon: '🐍', description: '클래식 게임' },
    { id: 'puzzle', name: '코드 퍼즐', icon: '🧩', description: '곧 출시' },
    { id: 'trivia', name: '트리비아', icon: '🎯', description: '곧 출시' }
  ];

  // Initialize Memory Game
  useEffect(() => {
    if (activeGame === 'memory') {
      initMemoryGame();
    }
  }, [activeGame]);

  const initMemoryGame = () => {
    const emojis = ['⚛️', '📘', '🎨', '🚀', '💻', '🔥', '⚡', '🎯'];
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false }));
    setCards(gameCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleQuizAnswer = (selectedIndex) => {
    const newAnswers = [...userAnswers, selectedIndex];
    setUserAnswers(newAnswers);

    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const handleTyping = (e) => {
    const typed = e.target.value;
    setTypingText(typed);

    if (!typingStartTime) {
      setTypingStartTime(Date.now());
    }

    if (typed === targetText) {
      const timeElapsed = (Date.now() - typingStartTime) / 1000 / 60;
      const wordsTyped = targetText.split(' ').length;
      const calculatedWpm = Math.round(wordsTyped / timeElapsed);
      setWpm(calculatedWpm);
    }
  };

  const resetTyping = () => {
    setTypingText('');
    setTypingStartTime(null);
    setWpm(0);
    const codes = [
      'const greeting = "Hello World";',
      'function add(a, b) { return a + b; }',
      'const arr = [1, 2, 3].map(x => x * 2);',
      'import React from "react";'
    ];
    setTargetText(codes[Math.floor(Math.random() * codes.length)]);
  };

  return (
    <div className="games">
      <div className="games-header">
        <h1>🎮 게임 센터</h1>
        <p>재미있게 배우고 실력을 향상시키세요</p>
      </div>

      <div className="games-stats">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-value">1,234</div>
          <div className="stat-label">총 플레이</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">{score}</div>
          <div className="stat-label">현재 점수</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">89</div>
          <div className="stat-label">획득 배지</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-value">5.6K</div>
          <div className="stat-label">플레이어</div>
        </div>
      </div>

      <div className="games-content">
        <div className="games-sidebar">
          <h3>게임 선택</h3>
          <div className="games-list">
            {games.map(game => (
              <button
                key={game.id}
                className={`game-btn ${activeGame === game.id ? 'active' : ''}`}
                onClick={() => setActiveGame(game.id)}
              >
                <span className="game-icon">{game.icon}</span>
                <div className="game-info">
                  <div className="game-name">{game.name}</div>
                  <div className="game-desc">{game.description}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="daily-challenge">
            <h4>🌟 오늘의 도전</h4>
            <p>React Hook 퀴즈 완료하기</p>
            <div className="challenge-reward">+50 XP</div>
          </div>
        </div>

        <div className="game-area">
          {activeGame === 'quiz' && (
            <div className="quiz-game">
              <div className="game-header">
                <h2>🧠 코딩 퀴즈</h2>
                <div className="quiz-progress">
                  질문 {currentQuestion + 1} / {quizQuestions.length}
                </div>
              </div>

              {!showResult ? (
                <div className="quiz-container">
                  <div className="question-card">
                    <h3>{quizQuestions[currentQuestion].question}</h3>
                    <div className="options-grid">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          className="option-btn"
                          onClick={() => handleQuizAnswer(index)}
                        >
                          <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                          <span className="option-text">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="quiz-result">
                  <div className="result-icon">
                    {score >= 4 ? '🎉' : score >= 3 ? '👍' : '💪'}
                  </div>
                  <h3>퀴즈 완료!</h3>
                  <div className="result-score">
                    {score} / {quizQuestions.length} 정답
                  </div>
                  <div className="result-percentage">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <button className="btn-retry" onClick={resetQuiz}>
                    다시 도전하기
                  </button>
                </div>
              )}
            </div>
          )}

          {activeGame === 'memory' && (
            <div className="memory-game">
              <div className="game-header">
                <h2>🎴 메모리 게임</h2>
                <div className="game-stats">
                  <span>이동: {moves}</span>
                  <span>매칭: {matched.length / 2} / 8</span>
                </div>
              </div>

              <div className="memory-grid">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`memory-card ${
                      flipped.includes(index) || matched.includes(index) ? 'flipped' : ''
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="card-front">?</div>
                    <div className="card-back">{card.emoji}</div>
                  </div>
                ))}
              </div>

              {matched.length === 16 && (
                <div className="game-complete">
                  <h3>🎉 완료!</h3>
                  <p>{moves}번 만에 성공!</p>
                  <button className="btn-retry" onClick={initMemoryGame}>
                    다시 플레이
                  </button>
                </div>
              )}
            </div>
          )}

          {activeGame === 'typing' && (
            <div className="typing-game">
              <div className="game-header">
                <h2>⌨️ 타이핑 게임</h2>
                {wpm > 0 && <div className="wpm-display">{wpm} WPM</div>}
              </div>

              <div className="typing-container">
                <div className="target-text">
                  <code>{targetText}</code>
                </div>
                <textarea
                  className="typing-input"
                  value={typingText}
                  onChange={handleTyping}
                  placeholder="여기에 위의 코드를 타이핑하세요..."
                  spellCheck={false}
                />
                <div className="typing-stats">
                  <div className="stat">
                    정확도: {typingText.length > 0 
                      ? Math.round((typingText.split('').filter((char, i) => char === targetText[i]).length / typingText.length) * 100)
                      : 0}%
                  </div>
                  <div className="stat">
                    진행: {typingText.length} / {targetText.length}
                  </div>
                </div>
                <button className="btn-retry" onClick={resetTyping}>
                  새로운 코드
                </button>
              </div>

              {wpm > 0 && (
                <div className="typing-result">
                  <h3>완료! 🎉</h3>
                  <p>타이핑 속도: <strong>{wpm} WPM</strong></p>
                </div>
              )}
            </div>
          )}

          {activeGame === 'snake' && (
            <div className="snake-game">
              <div className="game-header">
                <h2>🐍 스네이크 게임</h2>
                <div className="snake-score">점수: {snakeScore}</div>
              </div>
              <div className="coming-soon">
                <div className="coming-icon">🚧</div>
                <h3>곧 출시됩니다!</h3>
                <p>클래식 스네이크 게임을 준비 중입니다.</p>
              </div>
            </div>
          )}

          {(activeGame === 'puzzle' || activeGame === 'trivia') && (
            <div className="coming-soon">
              <div className="coming-icon">🚧</div>
              <h3>곧 출시됩니다!</h3>
              <p>새로운 게임을 준비 중입니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
