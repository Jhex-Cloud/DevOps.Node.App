# DevOps: Node App

> This is a basic CRUD app built on Express.js. This app was created to understand the fundamentals of Docker, CI/CD and TypeScript server development.

[Project Link](https://github.com/MyCloudle/DevOps-Days/tree/main/Project%20Ideas/Docker-Node-Demo)

### Folder Structure

```
.
├── Dockerfile
├── LICENSE
├── Procfile
├── README.md
├── app
│   ├── Controller
│   │   └── index.ts
│   ├── Database
│   │   └── recepies.ts
│   ├── Routes
│   │   └── api.ts
│   ├── index.ts
│   └── views
│       ├── pages
│       │   └── index.ejs
│       └── partials
│           ├── footer.ejs
│           ├── head.ejs
│           └── header.ejs
├── package-lock.json
├── package.json
└── tsconfig.json
```

### Version 1: Implementation

1. Created a basic REST API using Express.js
2. Deployed app using Heroku.
3. Created a Docker image for this App. Pushed image to Docker-Hub.
4. Deployed app Docker-Container using Heroku.

### Version 2: Implementation

1. Migrated to Typescript.
2. Eslint and Prettier setup.
   - Followed Airbnb style guide.
   - Setup eslint config and eslint ignore files.
3. Updated Dockerfile.

### Version 2.1: ESLint Pre-Commit Hook

1. Added Pre-Commit Hook via Husky and Lint-Staged
2. Improve code quality. Enforce code quality working with teams.

### Version 2.2: Basic EJS Template setup in Express

1. Added EJS Templates.
2. Modified Build Script.
   - TSC complies all `.ts` files and outputs to dist folder. EJS Views need to be copied from `./app` to `./dist`.

### Version 3 : CI/CD pipeline implementation via Github Actions

1. Setup Github Actions CI/CD Pipeline.
2. Updated Dockerfile.
3. Github Actions CI/CD creates Docker Container and pushes to Docker Hub.

### Version 3.1: CI/CD pipeline implementation via Jenkins

### Version 4 : Sample Deployment into AWS EC2 Instance or Azure Instance.
