import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-500 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-green-200/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-blue-500 mr-4" />
              <h1 className="text-5xl md:text-6xl text-gray-800 font-semibold ">
                WellSpring
              </h1>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-12">
              "Every journey begins with a single step towards growth, healing, and discovering your inner strength."
            </blockquote>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/student-auth')}
              className="group bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Student Portal
              </div>
            </button>
            
            <button
              onClick={() => navigate('/counsellor-auth')}
              className="group bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Counsellor Portal
              </div>
            </button>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Tracking</h3>
                <p className="text-gray-600">Monitor your daily mood and progress with interactive insights</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Anonymous Support</h3>
                <p className="text-gray-600">Connect with counsellors while maintaining complete privacy</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Growth Resources</h3>
                <p className="text-gray-600">Access curated books, videos, and wellness content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100-100 backdrop-blur-sm border-t border-blue-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-8 h-8 text-blue-500 mr-3" />
              <span className="text-xl font-light text-gray-800">WellSpring</span>
            </div>
            
            <div className="flex space-x-8">
              <button 
                onClick={() => navigate('/about')}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/privacy')}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/help')}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Help
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;