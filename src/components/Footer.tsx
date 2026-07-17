import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Mock contact details, easily configurable
  const contactDetails = {
    email: "hello@vedatek.co.uk",
    phone: "07907 090351",
    location: "United Kingdom",
    linkedin: "https://www.linkedin.com/company/vedatek"
  };

  const serviceLinks = [
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Systems Integration", href: "/services/systems-integration" },
    { name: "EDI & Automation", href: "/services/edi-automation" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" }
  ];

  const companyLinks = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-brand-dark/95 border-t border-brand-border/60 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-brand-border/40">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-1 focus:outline-none">
              <span className="text-xl font-bold tracking-wider text-slate-100">
                VEDA
              </span>
              <span className="text-xl font-black tracking-wider text-brand-cyan">
                TEK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Senior technology expertise delivered with a practical, business-first approach. We help UK businesses solve operational problems through software, integration, and practical AI.
            </p>
            {/* Brand Origin explanation */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block mb-1">Brand Philosophy</span>
              <p className="text-xs text-slate-500 italic max-w-sm">
                &ldquo;VEDA represents knowledge. TEK represents technology. VEDATEK brings the two together to solve real business challenges.&rdquo;
              </p>
            </div>
          </div>

          {/* Services Links Col */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Capabilities</h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors duration-200 focus:outline-none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-cyan transition-colors duration-200 focus:outline-none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Connect</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-brand-cyan transition-colors duration-200 focus:outline-none">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="hover:text-brand-cyan transition-colors duration-200 focus:outline-none">
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-indigo shrink-0" />
                <span>{contactDetails.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[#0077b5] shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors duration-200 focus:outline-none">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {currentYear} VEDATEK. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200 focus:outline-none"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
