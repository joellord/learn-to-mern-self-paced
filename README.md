# Docusaurus Template Workshop

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. It's available on https://mongodb-developer.github.io/docusaurus-workshop/.

This is a template to create new Workshop documentation sites. Contains info on how to use Docusaurus and is a good starting point.

### Installation

```
npx create-docusaurus@latest name-of-my-new-awesome-workshop https://github.com/mongodb-developer/docusaurus-workshop
cd name-of-my-new-awesome-workshop
yarn start
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

### Disclaimer

Use at your own risk; not a supported MongoDB product
