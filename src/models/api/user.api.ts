import { User } from "../entities/user.interface";

export namespace UserApi {

  export const API_PATH = '/users';

  // Get
  export namespace GetAll {
    export const PATH = '';

    export type Response = User[];
  }

  // Get
  export namespace GetUser {
    export const PATH = '/:id';

    export interface Params {
      id: string;
    }

    export type Response = User | null;
  }

  // Post
  export namespace Create {
    export const PATH = '';

    export type Body = Omit<User, '_id'>;

    export type Response = User;
  }
}