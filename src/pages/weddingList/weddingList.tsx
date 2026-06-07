import { ProductCard } from './components/productCard';
import { listaPresentesCasamento } from '../../models/weddingList';
import { useState } from 'react';

import { Badge, Box, Button, Divider, Drawer, IconButton } from '@mui/material';

const WeddingList = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        aria-label='Abrir carrinho'
      >
        <Badge color='error'>iconCart</Badge>
      </IconButton>

      <section className='mb-14'>
        <div className='mx-auto flex items-center justify-center gap-3.5 text-muted'>
          <span className='h-px w-14 bg-line' />
          <span className='whitespace-nowrap font-sans text-xs uppercase tracking-[3px]'>
            Lista de Presentes
          </span>
          <span className='h-px w-14 bg-line' />
        </div>

        <p className='mx-auto mt-7 max-w-[560px] text-pretty text-[17px] leading-relaxed text-body'>
          Sua presenca ja e o nosso maior presente. Mas se quiser fazer parte do comeco da nossa nova vida
          juntos, escolha com carinho um mimo para o nosso lar.
        </p>
      </section>

      <section className='px-6 pt-6 pb-2 text-center'>
        <h2 className='font-heading font-medium tracking-tight text-ink text-[clamp(30px,5vw,42px)]'>
          Escolha um presente
        </h2>
        <p className='mt-2.5 text-[15px] text-muted'>
          Cada item ajuda a construir os nossos primeiros momentos a dois.
        </p>
      </section>

      {/* ---------- Grid: 1 / 2 / 3 / 4 colunas ---------- */}
      <section
        aria-label='Lista de presentes'
        className='grid grid-cols-1 gap-5 px-5 pb-14 pt-7 sm:grid-cols-2 sm:gap-5 sm:px-7 lg:grid-cols-3 lg:gap-6 lg:px-7 xl:grid-cols-4 xl:gap-7 xl:px-8 xl:pb-20'
      >
        {listaPresentesCasamento.map(
          (product) =>
            product.available && (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ),
        )}
      </section>

      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Box sx={{ width: { xs: 320, sm: 380 }, p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <h3 style={{ fontWeight: 600 }}>Carrinho</h3>

            <IconButton onClick={() => setIsCartOpen(false)}>x</IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <h3 style={{ fontWeight: 600 }}>test</h3>
                <h3 style={{ color: 'text.secondary' }}>Quantidade: 1</h3>
                <h3>R$ 180,00</h3>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <h3 style={{ fontWeight: 700, marginBottom: '16px' }}>Total: R$ 180,00</h3>

            <Button fullWidth variant='contained'>
              Finalizar
            </Button>
          </>
        </Box>
      </Drawer>
    </main>
  );
};

export { WeddingList };
