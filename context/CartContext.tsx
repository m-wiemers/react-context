import { createContext } from "react";

type CartContextType = {
  items: Item[];
  onClear(): void;
};

export const CartContext = createContext<CartContextType>(null);
