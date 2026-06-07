import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { WeddingList } from './pages/weddingList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <WeddingList />
    </>
  </StrictMode>,
);
