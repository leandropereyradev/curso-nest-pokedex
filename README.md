<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

# Run in development

1. Clone the repository.

2. Run inside the project folder:

```
npm install
```

3. Have Nest CLI installed:

```
npm i -g @nestjs/cli
```

4. Run the Database:

```
docker-compose up -d
```

5. Clone the `.env.template` file and rename it to `.env` and then complete these environment variables.

6. Run the application in development.

```
npm run start:dev
```

7. Rebuild the database with the seed being in development:

```
http://localhost:3000/api/v2/seed
```

## Used Stack

- Nest
- Docker
- MongoDB
