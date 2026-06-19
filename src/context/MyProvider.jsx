import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme","light");
    }
  }, [mode]);
  const data = { mode, setMode };
  return <MyContext value={data}>{children}</MyContext>;
}
