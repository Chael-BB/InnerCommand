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
    <div className="min-h-screen bg-gray-50 p-4 font-sans flex flex-col justify-between">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">InnerCommand</h1>
        <p className="text-md text-gray-700">Control yourself, peaceful mind</p>
      </div>

      {/* Mood Slider */}
      <div className="my-4 text-center">
        <h2 className="text-2xl font-bold mb-2">How are you feeling today?</h2>
        <input
          type="range"
          min="1"
          max="10"
          value={mood}
          onChange={(e) => setMood(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xl mt-1 px-1">
          <span>😞 Worst</span>
          <span>😐 Okay</span>
          <span>😊 Best</span>
        </div>
        <div className="text-lg mt-2 font-bold">Mood: {mood}/10</div>
      </div>

      {/* Entry Note */}
      <div className="text-center mt-4">
        <textarea
          placeholder="Anything you'd like to note?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
        />
        <button
          onClick={handleSave}
          className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full hover:bg-blue-200"
        >
          Save Entry
        </button>
      </div>

      {/* Logs */}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Recent Logs</h3>
        {logs.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, index) => (
              <li
                key={index}
                className="border p-2 rounded-md bg-white shadow-sm text-sm"
              >
                <div>Mood: {log.mood}/10</div>
                <div className="italic text-gray-600">{log.note}</div>
                <div className="text-xs text-gray-400">{log.timestamp}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around text-sm">
        <div className="flex flex-col items-center">
          <div>🏠</div>
          <div>Home</div>
        </div>
        <div className="flex flex-col items-center">
          <div>📊</div>
          <div>Statistics</div>
        </div>
        <div className="flex flex-col items-center">
          <div>⚙️</div>
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}
