## Before start

please check `apps/resume/_config/index.json`'s variable was filled.

## How to custom resume

You can reconfigure `apps/resume/_content/**/data.json` files.

like this file `apps/resume/_content/header/data.json`.

And you can check each type at `/index.ts` or read the following article to see it.

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
