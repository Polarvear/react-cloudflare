import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const images = [
    { id: 1, emoji: '🌅', title: 'Sunset Beach', category: 'nature', likes: 234, date: '2025-10-15' },
    { id: 2, emoji: '🏔️', title: 'Mountain Peak', category: 'nature', likes: 189, date: '2025-10-12' },
    { id: 3, emoji: '🌃', title: 'City Lights', category: 'urban', likes: 456, date: '2025-10-20' },
    { id: 4, emoji: '🎨', title: 'Abstract Art', category: 'art', likes: 312, date: '2025-10-18' },
    { id: 5, emoji: '🌺', title: 'Tropical Flowers', category: 'nature', likes: 278, date: '2025-10-10' },
    { id: 6, emoji: '🏛️', title: 'Ancient Architecture', category: 'architecture', likes: 345, date: '2025-10-08' },
    { id: 7, emoji: '🎭', title: 'Theater Performance', category: 'art', likes: 198, date: '2025-10-22' },
    { id: 8, emoji: '🌊', title: 'Ocean Waves', category: 'nature', likes: 421, date: '2025-10-14' },
    { id: 9, emoji: '🏙️', title: 'Skyline View', category: 'urban', likes: 389, date: '2025-10-16' },
    { id: 10, emoji: '🎪', title: 'Carnival Night', category: 'events', likes: 267, date: '2025-10-19' },
    { id: 11, emoji: '🌲', title: 'Forest Path', category: 'nature', likes: 334, date: '2025-10-11' },
    { id: 12, emoji: '🏰', title: 'Medieval Castle', category: 'architecture', likes: 412, date: '2025-10-13' },
    { id: 13, emoji: '🎆', title: 'Fireworks Display', category: 'events', likes: 523, date: '2025-10-21' },
    { id: 14, emoji: '🌈', title: 'Rainbow Valley', category: 'nature', likes: 445, date: '2025-10-17' },
    { id: 15, emoji: '🎸', title: 'Music Festival', category: 'events', likes: 378, date: '2025-10-23' },
    { id: 16, emoji: '🏖️', title: 'Paradise Beach', category: 'nature', likes: 498, date: '2025-10-09' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const sortedImages = [...filteredImages].sort((a, b) => b.likes - a.likes);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>🖼️ Gallery</h1>
        <p>Explore our beautiful collection of images</p>
      </div>

      <div className="gallery-controls">
        <div className="filter-section">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'nature' ? 'active' : ''} 
            onClick={() => setFilter('nature')}
          >
            Nature
          </button>
          <button 
            className={filter === 'urban' ? 'active' : ''} 
            onClick={() => setFilter('urban')}
          >
            Urban
          </button>
          <button 
            className={filter === 'art' ? 'active' : ''} 
            onClick={() => setFilter('art')}
          >
            Art
          </button>
          <button 
            className={filter === 'architecture' ? 'active' : ''} 
            onClick={() => setFilter('architecture')}
          >
            Architecture
          </button>
          <button 
            className={filter === 'events' ? 'active' : ''} 
            onClick={() => setFilter('events')}
          >
            Events
          </button>
        </div>

        <div className="view-controls">
          <button 
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            ⊞ Grid
          </button>
          <button 
            className={viewMode === 'masonry' ? 'active' : ''}
            onClick={() => setViewMode('masonry')}
          >
            ⊟ Masonry
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            ☰ List
          </button>
        </div>
      </div>

      <div className="gallery-stats">
        <div className="stat-card">
          <span className="stat-number">{images.length}</span>
          <span className="stat-label">Total Images</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{filteredImages.length}</span>
          <span className="stat-label">Filtered</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{images.reduce((sum, img) => sum + img.likes, 0)}</span>
          <span className="stat-label">Total Likes</span>
        </div>
      </div>

      <div className={`gallery-container ${viewMode}`}>
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <div className="image-wrapper">
              <div className="image-emoji">{image.emoji}</div>
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <div className="image-meta">
                  <span>❤️ {image.likes}</span>
                  <span className="category-badge">{image.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="popular-section">
        <h2>🔥 Most Popular</h2>
        <div className="popular-grid">
          {sortedImages.slice(0, 6).map(image => (
            <div 
              key={image.id} 
              className="popular-item"
              onClick={() => openLightbox(image)}
            >
              <div className="popular-emoji">{image.emoji}</div>
              <div className="popular-info">
                <h4>{image.title}</h4>
                <span>❤️ {image.likes} likes</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>✕</button>
            <button className="nav-btn prev" onClick={prevImage}>◀</button>
            <button className="nav-btn next" onClick={nextImage}>▶</button>
            
            <div className="lightbox-image">
              <div className="lightbox-emoji">{selectedImage.emoji}</div>
            </div>
            
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <div className="lightbox-meta">
                <span className="category-tag">{selectedImage.category}</span>
                <span className="date">📅 {selectedImage.date}</span>
                <span className="likes">❤️ {selectedImage.likes} likes</span>
              </div>
              <div className="lightbox-actions">
                <button className="action-btn">❤️ Like</button>
                <button className="action-btn">💬 Comment</button>
                <button className="action-btn">📤 Share</button>
                <button className="action-btn">⬇️ Download</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
