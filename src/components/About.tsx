import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Creating intuitive user experiences with thoughtful design principles.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing creative boundaries.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate developer with 2+ years of experience creating digital solutions 
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-slate-700">
              <p>
                My journey in tech began with a simple curiosity about how websites work. 
                That curiosity quickly grew into a passion for creating digital experiences 
                that are not only functional but also beautiful and intuitive.
              </p>
              
              <p>
                Over the years, I've had the privilege of working with startups, established 
                companies, and everything in between. Each project has taught me something new 
                and reinforced my belief that great software is built at the intersection of 
                technical excellence and human-centered design.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and the power of collaboration to solve complex problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                2+ Years Experience
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                10+ Projects Completed
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Remote Friendly
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <highlight.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;