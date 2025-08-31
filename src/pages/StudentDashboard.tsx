import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import StudentNavbar from '../components/StudentNavbar';
import WellbeingTracker from '../components/WellbeingTracker';
import MotivationalQuotes from '../components/MotivationalQuotes';
import ChatbotAssistant from '../components/ChatbotAssistant';
import DailyReflection from '../components/DailyReflection';
import QuickActions from '../components/QuickActions';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!user || user.role !== 'student') {
    return <div>Access denied</div>;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-gray-800 mb-2">
                Welcome to Your Wellness Journey
              </h1>
              <p className="text-gray-600 text-lg">
                How are you feeling today? Let's track your progress together.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <WellbeingTracker />
                <DailyReflection />
              </div>
              
              <div className="space-y-8">
                <MotivationalQuotes />
                <QuickActions />
              </div>
            </div>
          </div>
        );
      case 'chat':
        return <ChatbotAssistant />;
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-100 via-white to-green-500 opacity-80">
      <StudentNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">{renderSection()}</main>
    </div>
  );
};

export default StudentDashboard;