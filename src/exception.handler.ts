import { Catch, HttpException, ExceptionFilter, RpcExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { MongoError } from 'mongoose';

const statuses = {
  3: HttpStatus.BAD_REQUEST,
  5: HttpStatus.NOT_FOUND,
  7: HttpStatus.FORBIDDEN,
  16: HttpStatus.UNAUTHORIZED
}

@Catch()
export class ExceptionFiltering implements RpcExceptionFilter<RpcException> {

  catch(error: Error | RpcException | MongoError, host: ArgumentsHost) {
    let response = host.switchToHttp().getResponse();
    let request = host.switchToHttp().getRequest();
    let status = error.status || statuses[error.code] || 500;
    let errorData = {
      message: error.details || error.message,
      rpcCode: error.code,
      timestamp: new Date().toISOString(),
      path: request.url,
    }
    return response.status(status).send(errorData);
  }
}
