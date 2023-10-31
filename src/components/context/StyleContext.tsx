import { createContext, useContext, useState } from "react";

interface ColorContextType {
  color: string;
  setColor: Function;
  backgroundColor: string;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const ColorProvider = ({ children }: any) => {
  const [color, setColor] = useState("transparent");

  const backgroundColor = color;

  return (
    <ColorContext.Provider value={{ color, setColor, backgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor debe ser utilizado dentro de un ColorProvider");
  }
  return context;
};

export { ColorProvider, ColorContext };
