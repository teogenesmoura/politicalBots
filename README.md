# PoliticalBot

API implementation for registering politically inclined bots as described by @yaso in the following text:
https://jota.info/artigos/um-lugar-para-os-robos-nas-eleicoes-20112017

## Motivation

Bots have been shown to have had major impact for multiple purposes in the last few years, and with politics it's no different. Instead of forbidding bots, however (as some politicians have proposed), it is much better for everyone to have them work but be registered to a public API from which anyone is able to query in real time whether a twitter user is a bot or not and to whom it belongs.

## Code Style
Currently implementing the airBnB code style, though suggestions are welcome https://github.com/airbnb/javascript) 

## Demo
Heroku's link will be here soon 

## Getting Started

clone this repo
```
git clone https://github.com/teogenesmoura/politicalBots.git
``` 
Install dependencies
``` 
npm install 
``` 
Change the MongoDB connection URL to your URL

run :)
``` 
sudo nodemon index.js
```

## API endpoints

/createBot

@params: name, party, url, repo, developer, additionalDetails

@returns: "Bot created sucessfully" if sucessful, "Bot not created sucessfully" otherwise

In order to create bots, open up your terminal and input the following:

``` 
curl --data "name=testBot&party=YOUR_PARTY_NAME&url=BOT_URL&repo=REPO_URL&developer=DEVELOPER_NAME&additionalDetails=ADD_DETAILS" http://localhost:3000/createBot
```

/getBot/:name

@params: name

@returns: "bot ' + botName + 'was found on the database:' + bot"

In order to retrieve a bot, input the following to your terminal:

```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/getBot/YOUR_BOT_NAME
```

## Tech Stack
Node JS/Express JS
ES6 

## Contributing

There are multiple possible contributions and I'll update this section as soon as I have a solid list. For now, there is a lot of code cleaning that needs to take place, as well as conforming the codebase to the AirBnB style as well as 
increasing test coverage and change remaining ES5 to ES6.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

