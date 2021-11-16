module.exports = {
    development: {
        username: process.env.DB_USERNAME || '{{cookiecutter.db_user}}',
        password: process.env.DB_PASSWORD || '{{cookiecutter.db_pwd}}',
        database: process.env.DB_NAME || '{{cookiecutter.db_name}}',
        host: process.env.DB_HOST || '{{cookiecutter.db_host}}',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        dialect: 'postgres',
    },
    test: {
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'sharescrobble_test',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USERNAME || '{{cookiecutter.db_user}}',
        password: process.env.DB_PASSWORD || '{{cookiecutter.db_pwd}}',
        database: process.env.DB_NAME || '{{cookiecutter.db_name}}_production',
        host: process.env.DB_HOST || '{{cookiecutter.db_host}}',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        dialect: 'postgres',
    },
};
