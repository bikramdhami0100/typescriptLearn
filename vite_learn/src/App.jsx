import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Mail, Phone, ArrowRight, Users, BookOpen, Lightbulb, Zap, Globe } from 'lucide-react'; // Removed unused Chevrons
import "./App.css"; // Keep the CSS for animations

// Sample data (Keep the original data)
const servicesData = [
  {
    id: 1,
    title: "Startup Mentorship",
    description: "Get guidance from experienced entrepreneurs and industry experts.",
    icon: <Users className="w-10 h-10 text-blue-500" />
  },
  {
    id: 2,
    title: "Business Training",
    description: "Access comprehensive training programs for business development.",
    icon: <BookOpen className="w-10 h-10 text-blue-500" />
  },
  {
    id: 3,
    title: "Innovation Support",
    description: "Turn your innovative ideas into viable business opportunities.",
    icon: <Lightbulb className="w-10 h-10 text-blue-500" />
  },
  {
    id: 4,
    title: "Incubation Services",
    description: "Get all the resources needed to grow your startup.",
    icon: <Zap className="w-10 h-10 text-blue-500" />
  }
];

// Using Unsplash images for the team (Replace with actual team photos if available)
const teamData = [
  {
    id: 1,
    name: "Dr. Shahid Nawaz",
    position: "Project Director",
    // Unsplash image: Professional portrait (Ensure these URLs are correct and accessible)
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    department: "Management"
  },
  {
    id: 2,
    name: "Engr. Jawad Haider",
    position: "Assistant Director",
    // Unsplash image: Professional portrait
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    department: "Management"
  },
  {
    id: 3,
    name: "Dr. Waqar Mahmud",
    position: "Consultant",
    // Unsplash image: Professional portrait
    image: "https://images.unsplash.com/photo-1560250097-0b9352b72fd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    department: "Technical"
  },
  {
    id: 4,
    name: "Engr. Yasir Naeem",
    position: "Technical Lead",
    // Unsplash image: Professional portrait
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    department: "Technical"
  }
];

