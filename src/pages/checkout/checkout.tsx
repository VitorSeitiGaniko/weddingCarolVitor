import { useState, useMemo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Header, Footer } from '../../components';
import { useStoreCart } from '../../store/useStoreCart';
import { createPreference } from '../../services/weddingList';
import { scrollToTop } from '../../utils/scroll';
import { PIX_CONFIG } from '../../utils/constants';

type PaymentMethod = 'pix' | 'mercadopago';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useStoreCart();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('pix');
  const [copiedKey, setCopiedKey] = useState(false);
  const [isProcessingMp, setIsProcessingMp] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  const total = useMemo(
    () => Number(cart.reduce((acc, item) => acc + item.unit_price, 0).toFixed(2)),
    [cart],
  );

  const formattedTotal = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleCopyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CONFIG.key);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    } catch {
      // Fallback
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2500);
    }
  };

  const handleConfirmPixPayment = () => {
    clearCart();
    navigate('/wedding-list/success?payment_type=bank_transfer&status=approved');
  };

  const handleProceedMercadoPago = async () => {
    if (isProcessingMp || total <= 0) return;

    try {
      setIsProcessingMp(true);
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

      navigate('/wedding-list/redirect', {
        state: {
          checkoutUrl: mercadoPagoResponse,
          total,
          itemCount: cart.length,
        },
      });
    } catch (error) {
      console.error('Erro ao gerar preferência do Mercado Pago:', error);
      alert('Não foi possível conectar ao Mercado Pago. Você pode utilizar a opção PIX!');
    } finally {
      setIsProcessingMp(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className='min-h-screen flex flex-col bg-cream'>
        <NavLink to='/' aria-label='Ir para a página inicial' className='inline-block'>
          <Header />
        </NavLink>

        <main className='flex-1 max-w-xl mx-auto w-full px-5 py-12 flex flex-col items-center justify-center text-center'>
          <div className='w-full bg-card border border-line rounded-3xl p-8 sm:p-10 shadow-raised'>
            <div className='w-16 h-16 rounded-full bg-sand/60 border border-line flex items-center justify-center text-muted mx-auto mb-4'>
              <ShoppingBagOutlinedIcon sx={{ fontSize: 32 }} />
            </div>
            <h2 className='font-heading text-3xl text-ink font-medium mb-2'>Seu carrinho está vazio</h2>
            <p className='text-body text-sm sm:text-base mb-6'>
              Escolha um presente especial para fazer parte da história de Carol & Vitor.
            </p>
            <NavLink
              to='/wedding-list'
              className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-deep text-cream font-medium text-sm transition-all duration-200'
            >
              Ver Lista de Presentes
            </NavLink>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col bg-cream'>
      <NavLink to='/' aria-label='Ir para a página inicial' className='inline-block'>
        <Header />
      </NavLink>

      <main className='flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 md:py-10'>
        {/* Title Header */}
        <div className='text-center mb-8'>
          <p className='font-sans text-xs font-semibold uppercase tracking-[3px] text-accent mb-2'>
            Finalizar Presente
          </p>
          <h2 className='font-heading text-3xl sm:text-4xl text-ink font-medium tracking-tight'>
            Como você prefere presentear?
          </h2>
          <p className='mt-2 text-sm sm:text-base text-body max-w-md mx-auto'>
            Sua contribuição ajudará Carol & Vitor a começarem esta linda jornada juntos.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start'>
          {/* Left Column: Payment Methods */}
          <div className='lg:col-span-7 flex flex-col gap-4'>
            {/* PIX Option Card - Highlighted */}
            <div
              onClick={() => setSelectedMethod('pix')}
              className={`relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border-2 text-left ${
                selectedMethod === 'pix'
                  ? 'bg-card border-accent shadow-raised ring-2 ring-accent/15'
                  : 'bg-card/70 border-line hover:border-accent/40 hover:bg-card'
              }`}
            >
              {/* Badge Recommended */}
              <div className='absolute -top-3 right-4 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3d7a46] text-white text-[11px] font-semibold tracking-wider uppercase shadow-sm'>
                <FlashOnRoundedIcon sx={{ fontSize: 13 }} />
                <span>Recomendado • Instantâneo</span>
              </div>

              <div className='flex items-start gap-4'>
                {/* Radio Circle */}
                <div className='mt-1'>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedMethod === 'pix' ? 'border-accent bg-accent' : 'border-muted/50 bg-white'
                    }`}
                  >
                    {selectedMethod === 'pix' && <div className='w-2 h-2 rounded-full bg-white' />}
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <div className='w-7 h-7 rounded-lg bg-[#32bcad]/10 flex items-center justify-center text-[#32bcad] font-bold text-xs'>
                      <QrCode2RoundedIcon sx={{ fontSize: 18 }} />
                    </div>
                    <h3 className='font-heading text-2xl font-semibold text-ink'>PIX</h3>
                  </div>

                  <p className='text-xs sm:text-sm text-body leading-relaxed mb-3'>
                    <strong>100% do seu presente</strong> chega direto aos noivos sem descontos ou taxas de
                    operadora de cartão. ❤️
                  </p>

                  <div className='inline-flex items-center gap-2 text-xs font-medium text-[#3d7a46] bg-[#ecf5ea] px-2.5 py-1 rounded-md'>
                    <FavoriteRoundedIcon sx={{ fontSize: 12 }} />
                    <span>Opção preferida para os noivos</span>
                  </div>
                </div>
              </div>

              {/* Collapsible Details for PIX when selected */}
              {selectedMethod === 'pix' && (
                <div className='mt-5 pt-4 border-t border-line/80 space-y-4 animate-fade-in'>
                  {/* Pix Key Display & Copy */}
                  <div className='bg-sand/60 border border-line rounded-xl p-4'>
                    <div className='flex items-center justify-between gap-2 mb-1.5'>
                      <span className='text-xs font-medium uppercase tracking-wider text-muted'>
                        {PIX_CONFIG.keyType}
                      </span>
                      <span className='text-xs text-accent font-medium'>{PIX_CONFIG.receiverName}</span>
                    </div>

                    <div className='flex items-center justify-between gap-2 bg-white rounded-lg p-2.5 border border-line'>
                      <span className='font-mono font-medium text-xs sm:text-sm text-ink break-all select-all'>
                        {PIX_CONFIG.key}
                      </span>
                      <button
                        type='button'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyPixKey();
                        }}
                        className='cursor-pointer flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent hover:bg-accent-deep text-white text-xs font-medium transition-colors duration-150'
                      >
                        {copiedKey ? (
                          <>
                            <CheckRoundedIcon sx={{ fontSize: 15 }} />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <ContentCopyRoundedIcon sx={{ fontSize: 14 }} />
                            <span>Copiar Chave</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Step by step */}
                  <div className='text-xs text-body space-y-1.5 bg-sand/20 rounded-xl p-3 border border-line/50'>
                    <p className='font-medium text-ink'>Como pagar com PIX:</p>
                    <ol className='list-decimal list-inside space-y-1 text-muted'>
                      <li>Abra o aplicativo do seu banco ou carteira digital.</li>
                      <li>
                        Vá em <strong>Pix &gt; Transferir / Pagar</strong> e cole a chave ou e-mail acima.
                      </li>
                      <li>
                        Confirme o valor de <strong>{formattedTotal}</strong> e o destinatário{' '}
                        <strong>{PIX_CONFIG.receiverName}</strong>.
                      </li>
                      <li>Após concluir no seu banco, clique no botão abaixo para nos avisar!</li>
                    </ol>
                  </div>

                  {/* Confirm Button for PIX */}
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConfirmPixPayment();
                    }}
                    className='w-full cursor-pointer inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#3d7a46] hover:bg-[#326639] text-white font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md'
                  >
                    <CheckRoundedIcon sx={{ fontSize: 18 }} />
                    <span>Já realizei o Pix / Confirmar Presente</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mercado Pago Option Card */}
            <div
              onClick={() => setSelectedMethod('mercadopago')}
              className={`relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border-2 text-left ${
                selectedMethod === 'mercadopago'
                  ? 'bg-card border-accent shadow-raised ring-2 ring-accent/15'
                  : 'bg-card/70 border-line hover:border-accent/40 hover:bg-card'
              }`}
            >
              <div className='flex items-start gap-4'>
                {/* Radio Circle */}
                <div className='mt-1'>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedMethod === 'mercadopago'
                        ? 'border-accent bg-accent'
                        : 'border-muted/50 bg-white'
                    }`}
                  >
                    {selectedMethod === 'mercadopago' && <div className='w-2 h-2 rounded-full bg-white' />}
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <div className='w-7 h-7 rounded-lg bg-[#009ee3]/10 flex items-center justify-center text-[#009ee3] font-bold text-xs'>
                      <CreditCardRoundedIcon sx={{ fontSize: 18 }} />
                    </div>
                    <h3 className='font-heading text-2xl font-semibold text-ink'>
                      Cartão de Crédito / Mercado Pago
                    </h3>
                  </div>

                  <p className='text-xs sm:text-sm text-body leading-relaxed mb-1'>
                    Pague com cartão de crédito ou saldo em conta através da plataforma Mercado Pago.
                  </p>
                </div>
              </div>

              {/* Action when Mercado Pago selected */}
              {selectedMethod === 'mercadopago' && (
                <div className='mt-5 pt-4 border-t border-line/80 space-y-3 animate-fade-in'>
                  <div className='flex items-center gap-2 text-xs text-muted bg-sand/40 p-3 rounded-lg border border-line'>
                    <LockOutlinedIcon sx={{ fontSize: 15, color: 'var(--color-accent)' }} />
                    <span>Você será redirecionado para a página segura do Mercado Pago.</span>
                  </div>

                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProceedMercadoPago();
                    }}
                    disabled={isProcessingMp}
                    className='w-full cursor-pointer inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-accent hover:bg-accent-deep text-white font-medium text-sm transition-all duration-200 shadow-soft hover:shadow-md disabled:opacity-75'
                  >
                    <span>{isProcessingMp ? 'Conectando ao Mercado Pago...' : 'Pagar com Mercado Pago'}</span>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className='lg:col-span-5'>
            <div className='bg-card border border-line rounded-2xl p-5 sm:p-6 shadow-soft sticky top-6'>
              <h3 className='font-heading text-2xl font-medium text-ink mb-4 pb-3 border-b border-line flex items-center justify-between'>
                <span>Resumo do Presente</span>
                <span className='text-xs font-sans text-muted font-normal'>
                  {cart.length} {cart.length === 1 ? 'item' : 'itens'}
                </span>
              </h3>

              {/* Items List */}
              <div className='space-y-3 max-h-64 overflow-y-auto pr-1 mb-4'>
                {cart.map((item) => (
                  <div key={item.id} className='flex items-center gap-3 text-sm'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-12 h-12 rounded-lg object-cover bg-sand border border-line flex-shrink-0'
                    />
                    <div className='flex-1 min-w-0'>
                      <p className='font-medium text-ink text-sm truncate'>{item.title}</p>
                      <p className='text-xs text-muted'>
                        {item.unit_price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className='border-t border-line pt-3 mb-4 space-y-2'>
                <div className='flex justify-between items-center text-sm text-body'>
                  <span>Subtotal:</span>
                  <span>{formattedTotal}</span>
                </div>
                <div className='flex justify-between items-center text-sm font-semibold text-ink'>
                  <span>Total:</span>
                  <span className='font-heading text-2xl text-accent'>{formattedTotal}</span>
                </div>
              </div>

              <div className='flex items-center gap-2 text-[11px] text-muted bg-sand/30 p-2.5 rounded-lg border border-line/50'>
                <SecurityOutlinedIcon sx={{ fontSize: 15, color: 'var(--color-accent)' }} />
                <span>Ambiente protegido com criptografia de ponta a ponta.</span>
              </div>

              <div className='mt-4 text-center'>
                <NavLink
                  to='/wedding-list'
                  className='text-xs text-muted hover:text-ink underline transition-colors'
                >
                  Alterar itens da lista
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { Checkout };
