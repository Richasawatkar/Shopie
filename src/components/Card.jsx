import React from 'react';
import '../styles/card.css';

const Card = ({ item, handleClick }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="card-details">
                <p className="card-title">{item.title}</p>
                <p className="card-category">{item.category}</p>
                <p className="card-price">Cost: ${item.price}</p>
                <button className="card-button" onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;
