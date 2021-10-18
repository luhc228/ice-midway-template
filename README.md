# ice-midway-template

## 快速开始

[Midway Hooks 文档](https://www.yuque.com/midwayjs/midway_v2/hooks_intro?translate=en)
[ICE 文档](https://ice.work)

## 目录结构

```
├── jest.config.js            // 单元测试配置
├── midway.config.ts          // Hooks 配置
├── src
│   ├── apis                  // 后端目录
│   │   ├── configuration.ts  // 后端入口文件
│   │   └── lambda            // 接口目录
│   │       ├── index.test.ts // 接口测试文件
│   │       └── index.ts      // 接口文件
│   ├── pages                 // 前端页面
│   ├── components            // 前端组件
│   ├── components            // 前端布局
│   └── app.ts                // 前端入口文件
├── tsconfig.json
└── build.json
```

## 任务

### 启动调试

```bash
$ npm start
```

### 搭建你的博客

#### 基础任务

1. 修改 `src/apis/lambda/index.ts` 文件中接口返回的内容，比如修改你的名字、邮箱、个人简介等内容
2. 在浏览器中查看修改后的页面

#### 进阶任务

1. 在 `src/pages/Travel` 目录新建一个 `index.tsx`，并导出一个 JSX 组件

```tsx
export default function Travel() {
  return (
    <div>
      Travel
    </div>
  )
}
```

2. 在 `src/routes.ts` 中新增路由

```diff
+ import Travel from '@/pages/Travel';

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
+     {
+       path: '/travel',
+       exact: true,
+       component: Travel,
+     },
    ],
  },
];
```

3. 在 `src/layouts/menuConfig.ts` 中新增菜单项：

```diff
export default [
  {
    name: '关于',
    path: '/',
  },
+ {
+   name: '旅行',
+   path: '/travel'
+ },
];
```

4. 在 `src/apis/lambda/travel.ts` 中新增一个接口：

```ts
export function getTravelList() {
  return [ 
    {
      time: '2021-10-21',
      location: '杭州'
    },
    {
      time: '2021-10-22',
      location: '北京'
    }
  ]
}
```

5. 在 `src/pages/Travel/index.tsx` 中调用后端接口，并渲染数据到页面：

```tsx
import { useEffect } from 'react';
import { useRequest } from 'ice';
import { getTravelList } from '@/apis/lambda/travel';

function Travel() {
  const { data, error, request } = useRequest(() => getTravelList())

  useEffect(() => {
    // 请求后端接口
    request();
  }, []);

  if (error) {
    return (
      <div>{error.message}</div>
    )
  }
  return (
    <ul>
      {
        data.map(item => (
          <li key={item.time}>时间：{item.time}，地点：{item.location}</li>
        ))
      }
    </ul>
  );
}

export default Travel;
```

### 打包构建

```bash
$ npm run build
```

### 发布到 Serverless

```bash
$ npm run deploy
```
