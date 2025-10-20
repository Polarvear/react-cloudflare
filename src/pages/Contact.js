import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [showOffer, setShowOffer] = useState(true);
  const [timeLeft, setTimeLeft] = useState(3600); // 1시간 카운트다운

  // 긴급성 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 문의가 접수되었습니다! 30분 내로 전담 컨설턴트가 연락드립니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* 긴급 할인 배너 */}
      {showOffer && (
        <div className="urgent-offer-banner">
          <button className="close-banner" onClick={() => setShowOffer(false)}>✕</button>
          <div className="offer-content">
            <div className="offer-badge">🔥 특별 한정 오퍼</div>
            <h3>오늘 문의 시 첫 달 50% 할인!</h3>
            <p>남은 시간: <span className="countdown">{formatTime(timeLeft)}</span></p>
            <div className="offer-features">
              <span>✓ 무료 컨설팅</span>
              <span>✓ 30일 환불 보장</span>
              <span>✓ 전담 매니저 배정</span>
            </div>
          </div>
        </div>
      )}

      <section className="contact-hero">
        <h1>💬 프로젝트 시작하기</h1>
        <p>30분 내 응답 보장 • 무료 컨설팅 • 맞춤형 견적</p>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>평균 응답 시간</strong>
            <span>30분</span>
          </div>
          <div className="hero-stat">
            <strong>고객 만족도</strong>
            <span>98%</span>
          </div>
          <div className="hero-stat">
            <strong>프로젝트 성공률</strong>
            <span>100%</span>
          </div>
        </div>
      </section>

      {/* 소셜 프루프 */}
      <section className="social-proof-section">
        <div className="proof-container">
          <div className="proof-item">
            <div className="proof-icon">⭐⭐⭐⭐⭐</div>
            <p><strong>4.9/5</strong> 평점</p>
            <span>500+ 리뷰</span>
          </div>
          <div className="proof-item">
            <div className="proof-icon">🏆</div>
            <p><strong>업계 1위</strong></p>
            <span>3년 연속</span>
          </div>
          <div className="proof-item">
            <div className="proof-icon">👥</div>
            <p><strong>50,000+</strong> 고객</p>
            <span>전 세계</span>
          </div>
          <div className="proof-item">
            <div className="proof-icon">💼</div>
            <p><strong>1,000+</strong> 기업</p>
            <span>파트너사</span>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-form-container priority">
          <div className="form-header">
            <h2>🚀 무료 상담 신청</h2>
            <p className="form-subtitle">지금 신청하시면 <span className="highlight">30분 내 전문가가 연락</span>드립니다</p>
            <div className="form-benefits">
              <div className="benefit">✓ 무료 프로젝트 분석</div>
              <div className="benefit">✓ 맞춤형 솔루션 제안</div>
              <div className="benefit">✓ 투명한 견적 제공</div>
            </div>
          </div>

          <form className="contact-form enhanced" onSubmit={handleSubmit}>
            <div className="form-row">
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
                <label htmlFor="company">회사명</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="회사명 (선택)"
                />
              </div>
            </div>

            <div className="form-row">
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
                <label htmlFor="phone">연락처 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">관심 서비스 *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택하세요</option>
                  <option value="web">웹 개발</option>
                  <option value="mobile">모바일 앱</option>
                  <option value="cloud">클라우드 솔루션</option>
                  <option value="design">UI/UX 디자인</option>
                  <option value="consulting">컨설팅</option>
                  <option value="maintenance">유지보수</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">예산 범위</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">선택하세요</option>
                  <option value="under-1000">100만원 미만</option>
                  <option value="1000-3000">100-300만원</option>
                  <option value="3000-5000">300-500만원</option>
                  <option value="5000-10000">500-1,000만원</option>
                  <option value="over-10000">1,000만원 이상</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">프로젝트 상세 내용 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="프로젝트에 대해 자세히 알려주세요. 목표, 일정, 특별한 요구사항 등을 포함해주시면 더 정확한 상담이 가능합니다."
              ></textarea>
            </div>

            <div className="form-guarantee">
              <div className="guarantee-item">🔒 개인정보 보호</div>
              <div className="guarantee-item">⚡ 30분 내 응답</div>
              <div className="guarantee-item">💰 무료 견적</div>
            </div>

            <button type="submit" className="btn btn-submit enhanced">
              <span>무료 상담 신청하기</span>
              <span className="btn-arrow">→</span>
            </button>

            <p className="form-note">* 표시는 필수 입력 항목입니다</p>
          </form>
        </div>

        <div className="contact-info-sidebar">
          <div className="info-card urgent">
            <div className="card-icon">⚡</div>
            <h3>빠른 응답</h3>
            <p>평균 30분 이내 답변</p>
            <div className="live-indicator">
              <span className="pulse-dot"></span>
              <span>지금 상담 가능</span>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">📞</div>
            <h3>긴급 문의</h3>
            <a href="tel:02-1234-5678" className="contact-link">02-1234-5678</a>
            <p className="contact-hours">평일 09:00 - 18:00</p>
          </div>

          <div className="info-card">
            <div className="card-icon">✉️</div>
            <h3>이메일</h3>
            <a href="mailto:contact@myreactapp.com" className="contact-link">contact@myreactapp.com</a>
            <p className="contact-hours">24시간 접수</p>
          </div>

          <div className="info-card">
            <div className="card-icon">📍</div>
            <h3>오시는 길</h3>
            <p>서울 강남구 테헤란로 123</p>
            <p className="contact-hours">2호선 강남역 3번 출구</p>
          </div>

          <div className="trust-badges">
            <h4>신뢰할 수 있는 파트너</h4>
            <div className="badges">
              <div className="badge">🏅 ISO 인증</div>
              <div className="badge">🔐 보안 인증</div>
              <div className="badge">⭐ 우수 기업</div>
            </div>
          </div>

          <div className="recent-inquiries">
            <h4>실시간 문의 현황</h4>
            <div className="inquiry-item">
              <span className="inquiry-time">방금 전</span>
              <p>김** 님이 웹 개발 문의</p>
            </div>
            <div className="inquiry-item">
              <span className="inquiry-time">5분 전</span>
              <p>이** 님이 모바일 앱 문의</p>
            </div>
            <div className="inquiry-item">
              <span className="inquiry-time">12분 전</span>
              <p>박** 님이 컨설팅 문의</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="faq-section-contact">
        <h2>자주 묻는 질문</h2>
        <div className="faq-grid-contact">
          <div className="faq-item-contact">
            <h3>💰 견적은 어떻게 받나요?</h3>
            <p>문의 폼 작성 후 30분 내로 전문가가 연락드려 무료 상담 및 맞춤 견적을 제공합니다.</p>
          </div>
          <div className="faq-item-contact">
            <h3>⏱️ 프로젝트 기간은 얼마나 걸리나요?</h3>
            <p>프로젝트 규모에 따라 다르지만, 평균 2-8주 소요됩니다. 정확한 일정은 상담 시 안내드립니다.</p>
          </div>
          <div className="faq-item-contact">
            <h3>🔄 수정은 가능한가요?</h3>
            <p>네, 프로젝트 진행 중 무제한 수정이 가능하며, 완료 후에도 30일 무상 수정을 제공합니다.</p>
          </div>
          <div className="faq-item-contact">
            <h3>💳 결제 방법은?</h3>
            <p>계약금 30%, 중도금 30%, 잔금 40%로 분할 결제 가능하며, 카드/계좌이체 모두 지원합니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
