import { IsInt, IsRequired, IsString, Schema } from '@pestras/validall';
import { CarApi } from 'src/models';

export enum CARS_SCHEMA {
  create = 'CreateCar',
}

new Schema<CarApi.Create.Body>(CARS_SCHEMA.create, {
  owner: [
    IsRequired({ message: 'carOwnerIsRequired' }),
    IsString({ message: 'invalidCardOwner' }),
  ],
  name: [
    IsRequired({ message: 'carNameIsRequired' }),
    IsString({ message: 'invalidCardName' }),
  ],
  model: [
    IsRequired({ message: 'carModelIsRequired' }),
    IsInt({ message: 'invalidCardModel' }),
  ],
});
