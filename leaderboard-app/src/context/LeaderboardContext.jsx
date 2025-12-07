import React, { createContext, useState, useContext } from 'react';

const LeaderboardContext = createContext();

export const LeaderboardProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  const addTeam = (teamName, score) => {
    const newTeam = {
      id: Date.now(),
      name: teamName,
      score: parseFloat(score)
    };
    setTeams([...teams, newTeam]);
  };

  const updateTeam = (id, teamName, score) => {
    setTeams(teams.map(team =>
      team.id === id
        ? { ...team, name: teamName, score: parseFloat(score) }
        : team
    ));
  };

  const deleteTeam = (id) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  const getSortedTeams = () => {
    return [...teams].sort((a, b) => b.score - a.score);
  };

  return (
    <LeaderboardContext.Provider
      value={{ teams, addTeam, updateTeam, deleteTeam, getSortedTeams }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export const useLeaderboard = () => {
  const context = useContext(LeaderboardContext);
  if (!context) {
    throw new Error('useLeaderboard must be used within LeaderboardProvider');
  }
  return context;
};
