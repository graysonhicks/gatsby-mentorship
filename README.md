
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Mediacurrent Gatsby Mentorship
</h1>

## Install Client

- `nvm use`
- `npm install`

## Run Client
- `npm run start`
- Visit `http://localhost:8000` to see site
- Visit `http://localhost:8000/__graphql` to see GraphQL interface

## Runtime GraphQL Server
To experiment with also making run time queries (see `/src/templates/movie.js`)

- `cd server`
- `npm install`
- `npm start`

The server will then be available locally (this is configured on the client in `gatsby-browser.js` and `gatsby-ssr.js`).
Using Apollo to interact at runtime.

## Build
To build production site:
- `npm run build`

Then use deployment tool of your choice. (Note: runtime queries won't work on prod build because that GraphQL server is local)