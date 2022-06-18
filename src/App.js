import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navgation.component";
import SignIn from "./routes/sign-in/sign-in.components";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop</h1>} />
        <Route path="sign-in" element={<SignIn />} />

      </Route>
    </Routes>
  );
};

export default App;
