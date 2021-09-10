---
sidebar_position: 7
title: How to run bot
---
### Bot
Shenanigan's bot package hosts a discord bot code. Before you can test this bot, you will want to register your own application and bot in the [discord developer portal](https://discord.com/developers/applications)

You will need two OAuth Tokens:
  - A github Oauth token with the ability to read/write gists
  - A discord bot token with this permissions integer `511040`

In the bot repository
1. install dependencies
    `yarn install`
2. Create a `.env` file

```
DISCORD_API_TOKEN= {Get Bot API Token}
GITHUB_API_TOKEN= {Get Github API Token}
GIST_ID= {Enter Gist Id}
GITHUB_ADDRESS_FILE_PATH=ShenaniganDApp/scoreboard/contents/data/addressbook.json
WHITELISTED_CHANNELS=*
WHITELISTED_ROLES=*
REACTION_LIMIT=5
REFUND=false
```

3. Create a dev server on Discord and invite the bot

4. Run  
  `yarn dev`
  
*Note* This code is in rapid development. Some channel ids and gist urls are hardcoded. If you are having issues testing commands, you might need to hardcode new values for your dev server