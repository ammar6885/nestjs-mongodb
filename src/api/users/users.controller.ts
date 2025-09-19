import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/db-module/users.service';
import { Validate, ValidateGaurd } from 'src/guards/validate';
import { UserApi } from 'src/models';
import { USER_SCHEMA } from './validation';

@Controller(UserApi.API_PATH)
@UseGuards(ValidateGaurd)
export class UsersController {
  constructor(private model: UsersService) {}

  @Get(UserApi.GetAll.PATH)
  async getAll(): Promise<UserApi.GetAll.Response> {
    return this.model.getAll();
  }

  @Get(UserApi.GetUser.PATH)
  async getUser(
    @Param() params: UserApi.GetUser.Params,
  ): Promise<UserApi.GetUser.Response> {
    return this.model.getUser(params.id);
  }

  @Post(UserApi.Create.PATH)
  @Validate(USER_SCHEMA.CREATE_USER)
  create(
    @Body() body: UserApi.Create.Body,
  ): Promise<UserApi.Create.Response> {
    return this.model.create(body);
  }
}
