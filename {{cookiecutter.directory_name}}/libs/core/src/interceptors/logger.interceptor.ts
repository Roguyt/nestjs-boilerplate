import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    private logger = new Logger('HTTP');

    intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
        const request = ctx.switchToHttp().getRequest();

        const { method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';
        const ip = request.connection.remoteAddress || request.ip;

        const start = Date.now();
        return next.handle().pipe(
            tap(() => {
                const { statusCode } = ctx.switchToHttp().getResponse();
                this.logger.log(`[${method} ${originalUrl}] [${statusCode}] [${Date.now() - start}ms] - ${userAgent} ${ip}`);
            }),
        );
    }
}
