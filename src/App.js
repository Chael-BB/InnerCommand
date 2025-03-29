import React, { useState } from "react";

export default function App() {
  const [mood, setMood] = useState(5); // Mood from 0 (worst) to 10 (best)
  const [note, setNote] = useState("");
  const [logs, setLogs] = useState([]);

  const handleSave = () => {
    const entry = {
      mood,
      note,
      timestamp: new Date().toLocaleString(),
    };
    setLogs([entry, ...logs]);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">InnerCommand</h1>
        <p className="text-lg mt-1">Control yourself, peaceful mind</p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How are you feeling today?</h2>

      <div className="w-full max-w-xs flex flex-col items-center">
        <input
          type="range"
          min="0"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="w-full mb-2"
        />
        <div className="flex justify-between w-full text-xl mb-1">
          <span>😞</span>
          <span>😐</span>
          <span>😊</span>
        </div>
        <p className="text-lg mb-2">Mood: {mood}/10</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Anything you'd like to note?"
          className="border rounded-md p-2 w-full mb-2"
        />
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Entry
        </button>
      </div>

      <div className="w-full max-w-xs mt-6">
        <h3 className="text-xl font-bold mb-2">Recent Logs</h3>
        {logs.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, index) => (
              <li key={index} className="border rounded p-2 bg-white">
                <p className="font-semibold">Mood: {log.mood}/10</p>
                <p className="text-sm">{log.note}</p>
                <p className="text-xs text-gray-500">{log.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className="fixed bottom-4 left-0 right-0 flex justify-around text-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl">🏠</span>
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">📊</span>
          <span className="text-sm">Statistics</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">⚙️</span>
          <span className="text-sm">Settings</span>
        </div>
      </footer>
    </div>
  );
}
