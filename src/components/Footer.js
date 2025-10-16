import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>My React App</h3>
          <p>혁신적인 웹 애플리케이션으로 더 나은 경험을 제공합니다</p>
        </div>
        <div className="footer-section">
          <h4>빠른 링크</h4>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/about">소개</a></li>
            <li><a href="/services">서비스</a></li>
            <li><a href="/contact">문의하기</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>연락처</h4>
          <p>📍 서울특별시 강남구 테헤란로 123</p>
          <p>📞 02-1234-5678</p>
          <p>✉️ contact@myreactapp.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 My React App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
