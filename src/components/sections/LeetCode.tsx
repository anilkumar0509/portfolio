import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Target, Trophy } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  ranking: number;
  easy: number;
  medium: number;
  hard: number;
}

interface Difficulty {
  name: string;
  count: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

const LeetCode: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    ranking: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLeetStats = async () => {
      try {
        const res = await fetch(
          'https://leetcode-stats-api.herokuapp.com/anilkumarbhumireddy'
        );
        const data = await res.json();

        const easy = data.easySolved || 0;
        const medium = data.mediumSolved || 0;
        const hard = data.hardSolved || 0;
        const total = easy + medium + hard;
        const rank = data.ranking || 0;

        setStats({
          totalSolved: total,
          ranking: rank,
          easy,
          medium,
          hard,
        });
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetStats();
  }, []);

  const difficultyData: Difficulty[] = [
    {
      name: 'Easy',
      count: stats.easy,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      name: 'Medium',
      count: stats.medium,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
    },
    {
      name: 'Hard',
      count: stats.hard,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
    },
  ];

  if (loading) {
    return (
      <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-400">
            Loading LeetCode Stats...
          </h2>
        </div>
      </section>
    );
  }

  const maxCount = Math.max(...difficultyData.map((d) => d.count), 1);

  return (
    <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              LeetCode Stats
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">
              {stats.totalSolved}
            </h3>
            <p className="text-gray-400">Problems Solved</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">
              #{stats.ranking.toLocaleString()}
            </h3>
            <p className="text-gray-400">Global Ranking</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-violet-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">Active</h3>
            <p className="text-gray-400">Status</p>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center">
            Problems by Difficulty
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {difficultyData.map((difficulty, index) => (
              <div
                key={index}
                className={`${difficulty.bgColor} ${difficulty.borderColor} border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300`}
              >
                <h4 className={`text-lg font-semibold ${difficulty.color} mb-2`}>
                  {difficulty.name}
                </h4>
                <div className={`text-3xl font-bold ${difficulty.color} mb-2`}>
                  {difficulty.count}
                </div>
                <div className="w-full bg-black/30 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${difficulty.color.replace(
                      'text-',
                      'bg-'
                    )}`}
                    style={{
                      width: `${Math.min(
                        (difficulty.count / maxCount) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LeetCode Profile Link */}
        <div className="text-center mt-10">
          <a
            href="https://leetcode.com/anilkumarbhumireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full hover:from-blue-500 hover:to-red-500 transition-all duration-300 font-medium galaxy-glow"
          >
            <Trophy size={20} />
            View LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
