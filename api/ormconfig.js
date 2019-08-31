module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: ['{dist, src}/**/*.entity.{js,ts}'],
  synchronize: true,
  migrations: ['db/migration/*.js'],
  cli: {
    migrationsDir: 'db/migrations',
  },
};
