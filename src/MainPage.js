// src/MainPage.js
import React from 'react';
import './style.css'; // 키워드 선택 페이지 스타일을 import

function MainPage() {
  const goToLoadingPage = () => {
    window.location.href = "/loading";
  };

  return (
    <div className="container">
      <header>
        <img src={`${process.env.PUBLIC_URL}/keimyung-logo.png`} alt="Keimyung University Logo" className="logo" />
        <h1>수강 추천</h1>
      </header>
      <main>
        <h2>원하는 항목 키워드를 선택해주세요!</h2>
        <div className="keyword-container">
          <button className="keyword-button">공과대학</button>
          <button className="keyword-button">의과대학</button>
          <button className="keyword-button">음악공연예술대학</button>
          <button className="keyword-button">글로벌비즈니스</button>
          <button className="keyword-button">문화예술대학</button>
          <button className="keyword-button">인문국제학</button>
          <button className="keyword-button">간호대학</button>
          <button className="keyword-button">Adams College</button>
          <button className="keyword-button">철학대학</button>
          <button className="keyword-button">과학기술</button>
        </div>
        <div className="time-options">
          <button className="time-button">주간</button>
          <button className="time-button">야간</button>
          <button className="time-button">1교시</button>
        </div>
        <button onClick={goToLoadingPage} className="select-button">키워드 선택</button>
      </main>
    </div>
  );
}

export default MainPage;
