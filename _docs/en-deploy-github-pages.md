# How to deploy with github pages

### 1. Generate workflows

Generate workflows files with below content at `.github/workflows/github-pages-deploy.yml`

> You can change file name `github-pages-deploy.yml`

```yml
# this is content of .github/workflows/github-pages-deploy.yml
name: github pages deploy

on:
  push:
    branches: main
  pull_request:
    branches: main

env:
  TYPE_OF_APP: blog

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: yarn

      - name: Export app
        run: npm run export:${{ env.TYPE_OF_APP }}
        env:
          NEXT_PUBLIC_BASE_PATH: /your-repo-name

      - name: Add .nojekyll file
        run: touch apps/${{ env.TYPE_OF_APP }}/out/.nojekyll

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.4.0
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: apps/${{ env.TYPE_OF_APP }}/out
```

### 2. Set `TYPE_OF_APP`

```yml
env:
  TYPE_OF_APP: blog #or resume
```

Set app what you want to deploy, which `blog` or `resume`

### 3. Set your repo name

```yml
- name: Export app
  run: npm run export:${{ env.TYPE_OF_APP }}
  env:
    NEXT_PUBLIC_BASE_PATH: /your-repo-name
```

Fill your repo name into this line.

If you using root repo name(`name.github.io`), just delete this line

```yml
# If your repo name like 'name.github.io'
- name: Export app
  run: npm run export:${{ env.TYPE_OF_APP }}
```

### 4. Setting github pages

Github repo's pages setting like below image.

![setting github pages](https://user-images.githubusercontent.com/26461307/182302514-81512700-d329-4083-b901-dd48ce525fc1.png)

> Above action set builded project to `gh-pages`.

### Done 🎉

Now you deployed with github pages!

If you have any question, [just ask me anything.](https://github.com/hyesungoh/comet-land/discussions)

- [Check example](https://github.com/hyesungoh/comet-land-github-pages-example)
