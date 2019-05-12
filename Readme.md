

## 블로그

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

 $ yarn add koa-router
 $ yarn add koa-bodyparser
```

### 블로그 포스트용 Rest API
| 종류 | 기능 |
|---|---|
| POST /posts  | 포스트 작성 |
| GET /posts  | 포스트 목록 조회  |
| GET /posts/:id  | 특정 포스트 조회  |
| DELETE /posts/:id | 특정 포스트 삭제 |
| PATCH /posts/:id/comments | 특정 포스트 업데이트 |
| POST /posts/:id/comments | 특정 포스트에 덧글 등록 |
| GET /posts/:id/comments | 특정 포스트에 덧글 목록 조회 |
| DELETE /posts/:id/comments/:commentId | 특정 포스트의 특정 덧글 삭제 |