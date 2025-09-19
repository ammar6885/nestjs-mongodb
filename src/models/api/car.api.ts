import { Car } from '../entities/car.interface';

export namespace CarApi {
  export const API_PATH = '/cars';

  // Get
  export namespace GetAll {
    export const PATH = '';

    export type Response = Car[];
  }

  // Get
  export namespace GetCar {
    export const PATH = '/:id';

    export interface Params {
      id: string;
    }

    export type Reposne = Car | null;
  }

  // Get
  export namespace GetCarsByOwner {
    export const PATH = '/owner/:owner';

    export interface Params {
      owner: string;
    }

    export type Reposne = Car[];
  }

  // Post
  export namespace Add {
    export const PATH = '';

    export type Body = Omit<Car, '_id'>;

    export type Reposne = Car;
  }
}
