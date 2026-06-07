import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home, WeddingList } from './pages';
import { Header, Footer } from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <Header />
      <WeddingList />
      <Footer />
    </>
  </StrictMode>,
);
