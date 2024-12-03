import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

/*
  본인 메인페이지 주석 풀어서 사용하세요.
  예시 ---> import JS이름 from "./pages -> 폴더1/shop -> 폴더2/ShopMain -> js파일";
*/

// import CommunityMain from "./pages/community/CommunityMain";   //Community
// import ShopMain from "./pages/shop/ShopMain";                  //Shop
// import PointShopMain from "./pages/pointshop/PointShopMain";        //Shop
// import ShopPage from "./pages/ShopMain";                       //Shop
import MapMain from "./pages/map/MapMain";
import MyMainPage from "./components/MyMainPage";
import AdminMainPage from "./components/AdminMainPage";
import MapTest from "./pages/map/MapTest";

function App() {
  //const userRole = 1; // 관리자: 0 또는 1, 일반 사용자: 2

  return (
    
    <Router>
      {/*Nav -> Route위에 고정*/}
      <Navigation /> 
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/community-main" element={<CommunityMain />} /> */}
          {/* <Route path="/shop-main" element={<ShopMain />} /> */}
          <Route path="/map-main" element={<MapMain />} />
          <Route path="/my" element={<MyMainPage />} />
          <Route path="/admin" element={<AdminMainPage />} />

          {/* test */}
          <Route path="/test-map" element={<MapTest />} />
        </Routes>
    </Router>
  );
}

export default App;
