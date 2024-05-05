import React, { useState } from 'react';
import './newsComponent.css';
import articlesData from './articlesData';

const NewsComponent = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleLearnMore = (article) => {
    setSelectedArticle(article);
  };

  const handleClose = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="news-container">
      <div className="news-articles">
        {articlesData.map((article, index) => (
          <div key={index} className="news-item">
            <h2 className="card-header" >{article.title}</h2>
            <p>{article.description}</p>
            <button className="apply-button" onClick={() => handleLearnMore(article)}>Learn More</button>
          </div>
        ))}
      </div>
      {selectedArticle && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>×</span>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.fullArticle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsComponent;
