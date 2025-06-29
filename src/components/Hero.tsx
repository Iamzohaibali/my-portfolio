import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'; // Added MessageCircle

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-20 pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Alex Johnson - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Zohaib Ahmad Ali
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center">
                <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light">
                  I'm a{' '}
                  <span className="text-blue-400 font-medium transition-all duration-500 ease-in-out">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through clean code, 
              innovative design, and cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </button>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Iamzohaibali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zohaib-ahmad-ali-40308b297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="mailto:cloudmainservice@gmail.com"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaiGHpNLtOjC1bLdJo3S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6 text-white" /> {/* Replaced 🟢 with MessageCircle */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at the absolute bottom edge */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;