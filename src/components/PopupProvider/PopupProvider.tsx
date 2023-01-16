"use client";

import { createContext, useContext, useState, useEffect } from "react";

import Popup from "./Popup";

interface PopupContextProps {
  popup: (data: { status: boolean; message: string }) => void;
}

const PopupContext = createContext<PopupContextProps>({
  popup: (data: { status: boolean; message: string }) => {},
});

export const PopupContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupData, setPopupData] = useState({ status: false, message: "" });

  function popup(data: { status: boolean; message: string }) {
    setPopupData(data);
    setIsPopup(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopup(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [popupData]);

  return (
    <PopupContext.Provider value={{ popup }}>
      <Popup popupData={popupData} isPopup={isPopup} setIsPopup={setIsPopup} />
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext);
