import React, { useState, useEffect } from 'react';
import './App.css';
import CatCard from './components/CatCard';
import CatFacts from './components/CatFacts';
import SearchBar from './components/SearchBar';

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  // The Cat API에서 고양이 이미지 가져오기
  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error('고양이를 불러오는데 실패했습니다:', error);
    }
    setLoading(false);
  };

  const toggleFavorite = (catId) => {
    setFavorites(prev => {
      if (prev.includes(catId)) {
        return prev.filter(id => id !== catId);
      } else {
        return [...prev, catId];
      }
    });
  };

  const filteredCats = cats.filter(cat =>
    cat.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>🐱 고양이 갤러리 🐱</h1>
        <p className="subtitle">The Cat API를 사용한 귀여운 고양이들</p>
      </header>

      <div className="container">
        <div className="controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <button className="refresh-btn" onClick={fetchCats}>
            🔄 새로운 고양이 보기
          </button>
        </div>

        {favorites.length > 0 && (
          <div className="favorites-count">
            ❤️ 즐겨찾기: {favorites.length}개
          </div>
        )}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>귀여운 고양이들을 불러오는 중...</p>
          </div>
        ) : (
          <div className="cat-grid">
            {filteredCats.map((cat) => (
              <CatCard
                key={cat.id}
                cat={cat}
                isFavorite={favorites.includes(cat.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}

        {!loading && filteredCats.length === 0 && (
          <div className="no-results">
            <p>검색 결과가 없습니다 😿</p>
          </div>
        )}

        <CatFacts />
      </div>
    </div>
  );
}

export default App;
