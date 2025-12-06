import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LeaderboardProvider } from './context/LeaderboardContext';
import Navigation from './components/Navigation';
import JudgePage from './pages/JudgePage';
import LeaderboardPage from './pages/LeaderboardPage';
import './App.css';

function App() {
  return (
    <LeaderboardProvider>
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<LeaderboardPage />} />
            <Route path="/judge" element={<JudgePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LeaderboardProvider>
  );
}

export default App;
