# ember-cli-deploy-git

This is an [ember-cli-deploy](http://ember-cli.github.io/ember-cli-deploy/) plugin for deploying your built application to a git branch. It's particularly handy for deploying to GitHub Pages.

If you have a recent version of git that supports `git worktree`, and you're deploying to the same repo you're working in, we automatically use `git worktree` to avoid any extra cloning.

## Installation

`ember install ember-cli-deploy ember-cli-deploy-build ember-cli-deploy-git`

## Configuration

In `config/deploy.js`, (which `ember-cli-deploy` will helpfully generate for you), you can pass the following options:

 - `branch`: The branch that we will deploy to. It must already exist. Defaults to `"gh-pages"`
 - `repo`: The repo that we will deploy to. It defaults to the value of your containing repo's `origin` remote.
 - `worktreePath`: path where we will create/update a working tree to manipulate the deployment branch. Defaults to `../deploy-${project.name()}`, relative to your project.

A complete example:

```js
ENV.git = {
  repo: 'git@github.com:ef4/ember-cli-deploy-git.git',
  branch: 'deploys',
  worktreePath: '/tmp/ef4-deploy'
};

```
## Usage

### Github Pages First-Time Setup

1. Make sure the branch named `gh-pages` exists. If it doesn't, you can do `git branch --orphan gh-pages; git commit --allow-empty; git push -u origin gh-pages`.

2. Configure your application to run correctly in the Github environment by setting these things in your `config/environment.js`:

    if (environment === 'production') {
      ENV.baseURL = '/your-repo-name';
      ENV.locationType = 'hash';
    }


### How to Deploy

`ember deploy production`
