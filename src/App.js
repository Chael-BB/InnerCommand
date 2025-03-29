import React, { useState } from "react";
import "./App.css";

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
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="text-left mb-4">
        <h1 className="text-4xl font-bold">InnerCommand</h1>
        <p className="text-md text-gray-700">Control yourself, peaceful mind</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">How are you feeling today?</h2>
        <input
          type="range"
          min="0"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none bg-gradient-to-r from-blue-400 via-white to-yellow-300"
        />

        <div className="flex justify-between text-lg mt-2">
          <span>😞 Worst</span>
          <span>😐 Okay</span>
          <span>😊 Best</span>
        </div>

        <p className="mt-2 font-semibold">Mood: {mood}/10</p>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Anything you'd like to note?"
          className="w-full border border-gray-300 rounded p-2 mt-2"
        />
        <button
          onClick={handleSave}
          className="bg-blue-100 border border-blue-500 rounded px-4 py-1 text-blue-800 mt-2"
        >
          Save Entry
        </button>
      </div>

      <div className="mb-20">
        <h3 className="text-xl font-bold mb-2">Recent Logs</h3>
        {logs.length === 0 ? (
          <p className="text-gray-500">No entries yet.</p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, idx) => (
              <li key={idx} className="bg-white p-2 border rounded">
                <p><strong>Mood:</strong> {log.mood}/10</p>
                <p><strong>Note:</strong> {log.note}</p>
                <p className="text-xs text-gray-400">{log.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fixed bottom-2 left-4 right-4 flex justify-around bg-white p-2 rounded-xl shadow-md">
        <div className="text-center">
          <div>🏠</div>
          <div className="text-sm">Home</div>
        </div>
        <div className="text-center">
          <div>📊</div>
          <div className="text-sm">Statistics</div>
        </div>
        <div className="text-center">
          <div>⚙️</div>
          <div className="text-sm">Settings</div>
        </div>
      </div>
    </div>
  );
}
