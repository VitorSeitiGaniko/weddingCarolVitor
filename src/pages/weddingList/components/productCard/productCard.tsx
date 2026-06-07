import { useState } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Extrai um possivel emoji no inicio do nome para usar como fallback visual
  const emojiMatch = name.match(/^\p{Emoji}/u);
  const fallbackEmoji = emojiMatch ? emojiMatch[0] : '🎁';

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-card text-left shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-raised">
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {imgFailed ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--color-sand),#fff)] text-5xl"
          >
            {fallbackEmoji}
          </div>
        ) : (
          <img
            src={image || '/placeholder.svg'}
            alt={name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-5">
        <h3 className="font-heading text-[23px] leading-tight tracking-tight text-ink">
          {name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-body">{description}</p>

        <div className="mt-3.5 flex items-center justify-between gap-3">
          <div className="flex flex-col leading-tight">
            <span className="mb-0.5 text-[10px] uppercase tracking-[2px] text-muted">
              Valor
            </span>
            <span className="font-heading text-2xl font-semibold text-ink">
              {formattedPrice}
            </span>
          </div>

          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-full bg-accent px-[18px] py-2.5 font-sans text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-accent-deep active:scale-95"
          >
            Presentear
          </button>
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
