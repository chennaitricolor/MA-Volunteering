# Volunteer Registration Module

Stack:

1. React with Typescript (SPA)
2. NestJS (API)
3. Postgres (DB)

Hosting: Firebase hosting

## Project structure

app

└── client (SPA code)

└── api (API code)

## Setup

### SPA

Client side requires for `user` key stored in `localStorage`. Please initialize the `user` key with string:

```

localStorage.user = JSON.stringify({"user_phone_number":"1234567890",
"user_id":"EABbI9VXXZMUK8pbuVJzkLlyYf12",
"user_email":"abc@gmail.com",
user_name":"John Doe",
"user_dob":{"_seconds":810239100,"_nanoseconds":0},
"user_gender":"MALE"});


```

This information will set when `index.html` loads after authentication with the platform.

_Development_

```
  yarn start
```

_Production_

```
  yarn build
```

### Server

Make changes to `exports.sh` file under `api` folder with the required settings and run:

```

. ./exports.sh

```

to export the ENV in user terminal before starting the server.

_Development_

```
  yarn start:dev
```

_Production_

_Note_: Run SPA's prod build before running this.

```
  yarn start:prod
```

_API reference_

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

_Docker_

Modify `environment` in `docker-compose.yml` then run

```
  docker-compose up -d

```
