import React, { useState, useEffect } from 'react';
import './CatFacts.css';

function CatFacts() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const catFacts = [
    "고양이는 하루에 평균 12-16시간을 잠으로 보냅니다.",
    "고양이의 수염은 문을 통과할 수 있는지 측정하는 데 사용됩니다.",
    "고양이는 인간처럼 지문이 있습니다. 단, 코에 있습니다!",
    "고양이는 달리기를 할 때 시속 48km까지 속도를 낼 수 있습니다.",
    "고양이는 뒤로 걸을 수 있는 몇 안 되는 동물 중 하나입니다.",
    "고양이는 약 100가지의 다른 소리를 낼 수 있습니다.",
    "고양이의 뇌는 인간의 뇌와 90% 유사합니다.",
    "고양이는 단맛을 느낄 수 없는 유일한 포유류입니다.",
    "고양이는 땀샘이 발바닥에만 있습니다.",
    "고양이는 우유를 소화하기 어려워합니다. 대부분 유당불내증이 있습니다.",
    "고양이의 청력은 개보다 우수합니다.",
    "고양이는 골골거리는 소리로 자가 치유를 합니다.",
    "고양이의 심장은 분당 110-140회 박동합니다.",
    "고양이는 최대 2미터까지 점프할 수 있습니다.",
    "고양이의 코는 사람의 지문처럼 고유합니다."
  ];

  const fetchNewFact = () => {
    setLoading(true);
    setTimeout(() => {
      const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
      setFact(randomFact);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchNewFact();
  }, []);

  return (
    <div className="cat-facts">
      <h2>🐾 고양이 재미있는 사실</h2>
      <div className="fact-container">
        {loading ? (
          <div className="fact-loading">
            <div className="spinner-small"></div>
          </div>
        ) : (
          <p className="fact-text">{fact}</p>
        )}
      </div>
      <button className="fact-btn" onClick={fetchNewFact}>
        새로운 사실 보기
      </button>
    </div>
  );
}

export default CatFacts;