const eventsData = [
  {
    id: 1,
    title: "Startup Weekend",
    date: "June 15-17, 2025",
    description: "A 54-hour event where aspiring entrepreneurs can experience startup life.",
    category: "Workshop"
  },
  {
    id: 2,
    title: "Pitch Competition",
    date: "July 5, 2025",
    description: "Present your business ideas to investors and win funding opportunities.",
    category: "Competition"
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    date: "August 20, 2025",
    description: "Explore the latest technology trends and networking opportunities.",
    category: "Conference"
  },
  {
    id: 4,
    title: "Entrepreneurship Masterclass",
    date: "September 10, 2025",
    description: "Learn from industry leaders about building successful startups.",
    category: "Workshop"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTeamFilter, setActiveTeamFilter] = useState("All");
  const [activeEventsFilter, setActiveEventsFilter] = useState("All");
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect for team filtering
  useEffect(() => {
    if (activeTeamFilter === "All") {
      setFilteredTeam(teamData);
    } else {
      setFilteredTeam(teamData.filter(member => member.department === activeTeamFilter));
    }
  }, [activeTeamFilter]);

  // Effect for events filtering
  useEffect(() => {
    if (activeEventsFilter === "All") {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(eventsData.filter(event => event.category === activeEventsFilter));
    }
  }, [activeEventsFilter]);

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navigation */}
      {/* Added backdrop-blur for a subtle effect when scrolled */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent md:bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Globe className={`h-8 w-8 mr-2 ${isScrolled ? 'text-blue-600' : 'text-white md:text-blue-600'}`} />
              <div className={`text-xl md:text-2xl font-extrabold ${isScrolled ? 'text-blue-700' : 'text-white md:text-blue-700'}`}>
                FWU Incubation Center
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {/* Adjusted hover colors for both states */}
              <a href="#home" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>Home</a>
              <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>About</a>
              <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>Services</a>
              <a href="#team" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>Team</a>
              <a href="#events" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>Events</a>
              <a href="#contact" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white md:text-gray-700 md:hover:text-blue-600 hover:text-gray-300'}`}>Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          // Used a more explicit height for the mobile menu background
          <div className="md:hidden bg-white border-t border-gray-200 h-screen-minus-nav animate-fadeIn">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>About</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>Services</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>Team</a>
                <a href="#events" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>Events</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={handleNavLinkClick}>Contact</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* Adjusted gradient direction and colors slightly */}
      <section id="home" className="relative pt-32 md:pt-48 pb-24 md:pb-32 bg-gradient-to-br from-blue-700 to-indigo-800 overflow-hidden">
         {/* Subtle pattern overlay - Kept */}
        <div className="absolute inset-0 z-0 opacity-10">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" className="fill-current text-blue-200 opacity-50"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left pr-0 md:pr-12">
              {/* Increased font size slightly, refined animation delays */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                Turning Ideas Into <br className="hidden md:block" />
                <span className="text-yellow-300">Successful Ventures</span>
              </h1>
              {/* Refined animation delays */}
              <p className="text-lg md:text-xl text-blue-100 mb-8 opacity-95 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Federal Urdu University's Incubation Center helps entrepreneurs transform their innovative ideas into viable businesses.
              </p>
              {/* Refined animation delays, slightly enhanced button styles */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a href="#contact" className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center justify-center"> {/* Added translate-y hover */}
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 inline-flex items-center justify-center"> {/* Added translate-y hover */}
                  Our Services
                </a>
              </div>
            </div>
             {/* Refined animation delays */}
            <div className="w-full md:w-1/2 relative pt-8 md:pt-0 animate-fadeInRight" style={{ animationDelay: '0.7s' }}>
              <div className="relative">
                {/* Enhanced layered effect colors and sizes */}
                <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400 rounded-lg opacity-40 transform -rotate-12"></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-yellow-400 rounded-full opacity-40 transform rotate-12"></div>
                {/* Unsplash Hero Image: Collaboration/Brainstorming - Kept */}
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Incubation Center"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10 transform hover:rotate-1 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Wave Divider - Kept */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f6" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,240C672,245,768,235,864,218.7C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Incubation Center</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Established to foster innovation and entrepreneurship in Pakistan's youth.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Enhanced layered effect colors and sizes */}
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-200 rounded-lg opacity-50 transform -rotate-6"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-200 rounded-full opacity-50 transform rotate-12"></div>
                {/* Unsplash About Image: Professional discussion - Kept */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="About FWU Incubation Center"
                  className="rounded-xl shadow-xl relative z-10 w-full h-auto hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Federal Urdu University Incubation Center aims to create a nurturing ecosystem for startups and entrepreneurs, providing them with the resources, mentorship, and support needed to transform innovative ideas into successful businesses. We envision a future where Pakistani youth are empowered to drive economic growth through innovation.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We strive to bridge the gap between academia and industry by fostering entrepreneurship, innovation, and technological advancement through comprehensive incubation programs and services. Our mission is to equip startups with the skills, network, and resources to thrive in a competitive market.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"> {/* Added border */}
                  <div className="text-blue-600 font-bold text-4xl mb-2">50+</div>
                  <div className="text-gray-700 font-medium">Startups Incubated</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"> {/* Added border */}
                  <div className="text-blue-600 font-bold text-4xl mb-2">30+</div>
                  <div className="text-gray-700 font-medium">Mentors & Experts</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"> {/* Added border */}
                  <div className="text-blue-600 font-bold text-4xl mb-2">20+</div>
                  <div className="text-gray-700 font-medium">Success Stories</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"> {/* Added border */}
                  <div className="text-blue-600 font-bold text-4xl mb-2">100+</div>
                  <div className="text-gray-700 font-medium">Events Organized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help entrepreneurs at every stage of their journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-200"
              >
                <div className="mb-4 bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full text-blue-600 shadow-inner"> {/* Added inner shadow */}
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 rounded-full font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1" // Added translate-y hover
            >
              Apply for Incubation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals working to support entrepreneurs and innovators.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {/* Refined button hover/active styles */}
            <button
              onClick={() => setActiveTeamFilter("All")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeTeamFilter === "All" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTeamFilter("Management")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeTeamFilter === "Management" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
            >
              Management
            </button>
            <button
              onClick={() => setActiveTeamFilter("Technical")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeTeamFilter === "Technical" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
            >
              Technical
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-200 transform hover:-translate-y-1" // Added translate-y hover
              >
                <div className="relative overflow-hidden">
                  {/* Unsplash Team Image: Professional portrait - Kept */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-blue-800 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"> {/* Increased opacity */}
                    <div className="text-white text-sm font-semibold">
                      {member.department}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our events to learn, network, and grow your entrepreneurial skills.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
             {/* Refined button hover/active styles */}
             <button
              onClick={() => setActiveEventsFilter("All")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeEventsFilter === "All" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveEventsFilter("Workshop")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeEventsFilter === "Workshop" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"}`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveEventsFilter("Conference")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeEventsFilter === "Conference" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"}`}
            >
              Conferences
            </button>
            <button
              onClick={() => setActiveEventsFilter("Competition")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${activeEventsFilter === "Competition" ? "bg-blue-600 text-white shadow-md scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800"}`}
            >
              Competitions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col transform hover:-translate-y-1" // Added translate-y hover
              >
                <div className="bg-blue-600 py-3 px-5 text-white font-semibold">
                  {event.date}
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                </div>
                <div className="p-5 pt-0 flex-shrink-0">
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                    {event.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Kept the structure fixes */}
      <section id="contact" className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Have questions or want to learn more about our incubation programs? Contact us!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            {/* Contact Info Column */}
            <div className="w-full md:w-1/2 bg-blue-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-200">Address:</p>
                    <p className="text-blue-100">Federal Urdu University of Arts, Science & Technology (Main Campus), Gulshan-e-Iqbal, Karachi, Pakistan.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-200">Email:</p>
                    <p><a href="mailto:incubation@fuuast.edu.pk" className="text-blue-100 hover:underline">incubation@fuuast.edu.pk</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-200">Phone:</p>
                    <p className="text-blue-100">+92-21-xxxx-xxxx</p> {/* Use a placeholder phone number */}
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form Placeholder Column */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg text-gray-800">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md transform hover:-translate-y-1" // Added translate-y hover
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start text-white text-xl font-extrabold">
                <Globe className="h-6 w-6 mr-2 text-blue-400" />
                FWU Incubation Center
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-sm">
            © {new Date().getFullYear()} FWU Incubation Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}