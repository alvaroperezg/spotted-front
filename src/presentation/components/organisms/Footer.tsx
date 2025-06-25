import { Facebook, Instagram, Twitter } from "lucide-react"
import { Logo } from '@/presentation/components/atoms/Logo'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-blue-500 hover:text-blue-700 transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const platformLinks: FooterLink[] = [
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/features" },
    { label: "FAQ", href: "/faq" },
  ]

  const companyLinks: FooterLink[] = [
    { label: "About us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]

  const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ]

  return (
    <footer className="border-t border-gray-200 py-12 mt-10 max-w-[95%]">
      <div className="w-full ml-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-blue-500 mt-4 max-w-xs">
              Conectando fotógrafos de surf con surfistas para descubrir y adquirir impresionantes momentos capturados en el mar.
            </p>
          </div>

          {/* Navigation Links */}
          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-100">
          <p className="text-blue-500 mb-4 md:mb-0">© 2025 Spotted. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700">
              <span className="sr-only">Facebook</span>
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-blue-500 hover:text-blue-700">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" className="text-blue-500 hover:text-blue-700">
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
