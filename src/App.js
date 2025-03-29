// InnerCommand - Full UI Redesign with Sketch Reference
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
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Header Section */}
      <header className="px-6 py-4">
        <h1 className="text-3xl font-bold">InnerCommand</h1>
        <p className="text-sm text-gray-500">Control yourself, peaceful mind</p>
      </header>

      {/* Mood Slider Section */}
      <div className="px-6">
        <h2 className="text-xl font-semibold mb-2">How are you feeling today?</h2>
        <input
          type="range"
          min="1"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="w-full accent-yellow-400"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>😞 Worst</span>
          <span>😐 Okay</span>
          <span>😊 Best</span>
        </div>
        <p className="text-center font-bold mt-1 text-lg">
          Mood: <span className="text-blue-500">{mood}/10</span>
        </p>
      </div>

      {/* Entry Note Section */}
      <div className="px-6 mt-4">
        <textarea
          className="w-full p-2 border rounded-md"
          placeholder="Anything you'd like to note?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button
          onClick={handleSave}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl w-full"
        >
          Save Entry
        </button>
      </div>

      {/* Log Section */}
      <div className="px-6 mt-6">
        <h3 className="text-lg font-semibold mb-2">Recent Logs</h3>
        {logs.length === 0 ? (
          <p className="text-sm text-gray-400">No entries yet.</p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, idx) => (
              <li
                key={idx}
                className="p-3 border rounded-md bg-white shadow-sm"
              >
                <p className="text-sm font-medium">Mood: {log.mood}/10</p>
                <p className="text-xs text-gray-500">{log.timestamp}</p>
                {log.note && <p className="text-sm mt-1">{log.note}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="mt-auto px-6 py-4 border-t bg-white flex justify-around text-sm">
        <div className="text-center">
          <div>🏠</div>
          <div>Home</div>
        </div>
        <div className="text-center">
          <div>📊</div>
          <div>Statistics</div>
        </div>
        <div className="text-center">
          <div>⚙️</div>
          <div>Settings</div>
        </div>
      </nav>
    </div>
  );
}
