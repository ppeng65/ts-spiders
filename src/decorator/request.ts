import { CrowllerController, LoginController } from '../controller';

export enum Methods {
  get = 'get',
  post = 'post'
}

function getRequestDecorator(type: Methods) {
  return function(path: string) {
    return function(target: CrowllerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', type, target, key);
    };
  };
}

// export function get(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'get', target, key);
//   };
// }

export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);
