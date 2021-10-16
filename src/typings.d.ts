declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare let __webpack_public_path__: string | undefined;

declare interface Window {
  g_config?: any;
  resourceBaseUrl?: string;
}
