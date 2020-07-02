import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/hzero-homework-intro/hello',
    component: () => import('../pages/hello/HelloIntroPage'),
    authorized: true,
    title: 'Hello HzeroHomeworkIntro',
  },
];

export default config;
