import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CarsService } from 'src/db-module/cars.service';
import { Validate, ValidateGaurd } from 'src/guards/validate';
import { CarApi } from 'src/models';
import { CARS_SCHEMA } from './validation';

@Controller(CarApi.API_PATH)
@UseGuards(ValidateGaurd)
export class CarsController {
  constructor(private model: CarsService) {}

  @Get(CarApi.GetAll.PATH)
  async getAll(): Promise<CarApi.GetAll.Response> {
    return this.model.getAll();
  }

  @Get(CarApi.GetCar.PATH)
  getCar(
    @Param() params: CarApi.GetCar.Params,
  ): Promise<CarApi.GetCar.Reposne> {
    return this.model.getCar(params.id);
  }

  @Get(CarApi.GetCarsByOwner.PATH)
  getCarsByOwner(
    @Param() params: CarApi.GetCarsByOwner.Params,
  ): Promise<CarApi.GetCarsByOwner.Reposne> {
    return this.model.getCarsByOwner(params.owner);
  }

  @Post(CarApi.Create.PATH)
  @Validate(CARS_SCHEMA.create)
  create(@Body() body: CarApi.Create.Body): Promise<CarApi.Create.Reposne> {
    return this.model.create(body);
  }
}
