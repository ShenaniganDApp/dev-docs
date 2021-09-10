---
sidebar_position: 3
title: 'Shenanigan Repositories'
---
Let's review the main Shenanigan repositories
## shenanigan-monorepo
  Shenanigan's monorepo contains the entire Shenanigan app stack
  
**package structure:**
- app: React Native mobile frontend
- server: NodeJS/koa server that handles GraphQL traffic and read and writes to the DB
- hardhat: smart contract code code plus deploymentand testing logic
- contracts: a minimalist structure to managing smart contract ABIs
- util: business logic helpers to provide for other packages

## ShenaniganDapp.github.io
  Shenanigan's website built with React and styled components
  
## bot
  A discord bot written in Node to supply our discord server with custom services
  **structure**
  - starboard: Sets a minimum amount of :star: emojis a post must receive to stay in a channel
  - handlers:
      - `addaddress`: adds Verified users into our addressbook to receive cred
      - `token`: return relevant information about the PRTCLE token
      - `score`: returns Cred scores for users (broken)

## scoreboard
  Shenanigan's sourcecred instance. Contains the addressbook, logic for weekly distributions like liquidity reward calculations and user activation  
    