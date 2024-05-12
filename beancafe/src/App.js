import React from 'react';
import { OrderProvider } from './context/OrderContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderCoffe from './pages/OrderCoffe';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/OrderCoffe" element={<OrderCoffe />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
