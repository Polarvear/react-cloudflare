import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>회사 소개</h1>
        <p>우리는 혁신적인 기술로 더 나은 미래를 만들어갑니다</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>우리의 비전</h2>
          <p>
            최첨단 기술과 창의적인 아이디어를 결합하여 사용자에게 최고의 경험을 제공하는 것이 우리의 목표입니다.
            지속적인 혁신과 발전을 통해 업계를 선도하는 기업이 되고자 합니다.
          </p>
        </div>

        <div className="about-section">
          <h2>우리의 가치</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🎯 혁신</h3>
              <p>끊임없는 도전과 창의적 사고로 새로운 가치를 창출합니다</p>
            </div>
            <div className="value-item">
              <h3>🤝 신뢰</h3>
              <p>투명하고 정직한 소통으로 고객과의 신뢰를 구축합니다</p>
            </div>
            <div className="value-item">
              <h3>🌟 우수성</h3>
              <p>최고의 품질과 서비스를 제공하기 위해 노력합니다</p>
            </div>
            <div className="value-item">
              <h3>💡 창의성</h3>
              <p>독창적인 아이디어로 차별화된 솔루션을 제공합니다</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>우리의 팀</h2>
          <p>
            열정적이고 전문적인 팀원들이 함께 협력하여 최상의 결과를 만들어냅니다.
            다양한 배경과 경험을 가진 인재들이 모여 시너지를 창출합니다.
          </p>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <h3>500+</h3>
            <p>프로젝트 완료</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>만족한 고객</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>전문 팀원</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>수상 경력</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
