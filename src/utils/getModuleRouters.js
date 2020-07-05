import { getModuleRouters } from 'utils/utils';
import * as hzeroHomeworkIntroRouters from 'hzero-homework-intro/lib/utils/router';
import * as hzeroFrontHiamRouters from 'hzero-front-hiam/lib/utils/router';

export default (app) =>
  getModuleRouters(app, [
    // hzeroFrontHpfmRouters,
    hzeroFrontHiamRouters,
    hzeroHomeworkIntroRouters,
  ]);
