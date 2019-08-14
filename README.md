# Volunteer Registration Module

Stack:

1. React with Typescript (SPA)
2. NestJS framework (API)
3. Postgres (DB)

Hosting: Firebase hosting

## Project structure

app
└── client (SPA code)
└── api (API code)

## Setup

### SPA

_Development_

```
  yarn start
```

_Production_

```
  yarn build
```

### Server

_Development_

```
  yarn start:dev
```

_Production_

```
  yarn start:prod
```

_Swagger_

```
  http://localhost:3001/api
```

### Database - Postgres

Create Database smartcity

```
createdb -O smartcity smartcity
```

Starting the API server should automatically create the tables using `typeorm` defined entities.

_Relations_

![alt text](https://raw.githubusercontent.com/chennaitricolor/MA-Volunteering/master/docs/ERD.png)

Seed the DB using `api/db/migrations/seed.sql` manually

TODO: Use typeorm to run seed migration
