import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';

import { LoggerInterceptor } from '@libs/core/interceptors/logger.interceptor';

import { sequelizeConfig } from '@libs/db/config/sequelize.config';

@Module({
    imports: [SequelizeModule.forRoot(sequelizeConfig)],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}
