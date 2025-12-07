import React from 'react';
import './LeaderboardPage.css';
import { useLeaderboard } from '../context/LeaderboardContext';

const LeaderboardPage = () => {
  const { getSortedTeams } = useLeaderboard();
  const sortedTeams = getSortedTeams();

  const getMedalEmoji = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '⭐';
  };

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <h1>🏆 Leaderboard</h1>
        <p className="subtitle">Live Rankings</p>

        {sortedTeams.length === 0 ? (
          <div className="empty-state">
            <p className="empty-icon">📊</p>
            <p className="empty-message">No teams on the leaderboard yet.</p>
            <p className="empty-hint">Visit the Judge Panel to add teams and scores.</p>
          </div>
        ) : (
          <div className="leaderboard-wrapper">
            <div className="leaderboard">
              <div className="leaderboard-header">
                <div className="rank">Rank</div>
                <div className="team-name">Team Name</div>
                <div className="score">Score</div>
              </div>

              {sortedTeams.map((team, index) => (
                <div key={team.id} className={`leaderboard-row rank-${index + 1}`}>
                  <div className="rank">
                    <span className="medal">{getMedalEmoji(index)}</span>
                    <span className="rank-number">#{index + 1}</span>
                  </div>
                  <div className="team-name">{team.name}</div>
                  <div className="score">{team.score}</div>
                </div>
              ))}
            </div>

            <div className="stats-section">
              <div className="stat-card">
                <p className="stat-label">Total Teams</p>
                <p className="stat-value">{sortedTeams.length}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Highest Score</p>
                <p className="stat-value">{sortedTeams[0]?.score || 0}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Average Score</p>
                <p className="stat-value">
                  {sortedTeams.length > 0
                    ? (sortedTeams.reduce((sum, t) => sum + t.score, 0) / sortedTeams.length).toFixed(1)
                    : 0}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
