/* eslint-disable import/first */
if (typeof window === 'object' && typeof __webpack_public_path__ !== 'undefined') {
  // 注意：Vite 模式暂不支持动态修改 publicPath
  const fassEnv = window.g_config && window.g_config.faasEnv;
  if (fassEnv !== 'local') {
    __webpack_public_path__ = window.resourceBaseUrl;
  }
}

import { runApp, IAppConfig, request } from 'ice';
import { defaults } from '@midwayjs/hooks/request';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
  },
};

defaults.request = request;

runApp(appConfig);
