# How to deploy with vercel

### 1. Import git repository

![deploy step 1](https://user-images.githubusercontent.com/26461307/177278351-7b82fcbe-e6db-46bd-93f4-10e8524ef2bf.gif)

### 2. Select framework preset to `Next.js`

![deploy step 2](https://user-images.githubusercontent.com/26461307/177278363-509b3d69-f692-4458-8bc2-62173eef5e7e.gif)

### 3. Set root directory to `apps/blog` or `apps/resume`

![deploy step 3](https://user-images.githubusercontent.com/26461307/177278370-1651b4d7-e561-44df-8a62-a283450773d9.gif)

### 4. Set build command

![deploy step 4](https://user-images.githubusercontent.com/26461307/177278380-659ba348-7952-4875-9e19-0a006ad57c1a.gif)

- blog build command

```bash
cd ../.. && npx turbo run build --scope=blog --include-dependencies --no-deps
```

- resume build command

```bash
cd ../.. && npx turbo run build --scope=resume --include-dependencies --no-deps
```

### 5. Click the Deploy button! 🎉

![click the deploy button](https://user-images.githubusercontent.com/26461307/177278617-82982395-d1fc-46f1-8f96-f7cb7bae95d9.png)

### More information

This project using `turborepo`.

so, you can find more information at this [vercel guide](https://vercel.com/docs/concepts/monorepos/turborepo).
