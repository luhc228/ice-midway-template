import { IRouterConfig } from 'ice';
import Layout from '@/layouts/BasicLayout';
import Blog from '@/pages/Blog';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';
import Contact from '@/pages/Contact';

const routes: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/blog',
        exact: true,
        component: Blog,
      },
      {
        path: '/contact',
        exact: true,
        component: Contact,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
