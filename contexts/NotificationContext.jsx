import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const showSuccess = (msg) => toast.success(msg);
  const showError = (msg) => toast.error(msg);
  const showInfo = (msg) => toast(msg);

  return (
    <NotificationContext.Provider value={{ showSuccess, showError, showInfo }}>
      {children}
    </NotificationContext.Provider>
  );
};
