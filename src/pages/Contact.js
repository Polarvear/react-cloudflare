import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('문의가 접수되었습니다! 빠른 시일 내에 답변 드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>문의하기</h1>
        <p>궁금한 점이 있으시면 언제든지 연락주세요</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>연락처 정보</h2>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <h3>전화</h3>
              <p>02-1234-5678</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div>
              <h3>이메일</h3>
              <p>contact@myreactapp.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">🕐</div>
            <div>
              <h3>운영 시간</h3>
              <p>평일 09:00 - 18:00</p>
              <p>주말 및 공휴일 휴무</p>
            </div>
          </div>

          <div className="social-links">
            <h3>소셜 미디어</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>문의 양식</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="홍길동"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">제목 *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="문의 제목을 입력하세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="문의 내용을 입력하세요"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit">문의 보내기</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
