import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export const ItemContext = createContext([]);

function App() {
  const { items } = useLoaderData();

  return (
    <div className="bg-[#f5f5f5]">
      <ItemContext.Provider value={items}>
        <Outlet />
      </ItemContext.Provider>
    </div>
  );
}

export default App;
