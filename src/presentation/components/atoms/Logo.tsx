import spottedLogo from '@/assets/logo/spotted-logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={spottedLogo} alt="Spotted Logo" className="h-8 w-auto" />
    </Link>
  );
};

export { Logo };
