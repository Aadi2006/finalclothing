import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navgation.component";
import { Fragment } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Fragment><h1>Hello</h1><p>Hi</p></Fragment>} />

      </Route>
    </Routes>
  );
};

export default App;
