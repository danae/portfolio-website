# portfolio-website

**This is the repository for my personal portfolio website.**

This site is made in JS using [Eleventy](https://11ty.dev/). The provided [Dockerfile](https://github.com/danae/portfolio-website/blob/master/Dockerfile) builds an image that builds the static Eleventy site and serves it using nginx.

An image from this Dockerfile will be built and published to the GitHub Container Registry on every push or pull request using a [GitHub action](https://github.com/danae/portfolio-website/blob/master/.github/workflows/docker-publish.yml).

## Installation

You can pull the current version of the image with the following command:

```bash
docker pull ghcr.io/danae/portfolio-website:master
```

Other versions of the package can be found [here](https://github.com/danae/portfolio-website/pkgs/container/portfolio-website).

## Local development

Install Node.js and npm, then run the following command to open an Eleventy development web server with live reload at port 8080:

```bash
npm run dev
```