import { Box, Button, Divider, Drawer, IconButton } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { getPaymentStatus } from '../../../../services/weddingList';

import { useStoreCart } from '../../../../store/useStoreCart';
import { useMemo } from 'react';
import { createPreference } from '../../../../services/weddingList';
import { openLinkInNewTab } from '../../../../utils/openLink';

interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ isCartOpen, setIsCartOpen }: CartProps) => {
  const { cart, removeFromCart } = useStoreCart();

  const total = useMemo(
    () => Number(cart.reduce((acc, item) => acc + item.unit_price, 0).toFixed(2)),
    [cart],
  );

  const handleSubmitOrder = async () => {
    //TODO: Implement order submission to Mercado Pago
    //createPreference({ items: cart });
    const mercadoPagoResponse = await createPreference({
      items: [
        {
          title: 'Presente de Casamento - Vitor e Carol',
          quantity: 1,
          unit_price: total,
          currency_id: 'BRL',
        },
      ],
    });

    openLinkInNewTab(mercadoPagoResponse);
  };

  const getPaymentStatusTest = async (paymentId: string) => {
    const response = await getPaymentStatus(paymentId);
    console.log('Payment Status:', response);
  };

  return (
    <Drawer
      anchor='right'
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      slotProps={{ paper: { component: 'section', 'aria-labelledby': 'cart-heading' } as object }}
    >
      <Box sx={{ width: { xs: 320, sm: 380 }, p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <h3 id='cart-heading' style={{ fontWeight: 600 }}>
            Carrinho
          </h3>

          <IconButton onClick={() => setIsCartOpen(false)} aria-label='Fechar carrinho'>
            <CloseIcon />
          </IconButton>
        </Box>

        {cart.length === 0 ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <RemoveShoppingCartIcon aria-hidden='true' sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
            <p style={{ fontSize: '18px', color: '#666' }}>Seu carrinho está vazio</p>
          </Box>
        ) : (
          <>
            <Divider sx={{ mb: 2 }} />

            <>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {cart.map((item) => (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }} key={item.id}>
                    <Box>
                      <p style={{ fontWeight: 600 }}>{item.title}</p>
                      <p>R$ {item.unit_price.toFixed(2)}</p>
                    </Box>

                    <IconButton
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remover ${item.title} do carrinho`}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>Total: R$ {total}</p>

              <Button onClick={handleSubmitOrder} fullWidth variant='contained'>
                Finalizar
              </Button>

              <Button
                onClick={() => getPaymentStatusTest('3449229614-e075e32f-4058-451c-8c34-6c3efb958550')}
                fullWidth
                variant='contained'
              >
                Status
              </Button>
            </>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export { Cart };
