import { IsInt, IsRequired, IsString, Schema } from '@pestras/validall';
import { CarApi } from 'src/models';

export enum CAR_SCHEMA {
  ADD = 'AddCar',
}

new Schema<CarApi.Add.Body>(CAR_SCHEMA.ADD, {
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
