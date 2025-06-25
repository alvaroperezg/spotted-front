import { useTranslationService } from '@/application/contexts/TranslationContext';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  const { translate } = useTranslationService();

  return (
    <Link
      to={to}
      className="text-sm text-gray-700 hover:text-primary transition-colors"
    >
      {translate(label)}
    </Link>
  );
};

export { NavLink };
