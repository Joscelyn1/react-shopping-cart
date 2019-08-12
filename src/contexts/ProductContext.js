import { createContext } from "react";

const ProductContext = createContext();

<ProductContext.Provider value={dataToPassDown}>
  <NestedComponent />
  <OtherNestedComponent />
</ProductContext.Provider>;
