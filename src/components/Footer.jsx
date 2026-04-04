import { Github, Linkedin, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold tracking-tighter">
              <span className="text-[#6D4AFF]">M</span>uad
            </div>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              © {currentYear} | Muad — Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Muad-Ahmed", label: "GitHub" },
              { icon: Linkedin, href: "http://www.linkedin.com/in/muad-al-dhubaibi-5507023b6", label: "LinkedIn" },
              { icon: SiWhatsapp, href: "https://wa.me/966506373936", label: "WhatsApp" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:text-[#6D4AFF] hover:bg-[#6D4AFF]/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Tagline or Brief */}
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-slate-400 max-w-[200px]">
              Building modern web solutions built for the modern web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
