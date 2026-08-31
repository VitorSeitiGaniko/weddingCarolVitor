import { useStoreCart } from '../../../../store/useStoreCart';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  unit_price: number;
  quantity: number;
  currency_id: 'BRL';
  available: boolean;
}

const ProductCard = ({
  id,
  image,
  title,
  description,
  unit_price,
  quantity,
  currency_id,
  available,
}: ProductCardProps) => {
  const { addToCart } = useStoreCart();

  const formattedPrice = unit_price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: currency_id,
  });

  const handleAddCart = () => {
    addToCart({ id, image, title, description, unit_price, quantity, currency_id, available });
    console.log('CART ==> ', useStoreCart.getState().cart);
  };

  return (
    <article
      aria-labelledby={`product-title-${id}`}
      className='group flex flex-col overflow-hidden rounded-[18px] border border-line bg-card text-left shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-raised'
    >
      <div className='relative aspect-[4/3] overflow-hidden bg-sand'>
        <img
          src={image}
          alt={title}
          aria-hidden='true'
          loading='lazy'
          className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
        />
      </div>

      <div className='flex flex-1 flex-col gap-2 px-5 pb-5 pt-5'>
        <h3
          id={`product-title-${id}`}
          className='font-heading text-[23px] leading-tight tracking-tight text-ink'
        >
          {title}
        </h3>
        <p className='flex-1 text-sm leading-relaxed text-body'>{description}</p>

        <div className='mt-3.5 flex items-center justify-between gap-3'>
          <div className='flex flex-col leading-tight'>
            <span className='mb-0.5 text-[12px] uppercase tracking-[2px] text-muted'>Valor</span>
            <span className='font-heading text-2xl font-semibold text-ink'>{formattedPrice}</span>
          </div>

          <button
            onClick={handleAddCart}
            type='button'
            aria-label={`Presentear com ${title}`}
            className='cursor-pointer whitespace-nowrap rounded-full bg-accent px-[18px] py-2.5 font-sans text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-accent-deep active:scale-95'
          >
            Presentear
          </button>
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
