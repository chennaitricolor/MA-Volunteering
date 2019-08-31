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

localStorage.user = JSON.stringify({"name":"John Doe",
 "mobileNumber":"1234567890",
 "email":"abc123xyz@gmail.com",
 "gender":"Male",
 "dateOfBirth":"26 Aug 1998"});


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

Rename `ormconfig.js.example` to `ormconfig.js`.

`ormconfig.js` has to modified based on your DB connection settings.

_NOTE_: Do not commit the `ormconfig.js` file.

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
