# imdb-sdk
SDK that fetches movies from search.imdbot.workers.dev endpoints

## Install

```bash
npm install git@github.com:kevinmwangi/imdb-sdk-sdk.git
```
## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/kevinmwangi/imdb-sdk.git
cd imdb-sdk-sdk
npm install
```

## Development

`TODO:`
Set up Jest with ts-jest for testing

`TODO:`
Refactor `getRandomMovie()` to handle logic fo randomly get a movie without parameters 


## Production

Run the TypeScript compiler to compile the SDK code into JavaScript that can be used in any JavaScript environment.
```bash
npx tsc
```

`TODO:`
Setup  https://registry.npmjs.org/ to publish in `npm registry` when you run `npm publish`

## Docs

### Search

```
https://search.imdbot.workers.dev/?q=Lucifer
```

### Get Movie Details By IMDb ID

```
https://search.imdbot.workers.dev/?tt=tt13667402
```
