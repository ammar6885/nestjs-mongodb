import { Global, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { DbConnectService } from "./conn.service";
import { CarsService } from "./cars.service";

@Global()
@Module({
  providers: [
    DbConnectService,
    UsersService,
    CarsService,
  ],
  exports: [
    UsersService,
    CarsService,
  ]
})
export class DbModule {}