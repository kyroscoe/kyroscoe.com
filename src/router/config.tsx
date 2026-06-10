import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import About from '../pages/about/page';
import Contact from '../pages/contact/page';
import Home from '../pages/home/page';
import Services from '../pages/services/page';
import Work from '../pages/work/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/work',
    element: <Work />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
