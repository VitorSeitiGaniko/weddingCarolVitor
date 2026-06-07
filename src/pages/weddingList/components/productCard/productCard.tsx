import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>R$ {price.toFixed(2)}</span>
    </div>
  );
};

export { ProductCard };
