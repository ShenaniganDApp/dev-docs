---
sidebar_position: 5
title: How to run /app
---
  ### App
  Shenanigan's app is a react native frontend that relies on a connection a the Shenanigan server, whether locally or through AWS, and the mongoDB instance
  
  **Step by Step**:
   In the root of the shenanigan-monorepo
   1. install dependencies
       `yarn install`
   2. Copy the `.env.sample` into a new `.env`
        `cp .env.sample .env`
   3. Enter your own personal`INFURA_ID`
   4. Run `yarn app:start` 
   5. Run `yarn ios` or `yarn android`
   *Note* If .env is using localhost, you will have to run the server locally as well