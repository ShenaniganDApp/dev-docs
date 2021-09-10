---
sidebar_position: 4
title: Running Commands
---

Commands to run our repos. Please ensure you run the package manager w/ `yarn install` before doing these
  
**shenanigan-monorepo:**
- App
  
`yarn app:start`

`yarn ios` or `yarn android`

- Server
  
  `yarn server:build`

  `yarn server:start`

- Hardhat
  
  `yarn deploy`
  
**ShenaniganDapp.github.io:**

`yarn start`

**bot:**

`yarn dev`

**scoreboard:**

`yarn start`
  
**To remember:**

- For every change in relay queries, fragment, etcs on front, remember to run:

`yarn relay`

- For every change in graphql queries, mutations, etcs on backend, remember to run:

`yarn update-schema`