import DATA from "./DATA";
import Home from "./pages/Home";
import CartModal from "./Components/Modal";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import MyNavBar from "./Components/Nav";
import Detail from "./pages/Detail";
import CheckOut from "./pages/CheckOut";
import { useEffect, useState } from "react"
import MyFooter from "./pages/MyFooter";


import { useDispatch } from "react-redux";
import { sideBarActions } from "./Store/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shop-data-3f37a-default-rtdb.firebaseio.com/DATA.json"
      );
      const data = await response.json();

      let arr = [];

      for (let key in data) {
        arr.push(data[key]);
      }

      console.log(arr)
      dispatch(sideBarActions.setDATA(arr));
    };
    fetchData()
  }, [dispatch]);

  return (
    <div style={{display: "block"}}>
      <MyNavBar />
      <CartModal />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/shop" element={<Shop />} />

        <Route path="/shop/:shopId" element={<Detail />} />
        <Route path="/order" element={<CheckOut />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <MyFooter/>
    </div>
  );
}

export default App;
