import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CoreModule } from '@libs/core';

@Module({
    imports: [SequelizeModule.forFeature([]), CoreModule],
    providers: [],
    exports: [],
})
export class DbModule {}
