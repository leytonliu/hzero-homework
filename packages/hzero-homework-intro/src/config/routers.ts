import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/form-advanced-form',
    component: () => import('../pages/form-advanced-form'),
    authorized: true,
    title: 'advanced-form',
  },
  {
    path: '/table-cascade-params',
    component: () => import('../pages/table-cascade-params'),
    authorized: true,
    title: 'table-cascade-params',
  },
  {
    path: '/profile-basic',
    component: () => import('../pages/profile-basic'),
    authorized: true,
    title: 'pro-file-basic',
  },
  {
    path: '/head-line',
    component: () => import('../pages/head-line'),
    authorized: true,
    title: 'head-line',
  },
  {
    path: '/intro',
    component: () => import('../pages/intro'),
    authorized: true,
    title: '自我介绍',
  },
  {
    path: '/hzero-homework-intro/hello',
    component: () => import('../pages/hello/HelloIntroPage'),
    authorized: true,
    title: 'Hello HzeroHomeworkIntro',
  },
];

export default config;
