import React from "react";
import { Link } from 'react-router-dom';
import blogData from './blogData.json'
import './blog.css'

function Blog() {
    blogData.map((a) => console.log(a.title))
    console.log(blogData)
    return (
        <div>

            <ul className="blog-list">
                {blogData.map((article) => (
                    <li key={article.id} className="article-card">
                        <Link to={`/blog/${article.id}`}>
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-author">Author: {article.author}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
