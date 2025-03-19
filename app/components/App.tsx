import React, { useState, useEffect } from 'react';


function App() {
  const [isStudying, setIsStudying] = useState(false);
  const [studyTime, setStudyTime] = useState(0);
  const [rank, setRank] = useState('Beginner');

  useEffect(() => {
    if (isStudying) {
      const interval = setInterval(() => {
        setStudyTime((prev) => prev + 1);
      }, 1000); // Increase time every second
      return () => clearInterval(interval);
    }
  }, [isStudying]);

  useEffect(() => {
    if (studyTime > 3600) setRank('Expert'); // Example ranking logic
    else if (studyTime > 1800) setRank('Intermediate');
  }, [studyTime]);

  useEffect(() => {
    // Fetch initial study time from the database
    window.electron.getStudyTime().then((time) => {
      setStudyTime(time);
    });
  }, []);

  useEffect(() => {
    // Save study time to the database whenever it changes
    window.electron.saveStudyTime(studyTime);
  }, [studyTime]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Study Tracker</h1>
      <p>Time Studied: {Math.floor(studyTime / 60)} min</p>
      <p>Rank: {rank}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsStudying(!isStudying)}
      >
        {isStudying ? 'Stop Studying' : 'Start Studying'}
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => window.electron.openStats()}
      >
        View Stats
      </button>
    </div>
  );
}

export default App;
