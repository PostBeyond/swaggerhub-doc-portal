# Swaggerhub Documentation Portal

![SwaggerHub_gif](https://i.imgur.com/YAkrYRo.gif)

## INFO

Template project for building a React front end over the Swaggerhub API. This repository is intended as a starting point for those looking to develop a custom, swagger/OAS driven portal.

Documentation and full tutorial can be found at the links below: 
- Part 1: https://swagger.io/blog/api-documentation/building-documentation-portal-swagger-tutorial/
- Part 2: https://swagger.io/blog/api-documentation/building-a-documentation-portal-for-multiple-apis/

An example of the site can be found at: https://empire-doc-portal.netlify.com/

## USE

- `clone repository`
- `cd`
- `npm install`
- `npm start`

**In order to connect this to your own Swaggerhub repository, simply update the /src/organization_config.json file with your organization name, and other display information.**

## Deploying to GitHub Pages

- make sure the current GH user has write access
- make sure the `gh-pages` [package](https://www.npmjs.com/package/gh-pages) is installed
- `npm run deploy`
- in a few minutes, check [here](https://postbeyond.github.io/swaggerhub-doc-portal/) the new version of the docs
