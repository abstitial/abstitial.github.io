# README

To run the site locally, you will need to install [NodeJS](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install/)

## Development

First, clone the repo.

Install dependencies by running:
```bash
$ yarn install
```

The `develop` script will watch your local files for changes, compile them on the fly, and serve them. Your browser should refresh automatically as changes are detected. To start development, run:
```bash
$ yarn develop
```

## Deployment

A GitHub action is set up to run whenever changes are pushed to the `main` branch. It will build the site and push changes to the `production` branch.
