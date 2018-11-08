## 題目描述
請實作⼀一個網站並滿⾜足以下需求:

- ⾸首⾴頁上顯⽰示⽂文章列列表和建立⽂文章的按鈕
- 能夠對個別⽂文章按讚
- 根據讚數排序⽂文章，比較多讚的⽂文章排在前⾯面
- 可以使⽤用任意資料庫
- 請實作 SPA (Single Page Application)

## 技術棧

- Backend: Ruby on Rails 5.1
- Front-end: Vue 2.5.17
- Database: postgreSQL

## Setup

### step 1

安裝前端所需依賴

```
$ yarn install
```

### step 2

安裝 Rails 所需依賴

```
$ bundle install
```

### step 3

建立數據庫

```
$ rake db:create rake db:migrate
```

### step 4

運行 server

```
$ rails server
```

查看 `localhost:3000` 可以看到符合上述 spec 的畫面
