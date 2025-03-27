import React, { useState } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [log, setLog] = useState([]);

  const saveEntry = () => {
    const entry = { mood, note, date: new Date().toLocaleString() };
    const updatedLog = [entry, ...log];
    setLog(updatedLog);
    setMood('');
    setNote('');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">InnerCommand</h1>

      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Daily Check-In</h2>
        <input
          type="text"
          placeholder="How do you feel today?"
          className="w-full mb-2 p-2 rounded border"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <textarea
          placeholder="Anything you'd like to note?"
          className="w-full p-2 rounded border mb-2"
          rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          onClick={saveEntry}
        >
          Save Entry
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-2">Recent Logs</h2>
        {log.length === 0 && <p className="text-gray-500">No entries yet.</p>}
        {log.map((entry, index) => (
          <div key={index} className="bg-white p-3 mb-3 rounded-xl shadow">
            <p className="text-sm text-gray-500">{entry.date}</p>
            <p className="text-lg font-medium">Mood: {entry.mood}</p>
            <p className="text-gray-700">Note: {entry.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
