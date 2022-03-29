## 시작하기 전에

`apps/resume/_config/index.json` 파일의 값이 채워져있는 지 확인해주세요.

## 이력서 수정하는 방법

`apps/resume/_content/**/data.json`의 파일들을 수정하는 방법으로 사용할 수 있습니다.

`apps/resume/_content/header/data.json` 이런 형태의 파일들을요!

각 값들의 타입을 확인하기 위해서는 `/index.ts` 파일을 확인하시거나 아래 문서를 읽어보시면 됩니다.

### header

```json
{
  "heading": string,
  "description": string as html
}
```

### Work Experience

```json
{
  "title": string,
  "list": [
    {
      "name": string,
      "position": string,
      "startDate": "2021.03" as date format,
      "endDate": "" as date format,
      "description": string,
      "projects": [
        {
          "title": string,
          "description": string,
          "startDate": "2022.01" as date format,
          "endDate": "" as date format,
          "which": string[],
          "techStack": string[]
        }
      ]
    }
  ]
}
```

### Other Experience

```json
{
  "title": string,
  "list": [
    {
      "name": string,
      "position": string,
      "startDate": "2018.03" as date format,
      "endDate": "2021.03" as date format,
      "description": string,
      "which": string[]
    }
  ]
}
```

### Skills

```json
{
  "title": string,
  "list": [
    {
      "name": string,
      "descriptions": string[]
    }
  ]
}
```
