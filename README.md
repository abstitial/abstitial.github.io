# README

To run the site locally, you will need to install [NodeJS](https://nodejs.org/en/).

## Development

First, clone the repo. 

In a terminal, go to the directory where you cloned this repo.

Install dependencies by running:
```bash
$ npm install
```

The `develop` script will watch your local files for changes, compile them on the fly, and serve them. Your browser should refresh automatically as changes are detected. To start development, run:
```bash
$ npm run develop
```

## Deployment

A GitHub action is set up to run whenever changes are pushed to the `main` branch. It will build the site and push changes to the `production` branch.
