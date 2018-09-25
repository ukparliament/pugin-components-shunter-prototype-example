# A Shunter prototype using Pugin-Components

This is a base prototype for UK Parliament's front-end developers to use when working on new features for beta.parliament.uk.

## Requirements
[Augustus][augustus] requires the following:
* [NodeJS][node] - [click here][node-version] for the exact version
* [NPM][npm]

## Quick start
```bash
git clone https://github.com/ukparliament/pugin-components-shunter-prototype-example.git
cd pugin-components-shunter-prototype-example
npm install
make dev
```

You can now visit http://localhost:5400 to see the prototype running.

## Deploying to Heroku
The included `Procfile`, `ProcfileForeman` and `heroku-postbuild` script within `package.json` mean you should be able to deploy this respository to Heroku using the default configuration with the NodeJS buildpack.
