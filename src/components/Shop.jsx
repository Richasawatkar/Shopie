// Updated Shop component
import React from 'react';
import list from "../list";
import Card from './Card';
import '../styles/card.css';

const Shop = ({handleClick}) => {
    return (
        <section className="card-container">
            {list.map((item) => (
                <Card item={item} key={item.id} handleClick={handleClick}/>
            ))}
        </section>
    );
}

export default Shop;
