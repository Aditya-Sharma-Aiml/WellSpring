import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../components/StudentNavbar';
import { Play, Clock, ArrowLeft, Search, ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  creator: string;
  category: string;
  duration: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  views: string;
}

const VideosHub: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Meditation', 'Motivation', 'Study Tips', 'Stress Relief', 'Mindfulness', 'Self-Care'];

  const videos: Video[] = [
    {
      id: '1',
      title: 'Morning Meditation for Students',
      creator: 'Mindful Learning',
      category: 'Meditation',
      duration: '10:30',
      description: 'Start your day with focus and clarity through this guided meditation designed specifically for students.',
      videoUrl: 'https://example.com/video1',
      thumbnailUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '12.5K'
    },
    {
      id: '2',
      title: 'Overcoming Study Anxiety',
      creator: 'Dr. Alex Thompson',
      category: 'Stress Relief',
      duration: '15:45',
      description: 'Learn practical techniques to manage exam stress and study anxiety effectively.',
      videoUrl: 'https://example.com/video2',
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '18.2K'
    },
    {
      id: '3',
      title: 'The Science of Motivation',
      creator: 'Growth Mindset',
      category: 'Motivation',
      duration: '12:20',
      description: 'Discover what drives motivation and how to maintain it during challenging times.',
      videoUrl: 'https://example.com/video3',
      thumbnailUrl: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '25.7K'
    },
    {
      id: '4',
      title: 'Effective Study Techniques',
      creator: 'Study Smart',
      category: 'Study Tips',
      duration: '18:15',
      description: 'Evidence-based study methods that will improve your learning efficiency and retention.',
      videoUrl: 'https://example.com/video4',
      thumbnailUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '31.4K'
    },
    {
      id: '5',
      title: 'Building Self-Compassion',
      creator: 'Wellness Works',
      category: 'Self-Care',
      duration: '14:30',
      description: 'Learn to treat yourself with kindness and develop a healthier relationship with yourself.',
      videoUrl: 'https://example.com/video5',
      thumbnailUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '9.8K'
    },
    {
      id: '6',
      title: '5-Minute Breathing Exercise',
      creator: 'Calm Campus',
      category: 'Mindfulness',
      duration: '5:00',
      description: 'Quick breathing exercise perfect for between classes or during study breaks.',
      videoUrl: 'https://example.com/video6',
      thumbnailUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '45.1K'
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.creator.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-100 via-white to-green-500 opacity-80">
      <StudentNavbar activeSection="videos" setActiveSection={() => {}} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate("/student-dashboard")}
            className="flex items-center text-gray-600 hover:text-blue-500 mr-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <div>
            <h1 className="text-3xl font-light text-gray-800 mb-2">
              Videos Hub
            </h1>
            <p className="text-gray-600">
              Motivational and educational content for your wellness journey
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">by {video.creator}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{video.views} views</span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </span>
                </div>

                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white text-center py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No videos found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default VideosHub;