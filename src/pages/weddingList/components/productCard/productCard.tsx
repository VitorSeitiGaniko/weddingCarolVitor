import React, { useState } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Extrai um possível emoji no início do nome para usar como fallback visual
  const emojiMatch = name.match(/^\p{Emoji}/u);
  const fallbackEmoji = emojiMatch ? emojiMatch[0] : '🎁';

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="product-card">
      <div className="product-card__media">
        {imgFailed ? (
          <div className="product-card__fallback" aria-hidden="true">
            {fallbackEmoji}
          </div>
        ) : (
          <img
            src={image || '/placeholder.svg'}
            alt={name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>

        <div className="product-card__footer">
          <div className="product-card__price">
            <span className="product-card__price-label">Valor</span>
            <span className="product-card__price-value">{formattedPrice}</span>
          </div>
          <button type="button" className="product-card__btn">
            Presentear
          </button>
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
