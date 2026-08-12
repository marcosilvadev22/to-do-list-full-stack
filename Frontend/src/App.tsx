import Home from "./components/initialPage/Home";
//import Home from "./components/Home";

export default function App() {
  // const [isLoggedIn, setInLoggedIn] = useState(false);
  return (
    <>
    <Home />
    {/* {!isLoggedIn ? (
      <Login onLogin={() => {
        setInLoggedIn(true);
      }} 
      />
    ): <Home />} */}
    </>

  );
}