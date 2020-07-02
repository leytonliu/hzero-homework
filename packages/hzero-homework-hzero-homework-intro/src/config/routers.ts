import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  // Insert New Router
  {
    path: '/hzero-homework-hzero-homework-intro/hello',
    component: () => import('../pages/hello/HelloHzeroHomeworkIntroPage'),
    authorized: true,
    title: 'Hello HzeroHomeworkHzeroHomeworkIntro',
  },
];

export default config;
