import React, { useState } from 'react';
import './CatCard.css';

function CatCard({ cat, isFavorite, onToggleFavorite }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`cat-card ${imageLoaded ? 'loaded' : ''}`}>
      <div className="image-container">
        {!imageLoaded && !imageError && (
          <div className="image-placeholder">
            <div className="spinner-small"></div>
          </div>
        )}
        {imageError ? (
          <div className="image-error">
            <span>😿</span>
            <p>이미지를 불러올 수 없습니다</p>
          </div>
        ) : (
          <img
            src={cat.url}
            alt="귀여운 고양이"
            className="cat-image"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        )}
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(cat.id)}
          title={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="cat-info">
        <p className="cat-id">ID: {cat.id}</p>
        {cat.breeds && cat.breeds.length > 0 && (
          <div className="cat-breed">
            <strong>{cat.breeds[0].name}</strong>
            <p>{cat.breeds[0].temperament}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CatCard;
