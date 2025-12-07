# Leaderboard Website

A modern React-based leaderboard application with two main pages: a Judge Panel for entering team scores and a Leaderboard page for displaying ranked teams.

## Features

- ✨ **Judge Panel** - Add, edit, and delete team scores
- 🏆 **Live Leaderboard** - Real-time ranking display
- 📊 **Statistics** - View total teams, highest score, and average score
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Fast Performance** - Built with React and Vite

## Project Structure

```
leaderboard-app/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── JudgePage.jsx
│   │   ├── JudgePage.css
│   │   ├── LeaderboardPage.jsx
│   │   └── LeaderboardPage.css
│   ├── context/
│   │   └── LeaderboardContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Installation

1. Navigate to the project directory:
```bash
cd leaderboard-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

### Judge Panel (`/judge`)
1. Enter the team name in the "Team Name" field
2. Enter the score in the "Score" field
3. Click "Add Team" to add the team to the leaderboard
4. Edit existing teams by clicking the "Edit" button
5. Delete teams by clicking the "Delete" button

### Leaderboard Page (`/`)
- View all teams sorted by score in descending order
- See medal emojis (🥇🥈🥉) for top 3 positions
- View statistics including:
  - Total number of teams
  - Highest score
  - Average score

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## Features Explained

### State Management
- Uses React Context API for global state management
- Scores are stored in memory and persist during the session
- All changes update the leaderboard in real-time

### Context Methods
- `addTeam(teamName, score)` - Add a new team
- `updateTeam(id, teamName, score)` - Update existing team
- `deleteTeam(id)` - Remove a team
- `getSortedTeams()` - Get teams sorted by score (highest first)

## Customization

You can customize the app by:
- Changing colors in the CSS files
- Modifying the gradient in `index.css`
- Adjusting the form layout in `JudgePage.jsx`
- Adding more statistics to the leaderboard

## Notes

- The leaderboard data is stored in memory, so it will reset if you refresh the page
- For persistence, you can add local storage or connect to a backend database
- Scores can be decimal values for more granular scoring

## License

This project is open source and available for modification and use.
