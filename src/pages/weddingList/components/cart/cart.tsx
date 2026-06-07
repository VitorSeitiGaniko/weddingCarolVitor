import { Box, Button, Divider, Drawer, IconButton } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

import { useStoreCart } from '../../../../store/useStoreCart';
import { useMemo } from 'react';
import { createPreference } from '../../../../services/weddingList';

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

  const handleSubmitOrder = () => {
    //createPreference({ items: cart });
    createPreference({
      items: [
        {
          title: 'Presente de Casamento - carol panela',
          quantity: 1,
          unit_price: 300, // valor em BRL
          currency_id: 'BRL',
        },
      ],
    });
  };

  return (
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

          <IconButton onClick={() => setIsCartOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {cart.length === 0 ? (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <RemoveShoppingCartIcon sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
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
                      <h3 style={{ fontWeight: 600 }}>{item.title}</h3>
                      <h3>R$ {item.unit_price.toFixed(2)}</h3>
                    </Box>

                    <IconButton onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              <h3 style={{ fontWeight: 700, marginBottom: '16px' }}>Total: R$ {total}</h3>

              <Button onClick={handleSubmitOrder} fullWidth variant='contained'>
                Finalizar
              </Button>
            </>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export { Cart };
