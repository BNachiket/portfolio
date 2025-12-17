'use client';
import { Sparkles, Zap, TrendingUp, Users, LucideIcon } from 'lucide-react';

// Define TypeScript interfaces
interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export default function About() {
  const valueProps: ValueProp[] = [
    {
      icon: Sparkles,
      title: 'Design-First Mindset',
      description: 'Where clean code meets beautiful UI',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimized SPAs with modern React patterns',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      icon: TrendingUp,
      title: 'Rapid Learner',
      description: '6 certifications in 8 months',
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Cross-functional teamwork at tCognition',
      gradient: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
  I'm a highly motivated Backend Developer specializing in Java Spring Boot, with hands-on experience in architecting robust, scalable, and high-performance server-side applications. Currently working as an Intern at 
  <span className="text-foreground font-semibold"> tCognition</span>, where I contribute to the backend development of XseedAI, an AI-powered Applicant Tracking System.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  I specialize in designing and implementing RESTful APIs, optimizing database queries, and integrating third-party services. My focus is on creating maintainable, efficient backend systems with proper authentication, data validation, and error handling.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  Outside of coding, I enjoy exploring system design patterns, studying distributed systems, and contributing to open-source Java projects to deepen my backend expertise.
</p>
          </div>

          {/* What I Bring - Value Props */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">What I Bring</h3>
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-secondary/50 to-transparent border border-border/50 hover:border-primary/50 transition-all duration-300 hover:translate-x-2"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${prop.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{prop.title}</h4>
                    <p className="text-sm text-muted-foreground">{prop.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}