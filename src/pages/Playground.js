import React, { useState } from 'react';
import './Playground.css';

function Playground() {
  const [activeDemo, setActiveDemo] = useState('calculator');
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', completed: false },
    { id: 2, text: '프로젝트 완성하기', completed: true }
  ]);
  const [colorPicker, setColorPicker] = useState('#667eea');
  const [sliderValue, setSliderValue] = useState(50);
  const [timerMinutes, setTimerMinutes] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [weatherCity, setWeatherCity] = useState('Seoul');
  const [weatherData, setWeatherData] = useState({
    temp: 22,
    condition: '맑음',
    humidity: 65,
    wind: 12,
    feelsLike: 20
  });

  const demos = [
    { id: 'calculator', name: '계산기', icon: '🔢', description: '간단한 계산기 앱' },
    { id: 'todo', name: 'Todo 리스트', icon: '✅', description: '할 일 관리 앱' },
    { id: 'color', name: '컬러 픽커', icon: '🎨', description: '색상 선택 도구' },
    { id: 'slider', name: '슬라이더', icon: '🎚️', description: '인터랙티브 슬라이더' },
    { id: 'timer', name: '타이머', icon: '⏱️', description: '카운트다운 타이머' },
    { id: 'weather', name: '날씨 위젯', icon: '🌤️', description: '날씨 정보 표시' }
  ];

  const handleCalcClick = (value) => {
    if (value === 'C') {
      setCalcDisplay('0');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-new-func
        const result = Function('"use strict"; return (' + calcDisplay + ')')();
        setCalcDisplay(result.toString());
      } catch {
        setCalcDisplay('Error');
      }
    } else {
      setCalcDisplay(calcDisplay === '0' ? value : calcDisplay + value);
    }
  };

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now(), text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Timer functions
  const startTimer = () => {
    if (timerMinutes === 0 && timerSeconds === 0) return;
    setTimerRunning(true);
    setTimerPaused(false);
  };

  const pauseTimer = () => {
    setTimerPaused(true);
  };

  const resumeTimer = () => {
    setTimerPaused(false);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerPaused(false);
    setTimerMinutes(5);
    setTimerSeconds(0);
  };

  React.useEffect(() => {
    let interval = null;
    if (timerRunning && !timerPaused) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else {
          setTimerRunning(false);
          alert('⏰ 타이머 종료!');
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerPaused, timerMinutes, timerSeconds]);

  // Weather functions
  const updateWeather = () => {
    // Simulated weather data based on city
    const weatherConditions = ['맑음', '흐림', '비', '눈', '안개'];
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomTemp = Math.floor(Math.random() * 30) + 5;
    
    setWeatherData({
      temp: randomTemp,
      condition: randomCondition,
      humidity: Math.floor(Math.random() * 40) + 40,
      wind: Math.floor(Math.random() * 20) + 5,
      feelsLike: randomTemp + Math.floor(Math.random() * 5) - 2
    });
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      '맑음': '☀️',
      '흐림': '☁️',
      '비': '🌧️',
      '눈': '❄️',
      '안개': '🌫️'
    };
    return icons[condition] || '🌤️';
  };

  return (
    <div className="playground">
      <div className="playground-header">
        <h1>🎮 인터랙티브 플레이그라운드</h1>
        <p>직접 체험해보는 라이브 데모</p>
      </div>

      <div className="playground-content">
        <div className="demos-sidebar">
          <h3>데모 선택</h3>
          <div className="demos-list">
            {demos.map(demo => (
              <button
                key={demo.id}
                className={`demo-btn ${activeDemo === demo.id ? 'active' : ''}`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <span className="demo-icon">{demo.icon}</span>
                <div className="demo-info">
                  <div className="demo-name">{demo.name}</div>
                  <div className="demo-desc">{demo.description}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="demo-stats">
            <h4>📊 통계</h4>
            <div className="stat-item">
              <span>총 데모</span>
              <strong>{demos.length}</strong>
            </div>
            <div className="stat-item">
              <span>사용자</span>
              <strong>12.5K</strong>
            </div>
            <div className="stat-item">
              <span>평점</span>
              <strong>⭐ 4.9</strong>
            </div>
          </div>
        </div>

        <div className="demo-area">
          {activeDemo === 'calculator' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>🔢 계산기</h2>
                <p>기본적인 사칙연산 계산기입니다</p>
              </div>
              <div className="calculator">
                <div className="calc-display">{calcDisplay}</div>
                <div className="calc-buttons">
                  {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map(btn => (
                    <button key={btn} onClick={() => handleCalcClick(btn)} className="calc-btn">
                      {btn}
                    </button>
                  ))}
                  <button onClick={() => handleCalcClick('C')} className="calc-btn clear">C</button>
                </div>
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [display, setDisplay] = useState('0');

const handleClick = (value) => {
  if (value === 'C') {
    setDisplay('0');
  } else if (value === '=') {
    setDisplay(eval(display).toString());
  } else {
    setDisplay(display === '0' ? value : display + value);
  }
};`}</pre>
              </div>
            </div>
          )}

          {activeDemo === 'todo' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>✅ Todo 리스트</h2>
                <p>할 일을 추가하고 관리하세요</p>
              </div>
              <div className="todo-app">
                <div className="todo-input-group">
                  <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="새로운 할 일을 입력하세요..."
                  />
                  <button onClick={addTodo} className="btn-add">추가</button>
                </div>
                <div className="todos-list">
                  {todos.map(todo => (
                    <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <span>{todo.text}</span>
                      <button onClick={() => deleteTodo(todo.id)} className="btn-delete">🗑️</button>
                    </div>
                  ))}
                </div>
                <div className="todo-stats">
                  <span>전체: {todos.length}</span>
                  <span>완료: {todos.filter(t => t.completed).length}</span>
                  <span>미완료: {todos.filter(t => !t.completed).length}</span>
                </div>
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  setTodos([...todos, { 
    id: Date.now(), 
    text, 
    completed: false 
  }]);
};

const toggleTodo = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id 
      ? { ...todo, completed: !todo.completed } 
      : todo
  ));
};`}</pre>
              </div>
            </div>
          )}

          {activeDemo === 'color' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>🎨 컬러 픽커</h2>
                <p>원하는 색상을 선택하고 코드를 확인하세요</p>
              </div>
              <div className="color-picker-demo">
                <div className="color-display" style={{ background: colorPicker }}>
                  <h3>{colorPicker}</h3>
                </div>
                <input
                  type="color"
                  value={colorPicker}
                  onChange={(e) => setColorPicker(e.target.value)}
                  className="color-input"
                />
                <div className="color-info">
                  <div className="color-code">
                    <label>HEX</label>
                    <input type="text" value={colorPicker} readOnly />
                  </div>
                  <div className="color-code">
                    <label>RGB</label>
                    <input type="text" value={`rgb(${parseInt(colorPicker.slice(1,3), 16)}, ${parseInt(colorPicker.slice(3,5), 16)}, ${parseInt(colorPicker.slice(5,7), 16)})`} readOnly />
                  </div>
                </div>
                <div className="color-presets">
                  {['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'].map(color => (
                    <button
                      key={color}
                      className="preset-btn"
                      style={{ background: color }}
                      onClick={() => setColorPicker(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [color, setColor] = useState('#667eea');

<input
  type="color"
  value={color}
  onChange={(e) => setColor(e.target.value)}
/>

<div style={{ background: color }}>
  {color}
</div>`}</pre>
              </div>
            </div>
          )}

          {activeDemo === 'slider' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>🎚️ 인터랙티브 슬라이더</h2>
                <p>슬라이더를 움직여 값을 조절하세요</p>
              </div>
              <div className="slider-demo">
                <div className="slider-display">
                  <div className="slider-value">{sliderValue}%</div>
                  <div className="slider-bar">
                    <div 
                      className="slider-fill" 
                      style={{ width: `${sliderValue}%` }}
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(e.target.value)}
                  className="slider-input"
                />
                <div className="slider-info">
                  <div className="info-item">
                    <span>최소값</span>
                    <strong>0</strong>
                  </div>
                  <div className="info-item">
                    <span>현재값</span>
                    <strong>{sliderValue}</strong>
                  </div>
                  <div className="info-item">
                    <span>최대값</span>
                    <strong>100</strong>
                  </div>
                </div>
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [value, setValue] = useState(50);

<input
  type="range"
  min="0"
  max="100"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

<div style={{ width: \`\${value}%\` }}>
  {value}%
</div>`}</pre>
              </div>
            </div>
          )}

          {activeDemo === 'timer' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>⏱️ 카운트다운 타이머</h2>
                <p>집중력을 높이는 포모도로 타이머</p>
              </div>
              <div className="timer-demo">
                <div className="timer-display">
                  <div className="timer-circle">
                    <div className="timer-time">
                      {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
                    </div>
                    <div className="timer-label">
                      {timerRunning ? (timerPaused ? '일시정지' : '진행중') : '대기중'}
                    </div>
                  </div>
                </div>

                {!timerRunning && (
                  <div className="timer-presets">
                    <button onClick={() => { setTimerMinutes(1); setTimerSeconds(0); }} className="preset-btn">1분</button>
                    <button onClick={() => { setTimerMinutes(5); setTimerSeconds(0); }} className="preset-btn">5분</button>
                    <button onClick={() => { setTimerMinutes(10); setTimerSeconds(0); }} className="preset-btn">10분</button>
                    <button onClick={() => { setTimerMinutes(25); setTimerSeconds(0); }} className="preset-btn">25분</button>
                  </div>
                )}

                <div className="timer-controls">
                  {!timerRunning ? (
                    <button onClick={startTimer} className="btn-timer start">시작</button>
                  ) : (
                    <>
                      {!timerPaused ? (
                        <button onClick={pauseTimer} className="btn-timer pause">일시정지</button>
                      ) : (
                        <button onClick={resumeTimer} className="btn-timer resume">재개</button>
                      )}
                      <button onClick={resetTimer} className="btn-timer reset">리셋</button>
                    </>
                  )}
                </div>

                {!timerRunning && (
                  <div className="timer-custom">
                    <label>커스텀 시간 설정</label>
                    <div className="custom-inputs">
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={timerMinutes}
                        onChange={(e) => setTimerMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        placeholder="분"
                      />
                      <span>:</span>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={timerSeconds}
                        onChange={(e) => setTimerSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        placeholder="초"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [minutes, setMinutes] = useState(5);
const [seconds, setSeconds] = useState(0);
const [running, setRunning] = useState(false);

useEffect(() => {
  let interval = null;
  if (running) {
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setRunning(false);
      }
    }, 1000);
  }
  return () => clearInterval(interval);
}, [running, minutes, seconds]);`}</pre>
              </div>
            </div>
          )}

          {activeDemo === 'weather' && (
            <div className="demo-container">
              <div className="demo-header">
                <h2>🌤️ 날씨 위젯</h2>
                <p>실시간 날씨 정보를 확인하세요</p>
              </div>
              <div className="weather-demo">
                <div className="weather-location">
                  <input
                    type="text"
                    value={weatherCity}
                    onChange={(e) => setWeatherCity(e.target.value)}
                    placeholder="도시 이름 입력..."
                  />
                  <button onClick={updateWeather}>날씨 조회</button>
                </div>

                <div className="weather-card">
                  <div className="weather-icon">{getWeatherIcon(weatherData.condition)}</div>
                  <div className="weather-temp">{weatherData.temp}°C</div>
                  <div className="weather-desc">{weatherData.condition}</div>
                  <div className="weather-location-name">📍 {weatherCity}</div>

                  <div className="weather-details">
                    <div className="weather-detail">
                      <div className="weather-detail-label">체감온도</div>
                      <div className="weather-detail-value">{weatherData.feelsLike}°C</div>
                    </div>
                    <div className="weather-detail">
                      <div className="weather-detail-label">습도</div>
                      <div className="weather-detail-value">{weatherData.humidity}%</div>
                    </div>
                    <div className="weather-detail">
                      <div className="weather-detail-label">풍속</div>
                      <div className="weather-detail-value">{weatherData.wind} m/s</div>
                    </div>
                  </div>
                </div>

                <div className="weather-info">
                  <p>💡 이 데모는 시뮬레이션된 날씨 데이터를 사용합니다.</p>
                  <p>실제 앱에서는 OpenWeatherMap 같은 API를 사용하세요.</p>
                </div>
              </div>
              <div className="demo-code">
                <h4>💻 코드 예제</h4>
                <pre>{`const [weather, setWeather] = useState({});

const fetchWeather = async (city) => {
  const response = await fetch(
    \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=YOUR_API_KEY\`
  );
  const data = await response.json();
  setWeather({
    temp: Math.round(data.main.temp - 273.15),
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    wind: data.wind.speed
  });
};`}</pre>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="playground-footer">
        <h3>더 많은 데모를 원하시나요?</h3>
        <p>새로운 데모 아이디어를 제안해주세요!</p>
        <button className="btn-suggest">아이디어 제안하기 💡</button>
      </div>
    </div>
  );
}

export default Playground;
