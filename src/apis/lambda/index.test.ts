import {
  createFunctionApp,
  HooksApplication,
} from '@midwayjs/hooks-testing-library';
import { getProfile } from './';

let app: HooksApplication;

beforeAll(async () => {
  app = await createFunctionApp();
});

afterAll(async () => {
  await app.close();
});

test('getProfile', async () => {
   const profile = await app.runFunction(getProfile);
  expect(Reflect.ownKeys(profile)).toBeGreaterThan(0);
})
