import React, { useState } from "react";
import { IconChartBar, IconAward, IconClock, IconMessage } from "@tabler/icons-react";
import { Stats, Achievements } from "../types";
import Chat from "./Chat"; // Import the Chat component

interface ProgressProps {
  stats: Stats;
  achievements: Achievements[];
}

const Progress: React.FC<ProgressProps> = ({ stats, achievements }) => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to control Chat modal visibility

  return (
    <div className="w-1/3 fixed top-1/7 right-24 h-screen pt-8">
      {/* Progress Content */}
      <div className="bg-zinc-50 p-8 rounded-xl shadow-lg">
        {/* Stats Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-l from-sky-400 to-indigo-500 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Current Progress</h3>
              <IconChartBar className="text-indigo-600" size={24} />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-sky-300">{stats.progress}%</div>
              <div className="text-sm text-white">Overall completion</div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="bg-gradient-to-l from-green-400 to-cyan-500 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Learning Streak</h3>
              <IconAward className="text-green-600" size={24} />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-green-300 inset-shadow-2xl">{stats.streak} days</div>
              <div className="text-sm text-white">Keep it up!</div>
            </div>
          </div>

          {/* Time Invested */}
          <div className="bg-gradient-to-l from-purple-500 to-indigo-500 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Time Invested</h3>
              <IconClock className="text-purple-300" size={24} />
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-purple-300">{stats.timeInvested}h</div>
              <div className="text-sm text-white">This week</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex flex-row"
      >
        <IconMessage size={24} /><p className="ml-2">Ask a Doubt</p>
      </button>

      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Progress;