import React, { createContext, useState, useContext, useEffect } from "react";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const localData = localStorage.getItem("orders");
    return localData ? JSON.parse(localData) : [];
  });

  const addOrder = (item) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, item];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  const clearOrders = () => {
    setOrders([]); // Clear the order state
    localStorage.removeItem("orders"); // Clear orders from local storage
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
