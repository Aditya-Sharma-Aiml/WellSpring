import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "../components/StudentNavbar";
import { BookOpen, Headphones, ArrowLeft, Search, Star } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  readLink: string;
  audioLink?: string;
  imageUrl: string;
  rating: number;
}

const BooksHub: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Self-Help",
    "Motivation",
    "Productivity",
    "Mindfulness",
    "Stress Management",
  ];

  const books: Book[] = [
    {
      id: "1",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Mindfulness",
      description:
        "A guide to spiritual enlightenment and living in the present moment.",
      readLink: "https://example.com/book1",
      audioLink: "https://example.com/audio1",
      imageUrl:
        "https://youaligned.com/wp-content/uploads/2022/09/the-power-of-now-featured.jpg",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Productivity",
      description:
        "An easy and proven way to build good habits and break bad ones.",
      readLink: "https://example.com/book2",
      audioLink: "https://example.com/audio2",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*yPTgWvFZ_jy7rsscgNrTkA.jpeg",
      rating: 4.9,
    },
    {
      id: "3",
      title: "The Anxiety and Stress Solution",
      author: "Chloe Brotheridge",
      category: "Stress Management",
      description:
        "Practical techniques to overcome worry and live a calmer life.",
      readLink: "https://example.com/book3",
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.lJHOu8ABr4zupZGwnPemrwAAAA?pid=ImgDet&w=178&h=251&c=7&dpr=1.5&o=7&rm=3",
      rating: 4.6,
    },
    {
      id: "4",
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      category: "Motivation",
      description:
        "How we can learn to fulfill our potential through the power of growth mindset.",
      readLink: "https://example.com/book4",
      audioLink: "https://example.com/audio4",
      imageUrl:
        "https://img.lazcdn.com/g/ff/kf/S5b72e6c011174422a06091b2a5ec31f3n.jpg_720x720q80.jpg",
      rating: 4.7,
    },
    {
      id: "5",
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      category: "Self-Help",
      description: "Powerful lessons in personal change and effectiveness.",
      readLink: "https://example.com/book5",
      audioLink: "https://example.com/audio5",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.wEb78zOnMVZ0nAvd3RDEvwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.8,
    },
    {
      id: "6",
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      category: "Self-Help",
      description:
        "Let go of who you think you're supposed to be and embrace who you are.",
      readLink: "https://example.com/book6",
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.c9IEwKJUyR_D9jBzVDtQawHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.9,
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br  from-blue-100 via-white to-green-500 opacity-80">
      <StudentNavbar activeSection="books" setActiveSection={() => {}} />

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
              Books Hub
            </h1>
            <p className="text-gray-600">
              Discover books to support your growth and wellbeing
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
                placeholder="Search books or authors..."
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

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {book.description}
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {book.rating}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={book.readLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Read
                  </a>

                  {book.audioLink && (
                    <a
                      href={book.audioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Headphones className="w-4 h-4 inline mr-2" />
                      Listen
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No books found
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

export default BooksHub;
