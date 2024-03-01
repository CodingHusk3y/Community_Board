// ResourceCard.js
import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="resource-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="button" target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
}

export default ResourceCard;
