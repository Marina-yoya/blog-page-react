import React from 'react';
import { useParams } from 'react-router-dom'; 
import './article.css'
import blogData from './blogData.json';

function Article() {
  const { id } = useParams(); 

  const articleId = Number(id); 
  const article = blogData.find((article) => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='article-container'>
    <div className="article-card-single"> 
    <h1 className="article-title">{article.title}</h1>
    <p className="article-author">Author: {article.author}</p>
    <p className="article-date">Date: {article.date}</p>
    <p className="article-content">{article.content}</p>
  </div>
  </div>
  );
}

export default Article;
