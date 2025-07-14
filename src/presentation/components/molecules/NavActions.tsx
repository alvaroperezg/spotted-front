import { Button } from '@/presentation/components/atoms/Button';
import { NavLink } from '@/presentation/components/atoms/NavLink';

const NavActions = () => {
  return (
    <nav className="flex items-center gap-4">
      <NavLink to="/about-us" label="navbar.about" />
      <Button to="/login" label="navbar.login" variant="secondary" />
      <Button to="/register" label="navbar.register" variant="primary" />
    </nav>
  );
};

export { NavActions };
