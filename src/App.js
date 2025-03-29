import React, { useState } from "react";

export default function App() {
  const [mood, setMood] = useState(5);
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
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col p-2">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">InnerCommand</h1>
        <p className="text-md mt-1">Control yourself, peaceful mind</p>
      </div>

      {/* Main UI Grid */}
      <div className="grid grid-cols-12 gap-2 flex-grow">
        {/* Left nav */}
        <div className="col-span-2 flex flex-col items-center gap-6 pt-6">
          <div className="text-center">
            <div className="text-2xl">🏠</div>
            <div className="text-sm">Home</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">📊</div>
            <div className="text-sm">Statistics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">⚙️</div>
            <div className="text-sm">Settings</div>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-1 border-l border-gray-400"></div>

        {/* Mood Entry */}
        <div className="col-span-9">
          <h2 className="text-xl font-bold mb-2">How are you feeling today?</h2>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="10"
            value={mood}
            onChange={(e) => setMood(Number(e.target.value))}
            className="w-full mb-2"
          />

          {/* Emoji scale */}
          <div className="flex justify-between text-2xl mb-2">
            <span>😔</span>
            <span>😐</span>
            <span>😊</span>
          </div>

          <div className="text-lg mb-2 font-medium">Mood: {mood}/10</div>

          {/* Note input */}
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Anything you'd like to note?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className="mt-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Save Entry
            </button>
          </div>

          {/* Logs */}
          <h3 className="text-xl font-bold mt-6">Recent Logs</h3>
          {logs.length === 0 ? (
            <p>No entries yet.</p>
          ) : (
            <ul className="mt-2">
              {logs.map((entry, index) => (
                <li key={index} className="mb-1">
                  {entry.timestamp}: Mood {entry.mood}/10 — {entry.note}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
