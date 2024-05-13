import React, { createContext, useState, useContext, useEffect } from "react";

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const localData = localStorage.getItem("orders");
    return localData ? JSON.parse(localData) : [];
  });

 // State to track if the component has just mounted
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Skip the first execution of useEffect on initial mount
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      // Alert only if items are added (length increases)
      if (orders.length == 0) {
        alert('Cart is Empty!');
      }
      else{
        alert(`Item added to cart successfully! You now have ${orders.length} items in your cart.`);
      }
    }
  }, [orders]); // This effect runs every time 'orders' changes

  const addOrder = (item) => {
    
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, item];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
    return true; // Indicate successful addition
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

