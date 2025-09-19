import { IsDate, IsRequired, IsString, Schema } from '@pestras/validall';
import { UserApi } from 'src/models';

export enum USER_SCHEMA {
  CREATE_USER = 'CreateUser',
}

new Schema<UserApi.Create.Body>(USER_SCHEMA.CREATE_USER, {
  email: [
    IsRequired({ message: 'userEmailIsRequired' }),
    IsString('email', { message: 'invalidUserEmail' }),
  ],
  first_name: [
    IsRequired({ message: 'userFirstNameIsRequired' }),
    IsString({ message: 'invalidUserFirstName' }),
  ],
  last_name: [
    IsRequired({ message: 'userLastNameIsRequired' }),
    IsString({ message: 'invalidUserLastName' }),
  ],
  birth_date: [
    IsRequired({ message: 'userBirthDateIsRequired' }),
    IsString('date', { message: 'invalidUserBirthDate' }),
  ],
});
