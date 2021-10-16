import { FaaSContext } from '@midwayjs/faas';

declare module '@midwayjs/hooks' {
  export function useContext<T = FaaSContext>(): T;
}
