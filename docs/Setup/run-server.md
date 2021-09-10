---
sidebar_position: 6
title: How to run /server
---
### Server
  Shenanigan's server is a NodeJS/Koa implementation that uses an Atlas MongoDB instance for a DB. We ask that you please respect the staging database.
  
  From the shenanigan-monorepo root:
  1. install dependencies
       `yarn install`
  2. copy the `.env.sample` into a new `.env`
        `cp .env.sample .env`
  4. Run 
      `yarn server:build` 
      `yarn server:serve`
  8. Open http://localhost/graphiql to access the graphql playground
