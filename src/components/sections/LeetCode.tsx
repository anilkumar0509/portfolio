
import { useState, useEffect } from 'react';
import { Trophy, Target, TrendingUp } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  ranking: number;
  easy: number;
  medium: number;
  hard: number;
}

const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    ranking: 5000001,
    easy: 0,
    medium: 0,
    hard: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call or use actual LeetCode GraphQL API
    const fetchLeetCodeStats = async () => {
      try {
        // This is a placeholder - in a real app, you'd call the LeetCode GraphQL API
        setTimeout(() => {
          setStats({
            totalSolved: 12,
            ranking: 4255501,
            easy: 3,
            medium: 4,
            hard: 5
          });
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  const difficultyData = [
    { label: 'Easy', count: stats.easy, color: 'text-green-400', bgColor: 'bg-green-500/20', borderColor: 'border-green-400/30' },
    { label: 'Medium', count: stats.medium, color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-400/30' },
    { label: 'Hard', count: stats.hard, color: 'text-red-400', bgColor: 'bg-red-500/20', borderColor: 'border-red-400/30' },
  ];

  return (
    <section id="leetcode" className="min-h-screen py-20 px-8 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            LeetCode Progress
          </span>
        </h2>
        
        {loading ? (
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Loading LeetCode stats...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Main Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl text-center border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 galaxy-glow-hover">
                <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stats.totalSolved}</h3>
                <p className="text-gray-400">Total Solved</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl text-center border border-red-400/20 hover:border-red-400/40 transition-all duration-300 galaxy-glow-hover">
                <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">#{stats.ranking.toLocaleString()}</h3>
                <p className="text-gray-400">Global Ranking</p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl text-center border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 galaxy-glow-hover">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Active</h3>
                <p className="text-gray-400">Status</p>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-blue-400/20">
              <h3 className="text-2xl font-semibold text-center mb-8 text-white">
                Problems by Difficulty
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {difficultyData.map((item, index) => (
                  <div key={index} className={`${item.bgColor} p-6 rounded-lg text-center border ${item.borderColor}`}>
                    <h4 className={`text-2xl font-bold ${item.color} mb-2`}>{item.count}</h4>
                    <p className="text-gray-400">{item.label}</p>
                    <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}
                        style={{ width: `${(item.count / stats.totalSolved) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LeetCode Profile Link */}
            <div className="text-center">
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
        )}
      </div>
    </section>
  );
};

export default LeetCode;
