import { hooks, createConfiguration } from '@midwayjs/hooks';
import staticCache from 'koa-static-cache';
import { join } from 'path';

export default createConfiguration({
  imports: [hooks()],
}).onReady(async (_, app: any) => {
  app.use(
    staticCache({
      prefix: '/',
      dir: join(__dirname, '../build'),
      dynamic: true,
      preload: false,
      buffer: true, 
      maxFile: 1000
    })
  )
})