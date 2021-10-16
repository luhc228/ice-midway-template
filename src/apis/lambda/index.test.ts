import {
  createFunctionApp,
  HooksApplication,
} from '@midwayjs/hooks-testing-library';
import { getRepo, addRepo } from './';

let app: HooksApplication;

beforeAll(async () => {
  app = await createFunctionApp();
});

afterAll(async () => {
  await app.close();
});

test('getRepo', async () => {
  const repos = await app.runFunction(getRepo);
  expect(repos.dataSource.length).toBeGreaterThan(0);
  expect(repos.method).toEqual('GET');
});

test('addRepo', async () => {
  const svelteRepo = {
    id: 7,
    name: 'sveltejs/svelte',
    description: 'Cybernetically enhanced web apps',
  };
  await app.runFunction(addRepo, svelteRepo);

  const newRepos = await app.runFunction(getRepo);
  const last = newRepos.dataSource.pop();
  expect(last).toEqual(svelteRepo);
});
