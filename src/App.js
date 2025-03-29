// InnerCommand UI - Core Layout (React + TailwindCSS)

import React, { useState } from 'react';

export default function InnerCommand() {
  const [mood, setMood] = useState(50); // 0 (sad/blue) to 100 (happy/yellow)
  const [note, setNote] = useState('');
  const [entry, setEntry] = useState('');

  const moodGradient = {
    background: `linear-gradient(to right, #3b82f6, #facc15)` // Blue to Yellow
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 text-gray-800 flex flex-col items-center p-6">
      {/* Logo and Heading */}
      <div className="text-center mt-4">
        <div className="w-20 h-20 border-4 border-gray-700 rounded-full mx-auto mb-2"></div>
        <h1 className="text-3xl font-bold">InnerCommand</h1>
        <p className="text-md">Train your mind. Transform your world.</p>
      </div>

      {/* Mood Slider Section */}
      <div className="w-full max-w-xl mt-10">
        <p className="text-center text-lg font-semibold mb-2">How are you feeling today/now?</p>
        <div className="flex items-center justify-between px-4">
          <span>😢</span>
          <input
            type="range"
            min="0"
            max="100"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full mx-4 h-3 rounded-lg appearance-none cursor-pointer"
            style={moodGradient}
          />
          <span>😊</span>
        </div>
      </div>

      {/* Emotion Tags */}
      <div className="w-full max-w-4xl grid grid-cols-2 gap-6 mt-10">
        <div>
          <h2 className="font-semibold mb-2">Group: Sad</h2>
          <div className="grid grid-cols-3 gap-2">
            {['Lonely', 'Tired', 'Worried', 'Anxious', 'Guilty', 'Hopeless'].map((emotion, index) => (
              <button key={index} className="bg-blue-200 rounded-full px-4 py-2 text-sm hover:bg-blue-300">
                {emotion}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Group: Happy</h2>
          <div className="grid grid-cols-3 gap-2">
            {['Grateful', 'Peaceful', 'Excited', 'Joyful', 'Loved', 'Hopeful'].map((emotion, index) => (
              <button key={index} className="bg-yellow-200 rounded-full px-4 py-2 text-sm hover:bg-yellow-300">
                {emotion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="w-full max-w-2xl mt-10">
        <label className="block text-md font-medium mb-1">Note</label>
        <textarea
          className="w-full rounded-lg border border-gray-300 p-3 h-20"
          placeholder="Write a short reflection..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Entry Section */}
      <div className="w-full max-w-2xl mt-4">
        <label className="block text-md font-medium mb-1">Entry</label>
        <textarea
          className="w-full rounded-lg border border-gray-400 p-3 h-28"
          placeholder="Write your thoughts or journal here..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 flex justify-center space-x-8 text-gray-600">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">🏠</div>
          <span className="text-xs mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">📈</div>
          <span className="text-xs mt-1">Stats</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">❓</div>
          <span className="text-xs mt-1">Help</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">⚙️</div>
          <span className="text-xs mt-1">Settings</span>
        </div>
      </div>
    </div>
  );
}
