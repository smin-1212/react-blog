

## Blog

### Start Back-end
```
 $ cd ./blog-backend/
 $ node src

 $ yarn start
 $ yarn start:dev
```

### Back-End 환경구성
```
 $ yarn init
 $ yarn add koa
 $ yarn add --dev nodemon

 package.json 에 아래 항목 추가
 =>
 "scripts": {
    "start": "node src",
    "start:dev": "nodemon --watch src/ src/index.js"
  }

```
