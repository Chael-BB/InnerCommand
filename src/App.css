import React, { useState } from "react";

export default function App() {
  const [mood, setMood] = useState(5); // Default mood: middle
  const [note, setNote] = useState("");
  const [logs, setLogs] = useState([]);

  const handleSave = () => {
    const entry = {
      mood,
      note,
      timestamp: new Date().toLocaleString(),
    };
    setLogs([entry, ...logs]);
    setNote(""); // Clear note after saving
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">InnerCommand</h1>
      <p className="text-lg mb-6">How are you feeling today?</p>

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>😞 Worst</span>
          <span>😐 Okay</span>
          <span>😊 Best</span>
        </div>
        <div className="text-center text-lg mt-2">
          Current Mood: <strong>{mood}/10</strong>
        </div>
      </div>

      <textarea
        className="w-full border rounded-xl p-3 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Anything you'd like to note?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Save Entry
      </button>

      <h2 className="text-xl font-semibold mt-8 mb-2">Recent Logs</h2>
      {logs.length === 0 ? (
        <p className="text-gray-500 text-sm">No entries yet.</p>
      ) : (
        <ul className="space-y-3">
          {logs.map((log, index) => (
            <li
              key={index}
              className="p-3 border rounded-xl bg-white shadow-sm"
            >
              <div className="text-sm text-gray-700">
                <strong>Mood:</strong> {log.mood}/10
              </div>
              <div className="text-sm text-gray-600">{log.note}</div>
              <div className="text-xs text-gray-400">{log.timestamp}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
