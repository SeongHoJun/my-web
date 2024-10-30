// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import LoadingPage from './LoadingPage';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'public/symbol-mark.jpg'})`, // 배경 이미지 경로
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loading" element={<LoadingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
