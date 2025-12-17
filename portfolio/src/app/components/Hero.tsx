'use client';

import { ArrowDown, Github, Linkedin, Mail, LucideIcon } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  isExternal?: boolean;
}

interface CTALink {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export default function Hero() {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/BNachiket",
      icon: Github,
      label: "GitHub",
      isExternal: true,
    },
    {
      href: "https://www.linkedin.com/in/nachiket-bejagamwar-n8766866552b?",
      icon: Linkedin,
      label: "LinkedIn",
      isExternal: true,
    },
    {
      href: "mailto:nachiketbejagamwar@gmail.com",
      icon: Mail,
      label: "Email",
      isExternal: false,
    },
  ];

  const ctaLinks: CTALink[] = [
    {
      text: "View My Work",
      href: "#projects",
      variant: "primary",
    },
    {
      text: "Get in Touch",
      href: "#contact",
      variant: "secondary",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
          Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Nachiket Bejagamwar</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
          Software Developer focused on architecting scalable, modular web applications using <span className="text-foreground font-medium">Next.js, React & Tailwind CSS</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {ctaLinks.map((cta, index) => {
            const className = cta.variant === 'primary'
              ? "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              : "px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-all duration-300";

            return (
              <a
                key={index}
                href={cta.href}
                className={className}
              >
                {cta.text}
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            const linkProps = social.isExternal
              ? { target: "_blank", rel: "noopener noreferrer" as const }
              : {};

            return (
              <a
                key={social.label}
                href={social.href}
                className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-300"
                aria-label={social.label}
                {...linkProps}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown size={24} className="mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}