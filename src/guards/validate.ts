import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ValidallRepo } from '@pestras/validall';

export const VALIDATE_OPTIONS = 'validateOptions';

export const Validate = (schema: string) => {
  return SetMetadata(VALIDATE_OPTIONS, schema);
};

@Injectable()
export class ValidateGaurd implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const schema = this.reflector.getAllAndOverride<string>(VALIDATE_OPTIONS, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!schema) return true;

    const instance = ValidallRepo.Get(schema);

    if (!instance)
      throw new InternalServerErrorException(`${schema} schema not exists!`);

    const err = instance.validate(request.body);

    if (err) {
      console.error(err);
      throw new BadRequestException(err.message, { description: err.value });
    }

    return true;
  }
}
