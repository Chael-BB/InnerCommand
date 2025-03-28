import React, { useState } from 'react';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white shadow px-4 py-3 text-center text-xl font-semibold text-zen-dark">
        InnerCommand
      </div>
      <div className="flex-1 p-4">
        {tab === 'home' && <Home />}
        {tab === 'logs' && <Logs />}
        {tab === 'summary' && <Summary />}
        {tab === 'settings' && <Settings />}
      </div>
      <div className="bg-white shadow-inner flex justify-around p-2 border-t">
        <NavItem icon="🏠" label="Home" active={tab === 'home'} onClick={() => setTab('home')} />
        <NavItem icon="📅" label="Logs" active={tab === 'logs'} onClick={() => setTab('logs')} />
        <NavItem icon="📊" label="Summary" active={tab === 'summary'} onClick={() => setTab('summary')} />
        <NavItem icon="⚙️" label="Settings" active={tab === 'settings'} onClick={() => setTab('settings')} />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={"flex flex-col items-center text-sm " + (active ? "text-blue-600 font-bold" : "text-gray-500")}>
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
}

function Home() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [log, setLog] = useState([]);

  const saveEntry = () => {
    if (!mood) return;
    const entry = { mood, note, date: new Date().toLocaleString() };
    const updatedLog = [entry, ...log];
    setLog(updatedLog);
    setMood('');
    setNote('');
  };

  const moodOptions = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😴', label: 'Tired' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Daily Check-In</h2>
      <div className="mb-3">
        <p className="mb-1 text-gray-700">How do you feel today?</p>
        <div className="grid grid-cols-3 gap-2 mb-2">
          {moodOptions.map((m) => (
            <button
              key={m.label}
              onClick={() => setMood(m.label)}
              className={
  "border rounded-xl py-2 text-xl " +
  (mood === m.label ? "bg-blue-100 border-blue-500" : "bg-white")
}
            >
              {m.emoji}
              <div className="text-sm">{m.label}</div>
            </button>
          ))}
        </div>
      </div>
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
      <div className="mt-6">
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

function Logs() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Log History</h2>
      <p className="text-gray-700">Past moods and notes will appear here.</p>
    </div>
  );
}

function Summary() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Insights</h2>
      <p className="text-gray-700">Visualize your patterns and progress.</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Settings</h2>
      <p className="text-gray-700">Adjust preferences in the future.</p>
    </div>
  );
}

export default App;
