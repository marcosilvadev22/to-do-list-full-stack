//import Home from "./components/Home";
import { useState } from "react";
import Login from "./components/initialPage/Login";
import Home from "./components/Home";

export default function App() {
  const [isLoggedIn, setInLoggedIn] = useState(false);
  return (
    <>
    {!isLoggedIn ? (
      <Login onLogin={() => {
        setInLoggedIn(true);
      }} 
      />
    ): <Home />}
    </>

  );
}