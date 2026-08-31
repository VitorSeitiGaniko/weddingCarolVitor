import { NavLink } from 'react-router-dom';

import { ProductCard } from './components/productCard';
import { listaPresentesCasamento } from '../../models/weddingList';
import { useState, useEffect } from 'react';

import { Badge, IconButton } from '@mui/material';
import { Header } from '../../components';
import { Cart } from './components/cart';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStoreCart } from '../../store/useStoreCart';
import { scrollToTop } from '../../utils/scroll';

const WeddingList = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useStoreCart();

  useEffect(() => {
    scrollToTop();
  }, []);

  const cartAriaLabel =
    cart.length > 0
      ? `Abrir carrinho, ${cart.length} ${cart.length === 1 ? 'item' : 'itens'}`
      : 'Abrir carrinho';

  return (
    <main className='flex flex-col'>
      <IconButton
        onClick={() => setIsCartOpen(true)}
        sx={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1200,
          backgroundColor: '#fff',
          boxShadow: 3,
          '&:hover': { backgroundColor: '#f8f8f8' },
        }}
        aria-label={cartAriaLabel}
      >
        <Badge badgeContent={cart.length} color='error' aria-hidden='true'>
          <ShoppingCartIcon aria-hidden='true' style={{ color: '#3d4c2f' }} />
        </Badge>
      </IconButton>

      <NavLink to={'/'} aria-label='Ir para a página inicial' className='inline-block'>
        <Header />
      </NavLink>

      <article aria-labelledby='wedding-gift-list' className='mb-14'>
        <div className='mx-auto flex items-center justify-center gap-3.5 text-muted'>
          <span aria-hidden='true' className='h-px w-14 bg-line' />
          <h2 id='wedding-gift-list' className='whitespace-nowrap font-sans text-xs uppercase tracking-[3px]'>
            Lista de Presentes{' '}
          </h2>
          <span aria-hidden='true' className='h-px w-14 bg-line' />
        </div>

        <p className='mx-auto mt-7 max-w-[560px] text-center text-pretty text-[17px] leading-relaxed text-body'>
          Sua presença já é o nosso maior presente. Mas se quiser fazer parte do começo da nossa nova vida
          juntos, escolha com carinho um mimo para o nosso lar.
        </p>
      </article>

      <article aria-labelledby='choose-a-gift' className='px-6 pt-6 pb-2 text-center'>
        <h2
          id='choose-a-gift'
          className='font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,42px)]'
        >
          Escolha um presente
        </h2>
        <p className='mt-2.5 text-[15px] text-muted'>
          Cada item ajuda a construir os nossos primeiros momentos a dois.
        </p>

        <section
          aria-label='Lista de presentes'
          className='grid grid-cols-1 gap-5 px-5 pb-14 pt-7 sm:grid-cols-2 sm:gap-5 sm:px-7 lg:grid-cols-3 lg:gap-6 lg:px-7 xl:grid-cols-4 xl:gap-7 xl:px-8 xl:pb-20'
        >
          {listaPresentesCasamento.map(
            (product) =>
              product.available && (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  unit_price={product.unit_price}
                  quantity={1}
                  currency_id={'BRL'}
                  available={product.available}
                />
              ),
          )}
        </section>
      </article>

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </main>
  );
};

export { WeddingList };
