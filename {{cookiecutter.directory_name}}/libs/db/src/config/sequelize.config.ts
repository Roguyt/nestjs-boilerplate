import { SequelizeModuleOptions } from '@nestjs/sequelize';

import * as dbConfigs from './database/index.js';

let dbConfig;
switch (process.env.NODE_ENV) {
    case 'production': {
        dbConfig = dbConfigs.production;
        break;
    }

    case 'test': {
        dbConfig = dbConfigs.test;
        break;
    }

    default: {
        dbConfig = dbConfigs.development;
        break;
    }
}

export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'postgres',

    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,

    logging: process.env.NODE_ENV === 'development',

    autoLoadModels: true,
    synchronize: false,
};
