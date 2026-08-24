import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, WeddingList } from './pages';

function AppContent() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wedding-list' element={<WeddingList />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename='/'>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
