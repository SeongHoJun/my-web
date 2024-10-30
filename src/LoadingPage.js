// src/LoadingPage.js
import React from 'react';
import './style2.css'; // 로딩 페이지의 스타일을 import

function LoadingPage() {
  return (
    <div className="loading-container">
      <h1>❗ 반영한 과목에 따라 과목을 추천중이에요 ❗</h1>
      <div className="loading-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h2>❗ 잠시만 기다려주세요 ❗</h2>
    </div>
  );
}

export default LoadingPage;
