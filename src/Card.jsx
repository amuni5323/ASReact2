// Card.jsx
import React from 'react';
import image1 from './assets/card-image.jpeg';
import image2 from './assets/card1-image.jpeg';
import image3 from './assets/card2-image.jpeg';
import image4 from './assets/card3-image.jpeg';

function Card() {
  // Array of card data
  const cardData = [
    { id: 1, title: 'Card 1', description: 'This is the description for card 1.', image: image1 },
    { id: 2, title: 'Card 2', description: 'This is the description for card 2.', image: image2 },
    { id: 3, title: 'Card 3', description: 'This is the description for card 3.', image: image3 },
    { id: 4, title: 'Card 4', description: 'This is the description for card 4.', image: image4 },
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;