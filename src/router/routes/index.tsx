import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';
import type { RouteObject } from 'react-router-dom';

export const combinedRoutes: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
];