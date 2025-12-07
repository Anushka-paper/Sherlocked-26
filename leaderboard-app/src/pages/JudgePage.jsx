import React, { useState } from 'react';
import './JudgePage.css';
import { useLeaderboard } from '../context/LeaderboardContext';

const JudgePage = () => {
  const { teams, addTeam, updateTeam, deleteTeam } = useLeaderboard();
  const [teamName, setTeamName] = useState('');
  const [score, setScore] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editScore, setEditScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teamName.trim() && score.trim()) {
      addTeam(teamName, score);
      setTeamName('');
      setScore('');
    }
  };

  const handleEdit = (team) => {
    setEditingId(team.id);
    setEditName(team.name);
    setEditScore(team.score.toString());
  };

  const handleSaveEdit = (id) => {
    if (editName.trim() && editScore.trim()) {
      updateTeam(id, editName, editScore);
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="judge-page">
      <div className="judge-container">
        <h1>⚖️ Judge Panel</h1>
        <p className="subtitle">Enter team scores to update the leaderboard</p>

        <form onSubmit={handleSubmit} className="score-form">
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              id="teamName"
              type="text"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="score">Score</label>
            <input
              id="score"
              type="number"
              placeholder="Enter score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              step="0.1"
              className="input-field"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Team
          </button>
        </form>

        <div className="teams-list">
          <h2>Teams ({teams.length})</h2>
          {teams.length === 0 ? (
            <p className="empty-message">No teams added yet. Add your first team above!</p>
          ) : (
            <div className="teams-table">
              {teams.map((team) => (
                <div key={team.id} className="team-row">
                  {editingId === team.id ? (
                    <>
                      <div className="edit-inputs">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="input-field-small"
                        />
                        <input
                          type="number"
                          value={editScore}
                          onChange={(e) => setEditScore(e.target.value)}
                          step="0.1"
                          className="input-field-small"
                        />
                      </div>
                      <div className="edit-actions">
                        <button
                          className="btn btn-success"
                          onClick={() => handleSaveEdit(team.id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="team-info">
                        <span className="team-name">{team.name}</span>
                        <span className="team-score">{team.score}</span>
                      </div>
                      <div className="team-actions">
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(team)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => deleteTeam(team.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JudgePage;
