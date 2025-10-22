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
  const [snakeScore, setSnakeScore] = useState(0);
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [snakeRunning, setSnakeRunning] = useState(false);
  
  // Puzzle Game State
  const [puzzleBoard, setPuzzleBoard] = useState([]);
  const [puzzleMoves, setPuzzleMoves] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  
  // Trivia Game State
  const [triviaScore, setTriviaScore] = useState(0);
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [triviaAnswers, setTriviaAnswers] = useState([]);
  const [showTriviaResult, setShowTriviaResult] = useState(false);

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
    { id: 'puzzle', name: '슬라이딩 퍼즐', icon: '🧩', description: '숫자 맞추기' },
    { id: 'trivia', name: '개발 트리비아', icon: '🎯', description: '상식 퀴즈' }
  ];

  const triviaQuestions = [
    {
      question: '최초의 프로그래밍 언어는?',
      options: ['Fortran', 'COBOL', 'Assembly', 'Plankalkül'],
      correct: 3,
      fact: 'Plankalkül은 1940년대에 Konrad Zuse가 개발한 최초의 고급 프로그래밍 언어입니다.'
    },
    {
      question: 'GitHub의 마스코트 이름은?',
      options: ['Octocat', 'Gitty', 'Hubby', 'Codecat'],
      correct: 0,
      fact: 'Octocat은 GitHub의 공식 마스코트로, 고양이와 문어의 합성어입니다.'
    },
    {
      question: 'JavaScript가 처음 만들어진 기간은?',
      options: ['1년', '6개월', '3개월', '10일'],
      correct: 3,
      fact: 'Brendan Eich는 1995년 단 10일 만에 JavaScript의 첫 버전을 만들었습니다.'
    },
    {
      question: 'Linux의 마스코트는?',
      options: ['펭귄', '여우', '고양이', '독수리'],
      correct: 0,
      fact: 'Tux라는 이름의 펭귄이 Linux의 공식 마스코트입니다.'
    },
    {
      question: 'Stack Overflow는 언제 설립되었나요?',
      options: ['2006', '2008', '2010', '2012'],
      correct: 1,
      fact: 'Stack Overflow는 2008년 Jeff Atwood와 Joel Spolsky에 의해 설립되었습니다.'
    }
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

  // Snake Game Functions
  const initSnakeGame = () => {
    setSnake([[5, 5]]);
    setFood([10, 10]);
    setDirection('RIGHT');
    setSnakeScore(0);
    setGameOver(false);
    setSnakeRunning(false);
  };

  const startSnakeGame = () => {
    if (!snakeRunning && !gameOver) {
      setSnakeRunning(true);
    }
  };

  const generateFood = () => {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    return [x, y];
  };

  useEffect(() => {
    if (!snakeRunning || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = [...newSnake[0]];

        switch (direction) {
          case 'UP':
            head[1] -= 1;
            break;
          case 'DOWN':
            head[1] += 1;
            break;
          case 'LEFT':
            head[0] -= 1;
            break;
          case 'RIGHT':
            head[0] += 1;
            break;
          default:
            break;
        }

        // Check wall collision
        if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
          setGameOver(true);
          setSnakeRunning(false);
          return prevSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true);
          setSnakeRunning(false);
          return prevSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head[0] === food[0] && head[1] === food[1]) {
          setSnakeScore(prev => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [snakeRunning, direction, food, gameOver]);

  useEffect(() => {
    if (!snakeRunning) return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [snakeRunning, direction]);

  // Puzzle Game Functions
  const initPuzzle = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setPuzzleBoard(shuffled);
    setPuzzleMoves(0);
    setPuzzleSolved(false);
  };

  const movePuzzleTile = (index) => {
    const emptyIndex = puzzleBoard.indexOf(0);
    const validMoves = [
      emptyIndex - 3, // above
      emptyIndex + 3, // below
      emptyIndex % 3 !== 0 ? emptyIndex - 1 : -1, // left
      emptyIndex % 3 !== 2 ? emptyIndex + 1 : -1  // right
    ];

    if (validMoves.includes(index)) {
      const newBoard = [...puzzleBoard];
      [newBoard[emptyIndex], newBoard[index]] = [newBoard[index], newBoard[emptyIndex]];
      setPuzzleBoard(newBoard);
      setPuzzleMoves(puzzleMoves + 1);

      // Check if solved
      const isSolved = newBoard.every((num, idx) => num === (idx === 8 ? 0 : idx + 1));
      if (isSolved) {
        setPuzzleSolved(true);
      }
    }
  };

  useEffect(() => {
    if (activeGame === 'puzzle' && puzzleBoard.length === 0) {
      initPuzzle();
    }
  }, [activeGame]);

  // Trivia Game Functions
  const handleTriviaAnswer = (selectedIndex) => {
    const newAnswers = [...triviaAnswers, selectedIndex];
    setTriviaAnswers(newAnswers);

    if (selectedIndex === triviaQuestions[currentTrivia].correct) {
      setTriviaScore(triviaScore + 1);
    }

    if (currentTrivia < triviaQuestions.length - 1) {
      setCurrentTrivia(currentTrivia + 1);
    } else {
      setShowTriviaResult(true);
    }
  };

  const resetTrivia = () => {
    setCurrentTrivia(0);
    setTriviaScore(0);
    setShowTriviaResult(false);
    setTriviaAnswers([]);
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
              
              <div className="snake-container">
                <div className="snake-board">
                  {Array.from({ length: 20 }).map((_, y) => (
                    <div key={y} className="snake-row">
                      {Array.from({ length: 20 }).map((_, x) => {
                        const isSnake = snake.some(segment => segment[0] === x && segment[1] === y);
                        const isHead = snake[0] && snake[0][0] === x && snake[0][1] === y;
                        const isFood = food[0] === x && food[1] === y;
                        
                        return (
                          <div
                            key={x}
                            className={`snake-cell ${isSnake ? 'snake' : ''} ${isHead ? 'head' : ''} ${isFood ? 'food' : ''}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className="snake-controls">
                  {!snakeRunning && !gameOver && (
                    <button className="btn-start" onClick={startSnakeGame}>
                      게임 시작 🎮
                    </button>
                  )}
                  {snakeRunning && (
                    <div className="game-info">
                      <p>⬆️⬇️⬅️➡️ 방향키로 조작하세요</p>
                      <p>길이: {snake.length}</p>
                    </div>
                  )}
                  {gameOver && (
                    <div className="game-over">
                      <h3>게임 오버! 💀</h3>
                      <p>최종 점수: {snakeScore}</p>
                      <p>길이: {snake.length}</p>
                      <button className="btn-retry" onClick={initSnakeGame}>
                        다시 시작
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeGame === 'puzzle' && (
            <div className="puzzle-game">
              <div className="game-header">
                <h2>🧩 슬라이딩 퍼즐</h2>
                <div className="puzzle-info">
                  <span>이동: {puzzleMoves}</span>
                  {puzzleSolved && <span className="solved-badge">✅ 완료!</span>}
                </div>
              </div>

              <div className="puzzle-container">
                <div className="puzzle-board">
                  {puzzleBoard.map((num, index) => (
                    <div
                      key={index}
                      className={`puzzle-tile ${num === 0 ? 'empty' : ''} ${puzzleSolved ? 'solved' : ''}`}
                      onClick={() => !puzzleSolved && movePuzzleTile(index)}
                    >
                      {num !== 0 && num}
                    </div>
                  ))}
                </div>

                <button className="btn-retry" onClick={initPuzzle}>
                  새 게임 시작
                </button>

                {puzzleSolved && (
                  <div className="puzzle-complete">
                    <h3>🎉 축하합니다!</h3>
                    <p>{puzzleMoves}번 만에 완성!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeGame === 'trivia' && (
            <div className="trivia-game">
              <div className="game-header">
                <h2>🎯 개발 트리비아</h2>
                <div className="trivia-progress">
                  질문 {currentTrivia + 1} / {triviaQuestions.length}
                </div>
              </div>

              {!showTriviaResult ? (
                <div className="trivia-container">
                  <div className="trivia-card">
                    <h3>{triviaQuestions[currentTrivia].question}</h3>
                    <div className="trivia-options">
                      {triviaQuestions[currentTrivia].options.map((option, index) => (
                        <button
                          key={index}
                          className="trivia-option"
                          onClick={() => handleTriviaAnswer(index)}
                        >
                          <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                          <span className="option-text">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="trivia-result">
                  <div className="result-icon">
                    {triviaScore >= 4 ? '🏆' : triviaScore >= 3 ? '🎉' : '📚'}
                  </div>
                  <h3>트리비아 완료!</h3>
                  <div className="result-score">
                    {triviaScore} / {triviaQuestions.length} 정답
                  </div>
                  
                  <div className="trivia-facts">
                    <h4>💡 재미있는 사실들</h4>
                    {triviaQuestions.map((q, idx) => (
                      <div key={idx} className="fact-item">
                        <div className="fact-question">{q.question}</div>
                        <div className={`fact-answer ${triviaAnswers[idx] === q.correct ? 'correct' : 'wrong'}`}>
                          {triviaAnswers[idx] === q.correct ? '✅' : '❌'} {q.options[q.correct]}
                        </div>
                        <div className="fact-text">{q.fact}</div>
                      </div>
                    ))}
                  </div>

                  <button className="btn-retry" onClick={resetTrivia}>
                    다시 도전하기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;
