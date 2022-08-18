# Vercel을 이용해 배포하는 방법

### 1. Import git repository

![deploy step 1](https://user-images.githubusercontent.com/26461307/177278351-7b82fcbe-e6db-46bd-93f4-10e8524ef2bf.gif)

### 2. framework preset을 `Next.js`로 설정

![deploy step 2](https://user-images.githubusercontent.com/26461307/177278363-509b3d69-f692-4458-8bc2-62173eef5e7e.gif)

### 3. root directory를 `apps/blog` 혹은 `apps/resume`로 설정

![deploy step 3](https://user-images.githubusercontent.com/26461307/177278370-1651b4d7-e561-44df-8a62-a283450773d9.gif)

### 4. build command 설정

![deploy step 4](https://user-images.githubusercontent.com/26461307/177278380-659ba348-7952-4875-9e19-0a006ad57c1a.gif)

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

### 5. Depoly 버튼 클릭! 🎉

![click the deploy button](https://user-images.githubusercontent.com/26461307/177278617-82982395-d1fc-46f1-8f96-f7cb7bae95d9.png)

### 추가 정보

이 프로젝트는 `turborepo`를 사용하였습니다.

그렇기 때문에 추가적인 정보는 [vercel 가이드 링크](https://vercel.com/docs/concepts/git/monorepos#turborepo)에서 확인할 수 있습니다.