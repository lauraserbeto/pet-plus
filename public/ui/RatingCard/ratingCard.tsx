import React from 'react';
import styled from 'styled-components';

interface RatingCardProps {
  rating: number;  
  timestamp: string;  
  description: string; 
  author: string;     
}

const RatingCard: React.FC<RatingCardProps> = ({ rating, timestamp, description, author }) => {
  const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <StyledWrapper>
      <div className="card">
        <div className="stars">
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} />
          ))}
        </div>
        <div className="infos">
          <p className="date-time">
            {timestamp}
          </p>
          <p className="description">
            {description}
          </p>
        </div>
        <div className="author">
          — {author}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 1);
    padding: 20px;
    max-width: 320px;
    border-radius: 8px; /* Adicionado um leve arredondamento */
    box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Adicionada uma sombra para destaque */
    height: 100%; /* Garante que todos os cards tenham a mesma altura em um grid */
  }

  .stars {
    display: flex;
    grid-gap: 0.125rem;
    gap: 0.125rem;
    color: rgb(253, 224, 71);
  }

  .star {
    height: 1.25rem;
    width: 1.25rem;
  }

  .infos {
    margin-top: 1rem;
    flex-grow: 1;
  }

  .date-time {
    color: #4A90E2; 
    font-size: 12px;
    font-weight: 600;
  }

  .description {
    margin-top: 0.4rem;
    line-height: 1.625;
    color: rgba(107, 114, 128, 1);
  }

  .author {
    margin-top: 1.3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(107, 114, 128, 1);
    font-style: italic; 
  }
`;

export default RatingCard;