import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconChevronRight } from '@tabler/icons-react';

const StartNew: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/roadmap');
  };

  const learningStyles: string[] = [
    'Video tutorials',
    'Written articles',
    'Hands-on projects',
    'Interactive exercises',
  ];

  return (
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full my-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Let's Personalize Your Learning Journey
        </h2>
        <form className="space-y-8">

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              What would you like to learn?
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g., Machine Learning, Web Development"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Your current skill level
            </label>
            <select className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Weekly time commitment */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Weekly time commitment (hours)
            </label>
            <input
              type="number"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g., 10"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              How many days can you study per week?
            </label>
            <input
              type="number"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g., 10"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              At what time can you study?
            </label>
            <input
              type="time"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="e.g., 10"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Preferred learning style
            </label>
            <div className="space-y-3">
              {learningStyles.map((style) => (
                <label
                  key={style}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="rounded text-blue-500 focus:ring-blue-500 size-4"
                  />
                  <span className="text-gray-700">{style}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleComplete}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span className="text-lg">Generate My Learning Path</span>
            <IconChevronRight size={24} />
          </button>
        </form>
      </div>
  );
};

export default StartNew;