---
sidebar_position: 8
title: How to run scoreboard
---
### Scoreboard
Shenanigan's scoreboard package hosts the Sourcered instance for Shenanigan

You will need to create two OAuth Tokens:
- Github
- Discord
Instructions for doing that can be found in the [SourceCred template instance repo](https://github.com/sourcecred/template-instance#supported-plugins)

In the bot repository:

1. install dependencies
    `yarn install`
2. Create a ``.env` file
    ```
    SOURCECRED_DISCORD_TOKEN= {Get Discord Token}
    SOURCECRED_GITHUB_TOKEN= {Get Github Token}
    ```
3. Run
    `yarn start`

Tips: 
- Running `yarn start` takes a long time! Especially if your internet is slow
- After completing loading the graph the first time, you can run `yarn sourcecred serve` to load just the website
- The graph has a cache, so future runs are much faster. Make sure your .env is setup correctly so the command doesnt fail. When the `yarn start` command fails the cache is reset
