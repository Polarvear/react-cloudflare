import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'React 19의 새로운 기능 살펴보기',
      excerpt: 'React 19에서 추가된 혁신적인 기능들과 개선사항을 자세히 알아봅니다.',
      category: 'tech',
      author: '김개발',
      date: '2025-10-15',
      image: '📱',
      readTime: '5분'
    },
    {
      id: 2,
      title: '효율적인 웹 개발 워크플로우',
      excerpt: '생산성을 높이는 최신 개발 도구와 방법론을 소개합니다.',
      category: 'development',
      author: '이코더',
      date: '2025-10-12',
      image: '⚡',
      readTime: '7분'
    },
    {
      id: 3,
      title: 'UI/UX 디자인 트렌드 2025',
      excerpt: '2025년 주목해야 할 디자인 트렌드와 사용자 경험 개선 방법',
      category: 'design',
      author: '박디자인',
      date: '2025-10-10',
      image: '🎨',
      readTime: '6분'
    },
    {
      id: 4,
      title: '클라우드 배포 완벽 가이드',
      excerpt: 'Cloudflare Pages를 활용한 빠르고 안전한 웹 애플리케이션 배포',
      category: 'tech',
      author: '최클라우드',
      date: '2025-10-08',
      image: '☁️',
      readTime: '8분'
    },
    {
      id: 5,
      title: '성능 최적화 베스트 프랙티스',
      excerpt: '웹 애플리케이션의 로딩 속도와 성능을 극대화하는 방법',
      category: 'development',
      author: '정성능',
      date: '2025-10-05',
      image: '🚀',
      readTime: '10분'
    },
    {
      id: 6,
      title: '접근성을 고려한 웹 개발',
      excerpt: '모든 사용자를 위한 웹 접근성 구현 가이드',
      category: 'design',
      author: '강접근',
      date: '2025-10-01',
      image: '♿',
      readTime: '6분'
    }
  ];

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'tech', name: '기술' },
    { id: 'development', name: '개발' },
    { id: 'design', name: '디자인' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">블로그</h1>
          <p className="blog-hero-subtitle">
            최신 기술 트렌드와 개발 인사이트를 공유합니다
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-content">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <span className="blog-emoji">{post.image}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-category">{categories.find(c => c.id === post.category)?.name}</span>
                  <span className="blog-read-time">📖 {post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-avatar">👤</span>
                    <span className="author-name">{post.author}</span>
                  </div>
                  <span className="blog-date">{post.date}</span>
                </div>
                <button className="blog-read-more">자세히 보기 →</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2 className="newsletter-title">뉴스레터 구독</h2>
          <p className="newsletter-text">
            최신 글을 이메일로 받아보세요
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">구독하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
