import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const responseObject = {
      statusCode: status,
      message: exception.message.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };
    Logger.error(`${request.method} ${request.url}`, JSON.stringify(responseObject), 'HTTPExceptionFilter');
    response
      .status(status)
      .json(responseObject);
  }
}
