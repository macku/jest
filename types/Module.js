import type {Path} from './Config';

export type Module = {|
  children: Array<Module>,
  exports: any,
  filename: string,
  id: string,
  loaded: boolean,
  parent?: Module,
  paths?: Array<Path>,
  require?: (id: string) => any,
|};
