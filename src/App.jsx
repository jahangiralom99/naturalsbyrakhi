import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const ItemContext = createContext([]);

function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <ItemContext.Provider value={}>
      <Outlet />
     </ItemContext.Provider>
    </div>
  );
}

export default App;
