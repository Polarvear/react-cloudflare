import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          My React App
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              홈
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              소개
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>
              서비스
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>
              포트폴리오
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={closeMenu}>
              블로그
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link" onClick={closeMenu}>
              요금제
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              문의하기
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link" onClick={closeMenu}>
              대시보드
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/community" className="nav-link" onClick={closeMenu}>
              커뮤니티
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link" onClick={closeMenu}>
              리소스
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/playground" className="nav-link" onClick={closeMenu}>
              플레이그라운드
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link" onClick={closeMenu}>
              이벤트
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/games" className="nav-link" onClick={closeMenu}>
              게임
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard" className="nav-link" onClick={closeMenu}>
              리더보드
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/studio" className="nav-link" onClick={closeMenu}>
              스튜디오
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chat" className="nav-link" onClick={closeMenu}>
              채팅
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={closeMenu}>
              강의
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
