
import React, { useState } from 'react';
import './App.css';

function App() {
  const [moodValue, setMoodValue] = useState(5);
  const [note, setNote] = useState('');
  const [logs, setLogs] = useState([]);

  const handleSave = () => {
    if (note.trim() === '' && moodValue === null) return;
    const entry = { moodValue, note, timestamp: new Date().toISOString() };
    setLogs([entry, ...logs]);
    setNote('');
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-6">InnerCommand</h1>
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <input
        type="range"
        min="0"
        max="10"
        value={moodValue}
        onChange={(e) => setMoodValue(Number(e.target.value))}
        className="w-full max-w-md"
      />
      <div className="text-lg mt-2 mb-4">Current Mood: {moodValue}/10</div>
      <textarea
        placeholder="Anything you'd like to note?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border rounded p-2 w-full max-w-md mb-4"
      />
      <br />
      <button
        onClick={handleSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Entry
      </button>

      <h2 className="text-xl font-semibold mt-8">Recent Logs</h2>
      {logs.length === 0 ? (
        <p className="text-gray-500">No entries yet.</p>
      ) : (
        <ul className="mt-4 text-left max-w-md mx-auto">
          {logs.map((log, index) => (
            <li key={index} className="mb-2 border-b pb-2">
              <strong>{log.moodValue}/10</strong> – {log.note}
              <div className="text-xs text-gray-400">{new Date(log.timestamp).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
