# Getting Started

Docs：[Midway Hooks - Getting Started](https://www.yuque.com/midwayjs/midway_v2/hooks_intro?translate=en)

## Directory Structure
```
.
├── bootstrap.js              //
├── jest.config.js            // Unit test file
├── midway.config.ts          // config file for setup directory and middleware
├── src
│   ├── apis                  // Backend directory
│   │   ├── configuration.ts  // Midway Hooks configuration
│   │   └── lambda            // Api directory(Can be modified in midway.config.ts)
│   │       ├── index.test.ts // Api test file
│   │       └── index.ts      // Api file
│   ├── pages                 // Frontend pages
│   ├── components            // Frontend components
│   ├── components            // Frontend layouts
│   └── app.ts                // Frontend framework file
├── tsconfig.json
└── build.json
```

## Task

### Start Dev Server

```bash
$ npm start
```

### Build your blog

modify your content in `src/apis/lambda/index.ts` and view the new content in the browser.

### Build

```bash
$ npm run build
```

### Deploy to serverless

```bash
$ npm run deploy
```
