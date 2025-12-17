'use client';

// Define TypeScript interfaces
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

interface Certification {
  name: string;
  url: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer Intern',
      company: 'tCognition',
      period: 'Mar 2025 – Present',
      location: 'Kolhapur',
      description: [
        'Contributed to backend development of XseedAI, an AI-powered ATS platform using Java Spring Boot',
        'Designed and implemented RESTful APIs for Video Resume Module, including secure upload and storage handling',
        'Developed backend services for AI Assessments, supporting video-based and technical evaluation workflows',
        'Built Super Admin Module APIs with role-based access control and organizational hierarchy management',
        'Implemented reusable service layers, DTOs, and repository patterns following clean architecture principles',
      ]
    },
  ];

  const certifications: Certification[] = [
    {
      name: "Introduction to Frontend Development (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/JH34WD367MXN",
    },
    {
      name: "Programming with JavaScript (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/6LA9ZSVVK92C",
    },
    {
      name: "Version Control (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/U37HDF6BNH3U",
    },
    {
      name: "HTML & CSS in Depth (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/ZJKYCL5ES68A",
    },
    {
      name: "React Basics (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/PBN8GHVYWABX",
    },
    {
      name: "Advanced React (Coursera)",
      url: "https://www.coursera.org/account/accomplishments/verify/MUMEHGF8QWZQ",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-lg p-8 border border-border hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm font-semibold text-accent mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground hover:text-primary transition-colors">
                  {cert.name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}