import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import ContextProvider from "./store/contextProvider";

function App() {
  return (
    <ContextProvider>
      <Header/>
      <Meals/>
    </ContextProvider>
      
  );
}

export default App;
