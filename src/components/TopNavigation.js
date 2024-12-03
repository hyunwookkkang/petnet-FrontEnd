import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 가져오기
import { CiLogin } from "react-icons/ci"; // 로그아웃 아이콘
import "../styles/Navigation.css"; // 기존 네비게이션css
import { SlActionUndo } from "react-icons/sl";

function TopNavigation() {
  const navigate = useNavigate();

  // 뒤로가기
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  // 메인 페이지로 이동
  const handleNavigateToMain = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  // 로그아웃 처리 함수 (임시)
  const handleLogout = () => {
    console.log("로그아웃"); // 로그아웃 디버그
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동 (필요에 따라 수정)
  };

  return (
    <header className="top-navigation">
      {/* 뒤로가기 버튼 */}
      <button className="nav-back-btn" onClick={handleGoBack}>
      <SlActionUndo />
      </button>

      {/* 펫 넷 로고 */}
      <h1
        className="app-title"
        onClick={handleNavigateToMain}
      >
         {console.log("Rendering app-title")} {/* F12 디버깅용 로그 */}
        펫 넷
      </h1>

      {/* 로그아웃 버튼 */}
      <div className="notification-icon" onClick={handleLogout}>
        <CiLogin size={24} />
      </div>
    </header>
  );
}

export default TopNavigation;
