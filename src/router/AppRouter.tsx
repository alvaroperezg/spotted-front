import { useRoutes } from 'react-router-dom';
import { combinedRoutes } from './routes';

export const AppRouter = () => {
  const routes = useRoutes(combinedRoutes);
  return routes;
};
