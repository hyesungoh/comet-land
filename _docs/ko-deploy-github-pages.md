# Github pages를 이용해 배포하는 방법

### 1. workflows 생성

`.github/workflows/github-pages-deploy.yml`에 아래의 내용들로 채워주세요.

> `github-pages-deploy.yml`의 파일명은 변경하셔도 됩니다.

```yml
# 이 내용들이 .github/workflows/github-pages-deploy.yml에 위치해있으면 됩니다.
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

### 2. `TYPE_OF_APP` 설정

```yml
env:
  TYPE_OF_APP: blog #or resume
```

`blog` 혹은 `resume`로 배포하고자 하는 앱의 이름으로 설정해주세요.

### 3. Repo 이름 설정

```yml
- name: Export app
  run: npm run export:${{ env.TYPE_OF_APP }}
  env:
    NEXT_PUBLIC_BASE_PATH: /your-repo-name
```

배포하고자 하는 repo 이름으로 위의 값을 채워주세요.

만약 `name.github.io`와 같은 형식의 이름이라면, 해당 줄을 지워주세요.

```yml
# 'name.github.io'과 같은 형식의 repo 이름이라면
- name: Export app
  run: npm run export:${{ env.TYPE_OF_APP }}
```

### 4. Github pages 설정

아래 이미지같이 github pages 설정을 해주세요.

![setting github pages](https://user-images.githubusercontent.com/26461307/182302514-81512700-d329-4083-b901-dd48ce525fc1.png)

> 위에 기술했던 github action은 `gh-pages` 브랜치에 빌드 결과물을 생성합니다.

### Done 🎉

Github page로 배포가 끝났습니다!

만약 궁금한 점이 있으시다면, [무엇이든 여쭤봐주세요.](https://github.com/hyesungoh/comet-land/discussions)

- [예제 확인하기](https://github.com/hyesungoh/comet-land-github-pages-example)
