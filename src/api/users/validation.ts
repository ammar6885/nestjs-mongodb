import { IsDate, IsRequired, IsString, Schema } from '@pestras/validall';
import { UserApi } from 'src/models';

export enum USER_SCHEMA {
  ADD = 'AddUser',
}

new Schema<UserApi.Add.Body>(USER_SCHEMA.ADD, {
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
