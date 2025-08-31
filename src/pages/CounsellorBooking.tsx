import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNavbar from '../components/StudentNavbar';
import { Calendar, Clock, Star, ArrowLeft, User, CheckCircle } from 'lucide-react';

interface Counsellor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  description: string;
  availability: string[];
  imageUrl: string;
}

const CounsellorBooking: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCounsellor, setSelectedCounsellor] = useState<Counsellor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

  const counsellors: Counsellor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialty: 'Stress & Anxiety',
      rating: 4.9,
      experience: '8 years',
      description: 'Specializes in cognitive behavioral therapy and mindfulness techniques for managing academic stress.',
      availability: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
      imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Dr. Michael Rodriguez',
      specialty: 'Career Guidance',
      rating: 4.8,
      experience: '12 years',
      description: 'Helps students navigate career decisions and build confidence in professional development.',
      availability: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
      imageUrl: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Dr. Emily Johnson',
      specialty: 'Relationships & Social',
      rating: 4.9,
      experience: '6 years',
      description: 'Focuses on interpersonal relationships, social anxiety, and building healthy connections.',
      availability: ['9:30 AM', '12:00 PM', '2:30 PM', '4:30 PM'],
      imageUrl: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '4',
      name: 'Dr. David Kim',
      specialty: 'Academic Pressure',
      rating: 4.7,
      experience: '10 years',
      description: 'Helps students manage academic workload, test anxiety, and develop effective study strategies.',
      availability: ['8:00 AM', '11:30 AM', '1:30 PM', '6:00 PM'],
      imageUrl: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      navigate('/student-dashboard');
    }, 2000);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br  from-blue-100 via-white to-green-500 opacity-80 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your anonymous session has been scheduled successfully.
          </p>
          <div className="bg-white/80 p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h3 className="font-semibold text-gray-800 mb-2">
              Session Details:
            </h3>
            <p className="text-gray-600">
              Counsellor: {selectedCounsellor?.name}
            </p>
            <p className="text-gray-600">Time: {selectedSlot}</p>
            <p className="text-gray-600">
              Your ID: Anonymous Student #
              {Math.random().toString(36).substr(2, 6).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <StudentNavbar activeSection="booking" setActiveSection={() => {}} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/student-dashboard')}
            className="flex items-center text-gray-600 hover:text-blue-500 mr-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          <div>
            <h1 className="text-3xl font-light text-gray-800 mb-2">Book a Counsellor</h1>
            <p className="text-gray-600">Choose a counsellor for anonymous, confidential support</p>
          </div>
        </div>

        {!selectedCounsellor ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {counsellors.map((counsellor) => (
              <div key={counsellor.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <img
                      src={counsellor.imageUrl}
                      alt="Counsellor"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{counsellor.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{counsellor.specialty}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{counsellor.rating} • {counsellor.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{counsellor.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {counsellor.availability.length} slots available
                    </div>
                    <button
                      onClick={() => setSelectedCounsellor(counsellor)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <img
                  src={selectedCounsellor.imageUrl}
                  alt="Counsellor"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{selectedCounsellor.name}</h2>
                <p className="text-blue-600 font-medium">{selectedCounsellor.specialty}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Select a Time Slot</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedCounsellor.availability.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        selectedSlot === slot
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
                      }`}
                    >
                      <Clock className="w-4 h-4 inline mr-2" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Privacy Notice</h4>
                <p className="text-blue-700 text-sm">
                  Your identity will remain completely anonymous. The counsellor will only see your wellness progress and session notes, never your personal information.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedCounsellor(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  Back to List
                </button>
                <button
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CounsellorBooking;