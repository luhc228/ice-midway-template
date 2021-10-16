import { render as renderPage } from '@ice/server';

// [...index].ts 匹配 HTTP /* 路径
export default async function render() {
  await renderPage();
}
