'use client';

import { Github, Linkedin, Mail, ExternalLink, LucideIcon } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  isExternal?: boolean;
}

interface NavLink {
  name: string;
  href: string;
}

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

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

  const quickLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              Nachiket Bejagamwar
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer crafting modern web experiences with Next.js, React, and robust backend integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const linkProps = social.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                    {...linkProps}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nachiket Bejagamwar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}